import { LightningElement } from 'lwc';
import myfiles from '@salesforce/resourceUrl/myfiles'
export default class ForEach extends LightningElement {
    pics=[
        {
            id:'1',
            src:myfiles+'/image'+'/fuul.jpg',
            header:"fuul",
            description:"heelo fuul",     
            href:"https://en.wikipedia.org/wiki/Flower"
        },
        {
            id:'2',
            src:myfiles+'/image'+'/rain.gif',
            header:"fuul",
            description:"heelo fuul",     
            href:"https://en.wikipedia.org/wiki/Flower"
        },
        {
            id:'3',
            src:myfiles+'/image'+'/roadhai.jpg',
            header:"fuul",
            description:"heelo fuul",     
            href:"https://en.wikipedia.org/wiki/Flower"
        }
    ]
}