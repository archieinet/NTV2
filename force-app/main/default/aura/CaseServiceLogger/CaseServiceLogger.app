<aura:application extends="force:slds" access="GLOBAL">
    <ltng:require styles="{!$Resource.SLDS261 + '/styles/salesforce-lightning-design-system.min.css'}" />
    
    <aura:attribute name="reqTypeSelected" type="boolean" />
    <aura:handler event="c:CaseServiceCompEvent" action="{!c.storedData}" />
    
    <c:requestForService />
    <aura:if isTrue="{!v.reqTypeSelected}">
        <c:RequestDetail />        
    </aura:if> 
    
    
</aura:application>