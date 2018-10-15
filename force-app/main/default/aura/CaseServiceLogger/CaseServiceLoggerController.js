({
    onChange : function(component, event) {
        component.set("v.reqTypeSelected",event.getParams().reqTypeSelected); 
    },
    requestedType:function(component){
        component.set("v.reqTypeSelected",true);
    }
})