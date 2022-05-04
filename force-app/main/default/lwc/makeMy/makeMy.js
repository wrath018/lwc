import { LightningElement } from 'lwc';

export default class MakeMy extends LightningElement {
 
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}