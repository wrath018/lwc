import { LightningElement } from 'lwc';
import Account from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import NumberOfEmployees from '@salesforce/schema/Account.NumberOfEmployees';
export default class EditForm extends LightningElement {
    objectapiname=Account;
    recordid='0015j00000doWx0AAE';
    fields=[NAME_FIELD,NumberOfEmployees]
    handlesuccess(){
          alert('success');
    }
}