import { LightningElement } from 'lwc';

export default class Test extends LightningElement {
    value='Football which is also known as soccer in many parts of the world ,was invented over a century ago. Before today popularity known modern footaball ,this game was played and was famous among the mid-19th century people. Though football is such a popular game ,many footabll lovers do not know that there exists a national football team of India that participates in many international events and is a part of the SAFF. It has also won several South Asian Football Federation of SAFF Championship.'
   count=0;
  arr=[];
  vo=false;
  inpu;
   connectedCallback(){
      this.arr=this.value.split(' ');
   }
   
    
   handleclick(){
    console.log(this.count);
    console.log(this.arr);
    
       this.inpu=this.template.querySelector('.inpu').value;
       console.log(this.inpu);
       
      for(let i=0;i<this.arr.length;i++){
               if(this.inpu==this.arr[i]){
                   this.count++;
               }
      }

           console.log(this.count);
              if(this.count!=0){
                   vo=true;
              }
             


       }
   }


