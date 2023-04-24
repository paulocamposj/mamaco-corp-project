({
   init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Company', fieldName: 'Company', type: 'text'},
            { label: 'Status', fieldName: 'Status', type: 'picklist'}
        ]);
        helper.getData(cmp);
    }
})