({
    onInit : function(component, event, helper) {
        let {eplReqType, eplAcctType, eplFundype, eplPriorityType} = event.getParams();
        component.set('v.myVal', '<p><script>alert(this)</script></p><p>hi!</p>');
    },
    handleFilesChange:function(component,event, helper){
        helper.handleFilesChange(event);
    },
    requestedType:function(component, event, helper){
        console.log('hello, someone have changed send request');
        component.set("v.AcctPickList",sessionStorage.getItem('eplAcctType').split(','));
        component.set("v.FundPickList",sessionStorage.getItem('eplFundype').split(','));
        component.set("v.PriorityList",sessionStorage.getItem('eplPriorityType').split(','));

       
     
    }

})



