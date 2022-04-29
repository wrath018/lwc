import { LightningElement ,api} from 'lwc';

export default class CountChild extends LightningElement {
    

    handlesubtract(){
      this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleadd(){
       this.dispatchEvent(new CustomEvent('add'));
    }

    handlemultiply(event){
            const val2=event.target.label;
            this.dispatchEvent(new CustomEvent('mul',{
                detail: val2
            }))
        }
}