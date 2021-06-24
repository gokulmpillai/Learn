import { LightningElement, track} from 'lwc';
import getAllAccounts from '@salesforce/apex/accountManagerApex.getAccounts';

export default class AccountManagerApex extends LightningElement {

    @track numberOfAccounts;
    @track accounts;

    responseReceived(){
    if(this.accountRecords){
        return true;
    }
    return false;
}
    accountChangeHandler(event){
        this.numberOfAccounts = event.target.value;
    }
    getAccountsHandler(){
        getAllAccounts({numberOfAccounts:this.numberOfAccounts}).then(response => {
            this.accounts = response;
        }).catch(error => {console.error('Error:', error.body.message);} )
    }
}