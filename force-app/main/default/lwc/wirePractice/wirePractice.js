import { LightningElement, track, wire } from 'lwc';
import getAccountRecords from  '@salesforce/apex/WireAccountApexPractice.AccountRecords';

export default class wirePractice extends LightningElement {
    @track numberOfAccounts;
    @track accounts;
    @track error;

    accountChangeHandler(event){
        this.numberOfAccounts = event.target.value;
    }
    getAccountHandler(){
    getAccountRecords({numberOfAccounts : this.numberOfAccounts}).
    then(result => {
        this.accounts = result;
        this.error = undefined;
    })
    .catch(error => {
        this.error = error;
        this.accounts = undefined;  
    });
    }
        
}