import { LightningElement,track } from 'lwc';
import main from '@salesforce/apex/testpaper.main'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AcbCon__c from '@salesforce/schema/AcbCon__c'
import NAME_FIELD from '@salesforce/schema/AcbCon__c.Name'
export default class Dap4 extends LightningElement {
    @track Result;
    objectApiName=AcbCon__c;
    fields=[NAME_FIELD];
    options01=[];
    options11;
    options02=[];
    options12;
    options03=[];
    options13;
    options04=[];
    options14;

    value1 = [];
    value2 = [];
    value3 = [];
    value4 = [];
    
    question0;
    question1;
    question2;
    question3;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

    connectedCallback(){
        main()
        .then(result=>{
            this.Result=
            console.log(result);
            // this.options=result;
            this.question0=result[0].Question__c;
            this.options01=result[0].Answers__c.split(',');
             
                this.options11= [
                    { label: this.options01[0], value: 'option1' },
                    { label: this.options01[1], value: 'option2' },
                    { label: this.options01[2], value: 'option3' },
                    { label: this.options01[3], value: 'option4' },
                ]

                this.question1=result[1].Question__c;
                this.options02=result[1].Answers__c.split(',');
                 
                    this.options12= [
                        { label: this.options02[0], value: 'option1' },
                        { label: this.options02[1], value: 'option2' },
                        { label: this.options02[2], value: 'option3' },
                        { label: this.options02[3], value: 'option4' },
                    ]

                    this.question2=result[2].Question__c;
                this.options03=result[2].Answers__c.split(',');
                 
                    this.options13= [
                        { label: this.options03[0], value: 'option1' },
                        { label: this.options03[1], value: 'option2' },
                        { label: this.options03[2], value: 'option3' },
                        { label: this.options03[3], value: 'option4' },
                    ]

                    this.question3=result[3].Question__c;
                    this.options04=result[3].Answers__c.split(',');
                     
                        this.options14= [
                            { label: this.options04[0], value: 'option1' },
                            { label: this.options04[1], value: 'option2' },
                            { label: this.options04[2], value: 'option3' },
                            { label: this.options04[3], value: 'option4' },
                        ]
            
            
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    get selectedValues() {
        return this.value1.join(',');
    }

    handleChange(e) {
        this.value1 = e.detail.value;
    }

    // tabset
   
    @track l_All_Types;
    // @track value1=1;
    @track activeTab = '1';
    get handleprevious(){
        return Number(this.activeTab) == 1 ? true : false;
    }
    get handlenext(){
        return Number(this.activeTab) == 4 ? true : false;
    }
    // JS functions start 
    handleactive(event) {
     this.activeTab = event.target.value;
    }
    
    goBack(){
        let activeTabValue = Number(this.activeTab) - 1;
        //  this.value1=JSON.stringify(this.l_All_Types[activeTabValue].Name);
        this.activeTab = activeTabValue.toString();
      }
    goNext(){
        console.log('pop');
      let activeTabValue = Number(this.activeTab) + 1;
      console.log(activeTabValue);
    //   this.value1=JSON.stringify(this.l_All_Types[activeTabValue].Name);
      this.activeTab = activeTabValue.toString();
      
    }
    
    
}