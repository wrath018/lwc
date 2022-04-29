import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message ='hgfhgv';
    @api value='';

    @api childcomp(value){
        
        this.message=value;
        alert(this.message)
        console.log()
        
    }

    handleclick(){
        const event=new CustomEvent('btnclick',{
            detail:{ 
                key:'001HSHSH',
                value1:'lwc'
             }
        });
        this.dispatchEvent(event);
    }
}