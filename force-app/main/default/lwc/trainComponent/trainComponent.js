import { LightningElement,wire,track } from 'lwc';
import main from '@salesforce/apex/train.main';

export default class TrainComponent extends LightningElement {
       stime=false;
       trains=false;
       numtrains=[];
       train1='NO train'
       train2='NO train'
       train3='NO train'
       train4='NO train'
     
      time;
      
       value=false;
    showtime(){
        this.stime=true;
        this.trains=true;
          
        

        
        

    }

    timechange(event){
        
        this.value=true;
        this.time=event.target.value;
       
       
       const a= main({t:this.time})
            .then(result=>{
                console.log(JSON.stringify(result));
                this.numtrains=JSON.parse(JSON.stringify(result));
                
            })
           
            
        
            
        
        Promise.all([a]).then(result=>{
            console.log(this.numtrains);
            if(this.numtrains.length!=0){
                this.train1=this.numtrains[0].Name;
                this.train2=this.numtrains[1].Name;

                
            }
          else{
            this.train1='NO train';
            this.train2='NO train';
            this.train3='NO train';
            this.train4='NO train';
          }
        })

        
        
    }
  

    
  
    

}