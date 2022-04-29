import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class Navigationdemo extends NavigationMixin(LightningElement) {

    // // contacts[
    //      {
    //          id:'001',
    //          Name:'popat' 
    //      },
    //      {
    //          id:'002',
    //          Name:'jopat'
    //      }
    //  ];






    navigatetoRecordDetailPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "Home",
                objectApiName: "Account"
            }
        });
    }
    createrecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Account"
            }
        });
    }
    
}