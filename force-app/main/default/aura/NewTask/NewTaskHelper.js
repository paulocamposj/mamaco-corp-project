({
	helperMethod : function(component, event) {
		component.find('notifLib').showToast({
            "variant": "Success",
            "title": "Task Created",
            "message": "Record ID: " + event.getParam("id")
        });
	}
})