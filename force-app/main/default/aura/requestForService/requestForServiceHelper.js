({
    init: function (cmp) {
        let action = cmp.get("c.GetCSPickList");
        action.setCallback(this, function(resp){
            let state = resp.getState();
            if (cmp.isValid() && state === "SUCCESS") {
                let {plReqType, plAcctType, plFundype, plPriorityType} = resp.getReturnValue();
                // let evtType = cmp.getEvent("appEvt");
                sessionStorage.setItem("eplAcctType", plAcctType);
                sessionStorage.setItem("eplFundype", plFundype);
                sessionStorage.setItem("eplPriorityType", plPriorityType);
                cmp.set("v.ReqTypeList", plReqType);

                // evtType.setParams({
                //     "eplAcctType": plAcctType,
                //     "eplFundype": plFundype,
                //     "eplPriorityType": plPriorityType
                // });
                // evtType.fire();

             }
        });
      $A.enqueueAction(action);
    }
    
})