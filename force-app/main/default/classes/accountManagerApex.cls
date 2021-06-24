public with sharing class accountManagerApex {
    @AuraEnabled (cacheable = true)
    public static List<Account> getAccounts(Integer numberOfAccounts) {
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT  :numberOfAccounts];
    }
}
