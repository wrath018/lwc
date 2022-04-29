import { LightningElement ,track,api,wire} from 'lwc';
import main from '@salesforce/apex/getAccountb.main';
export default class DapThree extends LightningElement {
    @track columns=[{label: 'R1',fieldName :'Name'},
           {label: 'R2',fieldName :'Name'},
           {label :'R3', fieldName :'Name'},
           {label :'R4', fieldName :'Name'}
    ]
     data;
      error;
     connectedCallback(){
      main()
      .then(result => {
          this.data=result;
      }).catch(err => {
          this.error=err;
      });
    console.log(this.data);
    }

}