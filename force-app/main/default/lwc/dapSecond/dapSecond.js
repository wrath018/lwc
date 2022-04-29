import { LightningElement ,track,wire,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/LeadCopy__c.Name';
import LeadCopy__c from '@salesforce/schema/LeadCopy__c';
import main from '@salesforce/apex/getAccountb.main';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class DapSecond extends LightningElement {
    @track fields=NAME_FIELD;
    @track objectapiname=LeadCopy__c;
    
    @track l_All_Types;
    @track TypeOptions;

    @wire (main)
    result({data,error}){
    if (data) {
        try {
            this.l_All_Types = data; 
            let options = [];
             
            for (var key in data) {
                // Here key will have index of list of records starting from 0,1,2,....
                options.push({ label: data[key].Name, value: data[key].Id });

                // Here Name and Id are fields from sObject list.
            }
            this.TypeOptions = options;
             
        } catch (error) {
            console.error('check error here', error);
        }
    } else if (error) {
        console.error('check error here', error);
    }

}


handleTypeChange(event){
    var Picklist_Value = event.target.value; 
    // Do Something.
}

@track value1=1;
@track activeTab = '1';
get handleprevious(){
    return Number(this.activeTab) == 1 ? true : false;
}
get handlenext(){
    return Number(this.activeTab) == 5 ? true : false;
}
// JS functions start 
handleactive(event) {
 this.activeTab = event.target.value;
}

goBack(){
    let activeTabValue = Number(this.activeTab) - 1;
     this.value1=JSON.stringify(this.l_All_Types[activeTabValue].Name);
    this.activeTab = activeTabValue.toString();
  }
goNext(){
  let activeTabValue = Number(this.activeTab) + 1;
  this.value1=JSON.stringify(this.l_All_Types[activeTabValue].Name);
  this.activeTab = activeTabValue.toString();
}
// JS functions end  
// picklist                               =========================

picklistValues;
error;
@wire(getPicklistValues, { 
    recordTypeId: '012000000000000AAA', fieldApiName: NAME_FIELD
})
wiredPicklist({ error, data }){
    
    if(data){
        // console.log(JSON.stringify(data));
        this.picklistValues = data.values;
        console.log(' data ', data.values);
        this.error = undefined;
    }
    if(error){
        this.picklistValues = undefined;
        this.error = error;
    }
}

handleValueChange(event){
    console.log(JSON.stringify(event.detail));
}


}