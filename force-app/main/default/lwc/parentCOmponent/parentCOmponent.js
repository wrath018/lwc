import { LightningElement } from 'lwc';

export default class ParentCOmponent extends LightningElement {
    message='I am from Parent Component'
     // value='';
      value2='';
     

    handleclick(){
        this.message='Message Changed';
    }
    msg(event){
        this.value=event.target.value;
    }

    childcomp() {
        this.template.querySelector('c-child-component').childcomp(this.value);
    }
    handleevent(event){
        let key=event.detail.key;
        let value1=event.detail.value1;
        this.value2=key+'  '+value1;
        window.console.log(this.value2);
    }
}