({
   init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Data de Compra', fieldName: 'Data_da_Compra__c', type: 'date'},
            { label: 'Preço Unitário', fieldName: 'Preco_Unitario__c', type: 'currency'},
            { label: 'Preço Total', fieldName: 'Preco_Total__c', type: 'currency'}
        ]);
        helper.getData(cmp);
    },
    
	handleSuccess : function(component, event, helper) {
		helper.helperMethod(component, event);
	}
    
})