({
    onInit : function(component, event, helper) {
        let {eplReqType, eplAcctType, eplFundype, eplPriorityType} = event.getParams();
        component.set('v.myVal', '<p><script>alert(this)</script></p><p>hi!</p>');
    },
    handleFilesChange:function(component,event, helper){
        helper.handleFilesChange(event);
    }
})



