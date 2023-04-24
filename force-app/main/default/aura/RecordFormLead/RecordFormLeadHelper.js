({
	helperMethod : function(component, event) {
		component.find('notifLib').showToast({
            "variant": "Success",
            "title": "Lead Created",
            "message": "Record ID: " + event.getParam("id")
        });
	}
})