public with sharing class CarSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> CarSearchControllerMethod() {
        return [SELECT Id, Name FROM Car_Type__c];
    }
}
