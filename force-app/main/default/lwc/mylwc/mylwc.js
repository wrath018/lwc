
import { LightningElement,wire ,track,api} from 'lwc';
 //import getContact from '@salesforce/apex/firstClass.getContact';
// import{ShowToastEvent} from 'lightning/platformShowToastEvent';
//import get from '@salesforce/apex/getContacts.get';
import ACCOUNT_OBJECT   from'@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
// const columns=[
//     {label: 'Name', fieldName:"Name"},
//     {label :'Account Record Id', fieldName:'Id'},
// ];
export default class mylwc extends LightningElement {
    
    // greeting = 'MYWorld';
    // result;
    // error;
    // displayAccs = false;
    // changeHandler(event) {
    //   this.greeting = event.target.value;
    // }
    // @wire(getContact)
    //       WiredData ({error, data}) {
    //     if (error) {
    //         // TODO: Error handling
    //         this.error=error;
    //         console.log('Error',error);
    //     } else if (data) {
    //         // TODO: Data handling
    //         this.result=data;
    //         console.log('Contact Records',data);
    //     }
    // }
    //   inputText='';
    //   handleclick(event){
    //       this.inputText=event.target.value;
    //      console.log(this.inputText);
      
    // }

    // getAccounts() {
    //     this.displayAccs = true;
    // }

    // handlesubmit(){
    //     alert('Button clicked');
    // }
     
    // handleclick2(){
    //     this.showevent();
    // }

    // showToast(){
    //     const event=new ShowToastEvent({
    //         title:'toast demo',
    //         message: 'hello fuddu',
    //         variant:'error'
    //     });
    //     this.dispatchEvent(event);
    // }
      

    //   // result =false;
    //   showevent(){
    //   //    this.result=true;
    //     const eve=new CustomEvent('btnclick',{
    //         detail:{
    //         name:'puneet',
    //         variant:'success'
    //         }
    //     });
    //     this.dispatchEvent(eve);
       
    //   }
     
    //  handleevent(eve){
    //      let Name=eve.detail.name;
    //      let Variant=eve.detail.variant;
    //      console.log(Name);
    //  }
     
    //  @track columns=columns;
    //  @track data=[];
     


    // @wire(getAccounts)
    //    wireAccounts({data,error}){
    //     if (error) {
    //                 // TODO: Error handling
    //                 this.error=error;
    //                 console.log('Error',error);
    //             } else if (data) {
    //                 // TODO: Data handling
    //                 this.data=data;
    //                 console.log('Contact Records',data);
    //             }
    //         }

    //  @api recordid='0015j00000Z6eEvAAJ';
    
       
    // connectedCallback(){
    //     get({i : this.recordid})
    //         .then(data =>{
    //             this.data=data;
    //         })
    //         .catch(error=>{
    //             this.error=error;
    //         });
    //     }
    // // }
     //@api searchKey;
    //  handlechange(event){
    //    this.searchKey=event.target.value;

    //    get({searchkey:this.searchKey, i:this.recordid})
    //           .then(data=>{
    //               this.data=data;
    //           })
    //           .catch(error=>{
    //               this.error=error;
    //           });
    //  }
      
    //  handlerows(event){
    //      let arr=event.detail.selectedRowDetails;
    //      alert(JSON.stringify(arr));
    //  }

    // @track value='';
    // @track conoption=[];
    // @api mona=false;
    // get options(){
    //     return  this.conoption;
        
    // }

    // connectedCallback(){
    //     getContact()
    //     .then(data=>{
    //         this.data=data;
    //         let arr=[];
    //         for(var i=0;i<data.length;i++){
    //             arr.push({label: data[i].Name , value: data[i].Name})
    //         }
    //         this.conoption=arr;
    //     })
    //     .catch(error=>{
    //         this.error=error;
    //     })

        
    // }




    // handlechanged(event){
    //     this.mona=true;
    //      this.value=event.detail.value;
    //     this.searchKey=this.value;

    //    get({searchkey:this.searchKey})
    //           .then(data=>{
    //               this.data=data;
    //           })
    //           .catch(error=>{
    //               this.error=error;
    //           });
    //  }
  

      @api objectApiName=ACCOUNT_OBJECT;
      @api namefield= NAME_FIELD;
      @api faxfield=FAX_FIELD;
      @api recordid='0015j00000Z6eEvAAJ';


    }
