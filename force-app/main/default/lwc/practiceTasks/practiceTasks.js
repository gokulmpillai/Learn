import { LightningElement, track } from 'lwc';

export default class PracticeTasks extends LightningElement {
    @track dynamicGreeting;
    @track checkbox = false;
    cityList = ['Mumbai', 'Delhi', 'Kolkata', 'Ahmedabad', 'Bengaluru'];
    greetingHandler(event){
          this.dynamicGreeting = event.target.value;
    }
    checkHandler(event){
        this.checkbox = event.target.checked;
    }
}  