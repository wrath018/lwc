public with sharing class QBCallout{
    private String accessToken{get;set;}
        private String refreshToken{get;set;}
        
    public QBCallout(){
        List<String> tokens = refresh();
    }

    private List<String> refresh(){
        //Get Custom setting data
        QBdata__c QBData = [SELECT ID,   
        Name,
        Refresh_Token__c,
        Client_Id__c, 
        Client_Secret__c,
        Auth_URL__c
        FROM QBdata__c];


        String url = QBData.Auth_URL__c;
        String clientId= QBData.Client_Id__c;
        String clientSecret = QBData.Client_Secret__c;
        String header= 'Basic ' + EncodingUtil.base64Encode(Blob.valueOf(clientId +' : ' + clientSecret));
        String refresh_token = QBData.Refresh_Token__c;
        String body = 'grant type=refresh_token&refresh_token=' + refresh_token;


        Http h = new Http();
   HttpRequest req = new HttpRequest();
    HttpResponse res = new HttpResponse();
   req.setEndpoint(url);
   req.setMethod('POST');
   req.setBody(body);
   req.setHeader('Authorization', header);
    req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
   res = h.send(req);
   System.debug(res.getBody());
     QBRefreshJSON json=QBRefreshJSON.parse(res.getBody());
// System.debug(json);
if(json.access_token == null){
    Throw new QBException('Refresh Token has expired. ');
}
    List<String> tokens = new List<String>{json.access_token, json.refresh_token};
    accessToken = tokens[0];
    refreshToken = tokens[1];
    return tokens;
    



}      

 /**
* Update the custom setting for the refresh token
* @param refreshToken the current refresh token that will be updated
*/
public void updateRefreshToken(){
    QBdata__c QBData = [SELECT ID,   
        Name,
        Refresh_Token__c,
        Client_Id__c, 
        Client_Secret__c,
        Auth_URL__c
        FROM QBdata__c];
    QBData.Refresh_Token__c= refreshToken;
    QBData.Last_Updated__c = Datetime.now();
    update QBData;

}






public QBCustomerJSON getCustomer(Account acc){
    if(acc == null){
    Throw new NullPointerException();
    }
    //Initilize query
    String query = 'Select * from Customer where job = False and ' +
                             'DisplayName = \'' + acc.Name.replaceAll('\'', '\\\'') +'\'' ;
        if(acc.QB_Id__c != null){
            query = 'Select * from Customer where job = False and Id = \'' + Acc.QB_Id__c + '\'';
        }
    System.debug(query);  
    
    
     //Initialze url endpoint
QBO_Metadata__mdt QBData = [SELECT ID,
base_url__c,
Company_Id__c,

minorversion__c
FROM QBO_Metadata__mdt];
String url = QBData.base_url__c + '/v3/company/' + QBData.Company_Id__c + '/query?minorversion=' + QBData.minorversion__c;
//Start http request
Http h = new Http();
HttpRequest req = new HttpRequest();
HttpResponse res = new HttpResponse();
System.debug (accessToken);
req.setEndpoint (url);
req.setMethod('POST');
req.setBody(query);
req.setHeader('Authorization', 'Bearer' + accessToken);
req.setheader('Accept', 'application/json');
req.setHeader('Content-Type', 'application/text');

res =h.send(req);
System.debug(res.getBody());
handleResponseError(res.getBody ());
QBCustomerJSON json=QBCustomerJSON.parse(res.getBody());

return json;


    }



    public QBCustomerResponseJSON createCustomerCall(Account acc){

        //Map acc data to QB Customer JSON
        String body = QBMap.mapAccountData(acc);

        //Initialze url endpoint
        QBO_Metadata__mdt QBData = [SELECT ID,
                            base_url__c,
                            Company_Id__c,
                            minorversion__c
                    FROM QBO_Metadata__mdt];
        String url = QBData.base_url__c + '/v3/company/' + QBData.Company_Id__c + '/customer?minorversion=' + QBData.minorversion__c;

        //Start http request
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setEndpoint(url);
        req.setMethod('POST');
        req.setBody(body);
        req.setHeader('Authorization', 'Bearer ' + accessToken);
        req.setheader('Accept', 'application/json');
        req.setHeader('Content-Type', 'application/json');
        res = h.send(req);
        System.debug(res.getBody());
        handleResponseError(res.getBody());
        QBCustomerResponseJSON json = QBCustomerResponseJSON.parse(res.getBody());

        return json;
    }

    private void handleResponseError(String body){
        QBOErrorJSON error = QBOErrorJSON.parse(body);
        if(error != null){
        if(error.Fault != null && error.Fault.Error != null && error.Fault.Error.size() > 0)
        Throw new QBException(String.valueOf (error.Fault.Error[0]));
        }
        
        }
        
        
}
