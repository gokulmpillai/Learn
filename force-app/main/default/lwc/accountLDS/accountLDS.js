import { LightningElement, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountLDS extends LightningElement {
    @track recordId;
    accFields = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

    successHandler(event){
        this.recordId = event.detail.id;
    }
}