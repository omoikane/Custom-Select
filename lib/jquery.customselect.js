/**
 * Custom Select jQuery Plugin
 *
 * <description>
 *
 * @copyright Copyright 2010, Daniele De Nobili - www.metaline.it
 * @version 1.0
 */
(function($){

	$.fn.customselect = function() {
		this.hide();

		return this.each(function(){
			var that = $(this),
				sel = $("option:selected", that);

			// Creo la lista con le opzioni
			var items = '';
			$("option", that).each(function(){
				var t = $(this);
				items += '<li style="width: ' + (w - wa - 1) + 'px"><a rel="' + t.attr('value') + '">' + t.text() + '</a></li>';
			});

			// Box che sostituisce la select
			var box = '<div class="selectBox"><div class="selectContent"><div class="selectList"><span>' + sel.text() + '</span></div><span class="selectArrow"></span></div><ul>' + items + '</ul></div>';

			// Posiziono il box dopo la select e lo seleziono
			that.after(box);
			box = that.next();

			// Imposto le larghezze per adattarmi al CSS della select originale
			var w = that.outerWidth(), wa = $(".selectArrow", box).outerWidth();
			box.css("width", w);
			$(".selectList", box).css("width", w - wa);
			$("li", box).css("width", w - wa - 1);

			// Classi .first e .last per aiutare il CSS
			$('li:first', box).addClass("first");
			$('li:last', box).addClass("last");

			// Click sul box
			box.click(function(e){
				$("ul", box).show();
			});
		});

//		return this.each(function() {
//			var that = $(this),
//
//				// get the width from the original select box
//				w = that.outerWidth(),
//
//				// get the default selected option
//				whatSelected = that.children('option:selected').text(),
//
//				// create a new array of div options from the original's options
//				addItems = [];
//
//			that.children('option').each( function() {           
//				addItems.push('<li style="width:' + (w - 21) + 'px;"><a href="#" rel="' + $(this).attr('value') + '" tabindex="0">' + $(this).text() + '</a></li>');
//			});
//
//			// hide the default from the list of options 
//			var removeFirst = addItems.shift();
//
//			// write everything after each selectbox
//			that.after('<div class="selectBox" style="width:' + w + 'px" tabindex="0"><div class="selectContent"><div class="selectList" style="width:' + (w - 20) + 'px;"><span>'+ whatSelected +'</span></div><span class="selectArrow"></span></div><ul>' + addItems.join('') + '</ul></div>');
//
//			// this var selects the div select box directly after each of the originals
//			var nGDD = that.next('.selectBox');
//			$('li:first', nGDD).addClass("first");
//			$('li:last', nGDD).addClass('last');
//
//			//handle the on click functions - push results back to old text box
//			nGDD.click( function(e) {
//				var myTarA = $(e.target).attr('rel');
//				var myTarT = $(e.target).text();
//				var myTar = $(e.target);
//
//				// if closed, then open
//				if( $(nGDD).find('li').css('display') == 'none' ) {
//					// this next line closes any other selectboxes that might be open
//					$('.selectBox').find('li').css('display','none');
//					$(nGDD).find('li').css('display','block');
//
//					// if user clicks off of the div select box, then shut the whole thing down
//					$(document.window || 'body').click(function(f) {
//						var myTar2 = $(f.target);
//						if (myTar2 !== nGDD) {
//							$(nGDD).find('li').hide();
//						}
//					});
//
//					return false;
//				}
//				else
//				{      
//					if (myTarA == null) {
//						$(nGDD).find('li').css('display','none');
//							return false;
//						} else {
//							//set the value of the old select box
//							that.val(myTarA);
//
//							//set the text of the new one
//							$(nGDD).find('.selectList span').text(myTarT);
//							$(nGDD).find('li').css('display','none');
//							return false;
//						}
//					}
//
//			//handle the tab index functions
//			}).focus( function(e) {        
//				$(nGDD).find('li:first').addClass('currentDD');
//				$(nGDD).find('li:last').addClass('lastDD');
//
//				function checkKey(e){
//
//					//on keypress handle functions
//					function moveDown() {
//						var current = $(nGDD).find('.currentDD:first'),
//							next = $(nGDD).find('.currentDD').next();
//
//						if ( $(current).is('.lastDD') ){
//							return false;
//						} else {
//							$(next).addClass('currentDD');
//							$(current).removeClass('currentDD');
//						}
//					};
//
//					function moveUp() {
//						var current = $(nGDD).find('.currentDD:first'),
//							prev = $(nGDD).find('.currentDD').prev();
//
//						if ( $(current).is('.first') ){
//							return false;
//						} else {
//							$(prev).addClass('currentDD');
//							$(current).removeClass('currentDD');
//						}
//					};
//
//					var curText = $(nGDD).find('.currentDD:first').text(),
//						curVal = $(nGDD).find('.currentDD:first a').attr('rel');
//
//					switch (e.keyCode) {
//						case 40:
//							that.val(curVal);
//							$(nGDD).find('.selectList span').text(curText);
//							moveDown();
//							return false;
//							break;
//
//						case 38:
//							that.val(curVal);
//							$(nGDD).find('.selectList span').text(curText);
//							moveUp();
//							return false;
//							break;
//
//						case 13:
//							$(nGDD).find('li').css('display','none');
//					}     
//				}
//				$(document).keydown(checkKey);	
//			}).blur( function() {
//				$(document).unbind('keydown');
//			});
//		});
	}; // END Custom Select

})(jQuery);