import { LightningElement,wire,api } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ContentDocumentLink from '@salesforce/schema/ContentDocumentLink'
import ContentDocumenttitle_Field from '@salesforce/schema/ContentDocument.title'
const columns =[
    {label: 'Name',fieldName:'ContentDocument.Title'},
    {label:'Id',fieldName:'ContentDocumentId'}
]
import main from '@salesforce/apex/forquestion.main'
export default class SecondQuestion extends LightningElement {
    @api recordid;
    data=[];
    columns=columns;
   connectedCallback(){
     main({i:this.recordid})
         .then(data=>{
             this.data=data;
             console.log(this.data);
         })
         .catch(error=>{
             console.log(error);
         })
    }



  



}
