<aura:application extends="force:slds" access="GLOBAL">

    <ltng:require styles="{!$Resource.SLDS261 + '/styles/salesforce-lightning-design-system.min.css'}" />
    <aura:attribute name="reqTypeSelected" type="boolean" default="false" />
    <aura:handler event="c:CaseServiceAppEvent" action="{!c.requestedType}" />

    <lightning:layout horizontalAlign="center">
        <lightning:layoutItem padding="around-small">
            <div class="slds">
             <aura:if isTrue="{!not(v.reqTypeSelected)}"> 
                <c:requestForService />
            </aura:if>
            <aura:if isTrue="{!v.reqTypeSelected}">
                <c:RequestDetail />
            </aura:if>
        </div>
        </lightning:layoutItem>
    </lightning:layout>



</aura:application>