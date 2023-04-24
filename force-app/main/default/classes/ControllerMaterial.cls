public with sharing class ControllerMaterial {
    @AuraEnabled
    public static List<Material__c> getMateriais() {
        List<Material__c> materiais = [SELECT Name, Data_da_Compra__c, Preco_Total__c, Preco_Unitario__c 
                            FROM Material__c 
                            LIMIT 10];        
        return materiais;
    }
}