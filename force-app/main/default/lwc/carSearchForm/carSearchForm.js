import { LightningElement, track, wire } from 'lwc';
import CarSearchControllerMethod from '@salesforce/apex/CarSearchController.CarSearchControllerMethod';

export default class carSearchForm extends LightningElement {
    @track carTypes;
    @wire(CarSearchControllerMethod)
    controller
    
    get options() {
        return [
            { label: 'All Types', value: 'alltypes' },
            { label: 'Sedan', value: 'sedan' },
            { label: 'Hatchback', value: 'hatchback' },
            { label: 'SUV', value: 'suv' }
        ];
    }
    getCarTypes({data, error}){
        if(data){
            this.carTypes = data;
        }
        else if(error){
            const errorMessage = error.body.message;
        }
    }
}