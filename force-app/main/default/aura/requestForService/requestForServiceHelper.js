({
    init: function (cmp) {
        let action = cmp.get("c.GetCSPickList");
        action.setCallback(this, function(resp){
            let state = resp.getState();
            if (cmp.isValid() && state === "SUCCESS") {
                let {plReqType, plAcctType, plFundype, plPriorityType} = resp.getReturnValue();
             }
        });
      $A.enqueueAction(action);
    }
})
