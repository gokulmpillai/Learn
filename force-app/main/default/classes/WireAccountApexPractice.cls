public with sharing class WireAccountApexPractice {
    @AuraEnabled
    public static List<Account> AccountRecords(Integer numberOfAccounts) {
    List<Account> listOfAccounts = [SELECT Id, Name, Phone FROM Account LIMIT : numberOfAccounts];
    return listOfAccounts;
    }
}
