public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return [Select id,Name from Account Limit 25];
        
    }
}
