import { createRecord, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, track, wire } from 'lwc';

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountRecordCreation extends LightningElement {
    @track accountName;
    @track accountPhone;
    @track accountWebsite;
    @track recordId;

    @wire(getRecord, {recordId : '$recordId', fields: fieldArray})
    accountRecord;

    accountNameHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteHandler(event){
        this.accountWebsite = event.target.value;
    }
    accountCreationHandler(){
        const fields = {'Name': this.accountName, 'Phone': this.accountPhone, 'Website': this.accountWebsite};
        const recordinput = {apiName: 'Account', fields};
        createRecord(recordinput).then(Response => {
            console.log('Account has been created successfully', Response.id)
            this.recordId = Response.id;
        }).catch(error =>{
            console.log('Account creation error');
        });
    }
    get retaccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
            return undefined;
    }
    get retaccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
            return undefined;
    }
    get retaccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
            return undefined;
    }
}