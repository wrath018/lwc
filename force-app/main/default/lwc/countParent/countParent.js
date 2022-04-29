import { LightningElement,api } from 'lwc';

export default class CountParent extends LightningElement {
   
    @api value=0;
     @api val;
    subtract(){
        this.value--;
    }
    add(){
        this.value++;
    }
    

    mul(event){
        this.value=this.value*event.detail;
    }
}