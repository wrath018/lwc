import { LightningElement,track } from 'lwc';

export default class Buttons extends LightningElement {
      

    @track sub1;
    @track sub2;
    @track total;
    @track percen;
    @track state;
    @track value=false;
    
    @track customclass='greencolor';
    calulate(){
        console.log(this.sub1,this.sub2);
        this.sub1=parseInt(this.template.querySelector(".inpu1").value); 
        this.sub2=parseInt(this.template.querySelector(".inpu2").value); 
        this.total=this.sub1+this.sub2;
        console.log(this.total);
        this.percen=(this.total/200)*100;
        if(this.percen<50){
            console.log('f');
            this.state='Fail';
            this.customclass='redcolor';
        }else{
            console.log('p');
            this.state='Pass';
            this.customclass='greencolor';
        }
        this.value=true;
    }
     

    @track sub3;
    @track customclass1='greencolor';
    @track value1=false;
    handlechange(){
        console.log('ok');
        this.sub3=parseInt(this.template.querySelector(".inpu3").value);
        console.log(this.sub3);
        if(this.sub3<40){
             this.customclass1='redcolor'
        }
        else if(this.sub3>40&&this.sub3<70){
            this.customclass1='yellowcolor'
       }else{
           this.customclass1='greencolor';
       }
       this.value1=true;
    }
}