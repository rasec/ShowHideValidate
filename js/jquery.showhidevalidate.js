(function($){
	$.fn.extend({
		showHideValidate : function(options){
			var defaults = {
				divClass : "divToToggle",
				showClass : "showEnable",
				hideClass : "hideDisabled"
			},
				o = $.extend(defaults, options),
				divClass = o.divClass,
				showClass = o.showClass,
				hideClass = o.hideClass,
				container = $( "." + divClass );
			
			var check = function(obj) {
				if ( ( obj.hasClass(showClass) && obj[0].checked && obj.is("input[type=radio]") ) || obj.find("option:selected").hasClass(showClass) || ( obj[0].checked && obj.is("input[type=checkbox]") ) ) {
					container.showAndEnable();
				} else if ( ( obj.hasClass(hideClass) && obj[0].checked && obj.is("input[type=radio]") ) || obj.find("option:selected").hasClass(hideClass) || ( !obj[0].checked && obj.is("input[type=checkbox]") ) ) {
					container.hideAndDisable();
				}
			};
			
			return this.each(function(){
				var obj = $(this);
				
				check(obj);
				
				obj.change(function(){
					check(obj);
				});
				
			});
		},
		
		hideAndDisable : function() {
			return this.each(function(){
				var obj = $(this);
				obj.hide();
				obj.find("input, select, textarea").attr("disabled", "disabled");
			});
		},
		showAndEnable : function() {
			return this.each(function(){
				var obj = $(this);
				obj.show();
				obj.find("input, select, textarea").removeAttr("disabled");
			});
		}
		
	});
	
})(jQuery);
