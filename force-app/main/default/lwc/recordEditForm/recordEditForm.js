import { LightningElement ,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import NumberOfEmployees from '@salesforce/schema/Account.NumberOfEmployees';
import oo_baby from '@salesforce/schema/Account.oo_baby__c';
export default class RecordEditForm extends LightningElement {
 @api name=NAME_FIELD;
@api objectApiName='Account';
@api noe=NumberOfEmployees;
oobebi = oo_baby;
id='0015j00000doWx0AAE';
 submit(event){
     console.log(event.detail);
 }
    success(){
        alert('success');
    }
   error(){
       alert('error');
   }
}