public with sharing class firstClass {
    public firstClass() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){
       return [Select id,Name from Contact Limit 20];
    }
}
