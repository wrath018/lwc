import { LightningElement,track, wire } from 'lwc';

import main from '@salesforce/apex/getAccountb.main'
import Account_backup__c from '@salesforce/schema/Account_backup__c';
import NAME_FIELD from '@salesforce/schema/Account_backup__c.Name';

export default class DapFirst extends LightningElement {
    check =false;
    @track data=[];
    @track error;
    @track columns = [
        { label: 'Id', fieldName : 'Id'},
        { label: 'PName' ,fieldName : "Name" }
    ];


    connectedCallback(){
    main()
        .then(result=>{
             console.log(JSON.stringify(result));
            const acc=JSON.parse(JSON.stringify(result));
            console.log(JSON.stringify(acc));
           for(let i=0;i<acc.length;i++){
               
              var contemp=acc[i]['AcbCons__r'];
           
           if(contemp){
               acc[i]['_children']=contemp;
               console.log(JSON.stringify(acc[i]._children));
               delete acc[i].AcbCons__r;
           }
           }
             this.data=acc;
             console.log(JSON.stringify(this.data));
             console.log(JSON.parse(JSON.stringify(this.data)));
        }).catch(error=>{
            this.error=error;
            console.log(error);
        })
    
}

    // on row selection
    @track gridColumns=[
                 {
                     type:"text",
                     fieldName:"Name",
                     label:"name"
                 },
                 {
                     type: 'text',
                     fieldName: 'Account_backup__c',
                     label: 'accBackup'
                 }

    ]

    
    
   
    @track objectapiname=Account_backup__c;
    @track fields=NAME_FIELD;
      handleclick(){
          this.check=true;
      }

      handlesubmit(){
          console.log('test');
           window.location.reload();


      }
      closeModal() {
        // Setting boolean variable to false, this will hide the Modal
        this.check = false;}


        select(event){
            const selrows=event.detail.selrows;
            for(let i=0;i<selrows.length;i++){
                     console.log(selrows[i]);
            }

        }
}