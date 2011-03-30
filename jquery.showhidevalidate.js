(function($){
	$.fn.extend({
		showHideValidate : function(options){
			var defaults = {
				divClass : "divToToggle",
				showClass : "showEnable",
				hideClass : "hideDisabled"
			};
			
			var o = $.extend(defaults, options);
			
			return this.each(function(){
				var obj = $(this);
				
				var divClass = o.divClass;
				var showClass = o.showClass;
				var hideClass = o.hideClass;
				
				var container = $( "." + divClass );
				
				var check = function() {
					if ( ( obj.hasClass(showClass) && obj.is("input[type=radio]:checked") ) || obj.find("option:selected").hasClass(showClass) || obj.is("input[type=checkbox]:checked") ) {
						container.showAndEnable();
					} else if ( ( obj.hasClass(hideClass) && obj.is("input[type=radio]:checked") ) || obj.find("option:selected").hasClass(hideClass) || obj.is("input[type=checkbox]:not(:checked)") ) {
						container.hideAndDisable();
					}
				};
				
				check();
				
				obj.change(function(){
					check();
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
