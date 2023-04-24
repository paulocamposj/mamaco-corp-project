({
    getData : function(cmp) {
        var action = cmp.get('c.getMateriais');
        
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.mydata', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    helperMethod : function(component, event) {
		component.find('notifLib').showToast({
            "variant": "Success",
            "title": "Material Created",
            "message": "Record ID: " + event.getParam("id")
        });
	}
    
})