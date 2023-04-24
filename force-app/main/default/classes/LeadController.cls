public with sharing class LeadController {
    @AuraEnabled
    public static List<Lead> getLeads() {
        List<Lead> leads = [SELECT Name, Company, Status 
                            FROM Lead 
                            WHERE Negotiation__c = true AND (Status = 'Open - Not Contacted' OR Status = 'Working - Contacted') 
                            ORDER BY Name LIMIT 10];        
        return leads;
    }
}