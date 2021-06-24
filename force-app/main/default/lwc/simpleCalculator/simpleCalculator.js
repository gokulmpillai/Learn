import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
     @track currentValue;
     @track checkboxValue = false;
     firstNumber;
     secondNumber;
     previousResults=[];
     numberChangeHandler(event){
        const eventValue = event.target.name;
        if(eventValue === "fnumber"){
            this.firstNumber = event.target.value;
        }
        else if(eventValue === "snumber"){
            this.secondNumber = event.target.value;
        }
     }
     addHandler(){
         const firstN = parseInt(this.firstNumber);
         const secondN = parseInt(this.secondNumber);
         this.currentValue = `The result of ${firstN}+${secondN} is ${firstN+secondN}`;
         this.previousResults.push(this.currentValue);
     }
     subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentValue = `The result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentValue);
    }
    mulHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentValue = `The result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentValue);
    }
    divHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentValue = `The result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentValue);
    }
    previousResultsHandler(event){
        this.checkboxValue = event.target.checked;
    }

}