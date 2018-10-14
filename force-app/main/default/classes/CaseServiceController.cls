public with sharing class CaseServiceController {

    public class CSWrapper{
        @AuraEnabled public List<String> plReqType;
        @AuraEnabled public List<String> plAcctType;//Account_Type__c
        @AuraEnabled public List<String> plFundype;//Funding_Type__c
        @AuraEnabled public List<String> plPriorityType;//Priority_Type__c   
    }

     
    public CaseServiceController(){ }

    @AuraEnabled
    public static CSWrapper GetCSPickList(){
        CSWrapper model = new CSWrapper();
            model.plReqType = getPickList(CaseService__c.Request_Type__c.getDescribe().getPickListValues());
            model.plAcctType= getPickList(CaseService__c.Account_Type__c.getDescribe().getPickListValues());
            model.plFundype = getPickList(CaseService__c.Funding_Type__c.getDescribe().getPickListValues());
            model.plPriorityType = getPickList(CaseService__c.Priority__c.getDescribe().getPickListValues());
            // system.debug(model);
        return model;
    }

    
    

    //list of attribute
    @TestVisible static List<String> getPickList(List<PickListEntry> values){
        List<string> model = new List<string>();
        for (PickListEntry item : values) {
            model.add(string.valueOf(item.getLabel()));
        }
        return model;
    }

    //create new case service request
    //save information
    //update information
    
}