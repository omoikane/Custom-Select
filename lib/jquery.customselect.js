/**
 * Custom Select jQuery Plugin
 *
 * <description>
 *
 * @copyright Copyright 2010, Daniele De Nobili - www.metaline.it
 * @version 1.0
 */
(function($){

	$.fn.customselect = function(callback) {
		return this.each(function(){
			var that = $(this),
				enhanced, box, ul,
				options = '';

			// Nascondo la select
			that.hide()

			// E la avvolgo con un <div class="enhanced">
			.wrap('<div class="enhanced" />');

			// Seleziono la div.enhanced
			enhanced = that.parent();

			// Creo il codice HTML che mi genererà la nuova select
			enhanced.append('<div class="selectBox"><div class="selectContent"><div class="selectList"><span>' + $("option:selected", that).text() + '</span></div><span class="selectArrow"></span></div><ul></ul></div>');
			box = $(".selectBox", enhanced);

			// Genero la lista delle opzioni
			$("option", that).each(function(){
				var t = $(this);
				options += '<li><a href="#"><span class="label">' + t.text() + '</span><span class="value" style="display: none;">' + t.attr("value") + '</span></a></li>'
			});

			// Inserisco la lista delle opzioni nel codice
			ul = $("ul", enhanced);
			ul.append(options).data("closed", true);

			// Imposto le larghezze per adattarmi al CSS della select originale
			var w = that.outerWidth(), wa = $(".selectArrow", box).outerWidth();
			$("div.selectBox", box).css("width", w);
			$("div.selectList", box).css("width", w - wa);
			$("li", box).css("width", w - wa - 1);

			// Classi .first e .last per aiutare il CSS
			$('li:first', box).addClass("first");
			$('li:last', box).addClass("last");

			// Click sul box
			$("div.selectList", box).click(function(){
				// Se la lista è chiusa la apro
				if ( ul.data("closed") ){
					ul.show();
					ul.data("closed", false);
				}

				// Il secondo click può avvenire fuori o dentro la lista
				$(document).click(function(e){
					// Se la lista è chiusa esco
					if ( ul.data("closed") ){
						return;
					}

					// Seleziono il target del click
					var $target = $(e.target);

					// Se il click è sulla lista delle opzioni
					if ( $target.parents("div.selectBox").length ){
						var v = $("span.value", $target).text(); // Value
						var l = $("span.label", $target).text(); // Label

						// Cambio il valore della select
						that.val(v);

						// Cambio il valore visualizzato
						$("div.selectList span", box).text(l);

						// Eseguo la callback
						if ( typeof callback === 'function' ){
							callback(v, l);
						}
					}

					// In ogni caso nascondo la lista
					ul.hide();
					ul.data("closed", true);
				});

				return false;
			});
		});
	}; // END Custom Select

})(jQuery);