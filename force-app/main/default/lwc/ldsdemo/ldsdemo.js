import { LightningElement } from 'lwc';

export default class Ldsdemo extends LightningElement {
    

    handleerror(){
      alert('error');
    }
    handlesuccess(){
      alert('created');
    }
    handlesubmit(){
     alert('form submit');
    }
}