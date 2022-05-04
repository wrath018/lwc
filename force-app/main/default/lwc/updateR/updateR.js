import { LightningElement } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Account.Id';
import NOE from '@salesforce/schema/Account.NumberOfEmployees';
const arrFields = ['Case.Subject'];
export default class UpdateR extends LightningElement {
   

    strCaseId = '0015j00000eMMnnAAG';
    updateCase(){
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.strCaseId;
        fields[NOE.fieldApiName] = this.template.querySelector("[data-field='Subject']").value;
        const recordInput = { fields };
        updateRecord(recordInput)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Case Updated',
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            console.log(error);
        });
    }
}
