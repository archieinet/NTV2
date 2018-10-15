({
    init : function(component,event, helper) {
        helper.init(component);


    }, 
    SelReqType:function(component,event,helper){
        


    },
    continue:function(component,event,helper){
        let reqType = component.find("ReqType").get("v.value");

        if (reqType !== "") {
            var evt = $A.get("e.c:CaseServiceAppEvent");
            evt.setParams({
                "eplReqType": reqType,
                reqTypeSelected: reqType !== ""
            });
            evt.fire();
        }
    }
})