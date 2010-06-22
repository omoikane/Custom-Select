Custom Select jQuery Plugin
===========================

Create a good design for the modules of a site is always a difficult enough.
Especially for select, because each browser displays them differently.
This plugin for the jQuery javascript library used to solve the problem!


Installation
------------

- Put the lib folder in your root site.
- Install the [jQuery] [1] javascript library.
- Add this code, __AFTER__ jQuery declaration:
		<script type="text/javascript" src="/lib/jquery.customselect.min.js"></script>
		<script type="text/javascript">
			$(function(){
				$("select").customselect();
			});
		</script>
- Add CSS file inside the head tag:
		<link href="lib/jquery.customselect.css" rel="stylesheet" type="text/css" />


Options
-------

It’s available a callback function:
		$("select").customselect(function(v, l){
			alert("Selected " + l + ' (' + v + ')');
		});
Where "v" is the value of option selected and "l" is the label.


Example
-------

View example of [Custom Select jQuery Plugin] [demo]


Requirements
------------

This plugin requires [jQuery] [1] javascript library.


License
-------

This plugin is licensed under the [MIT License] [2]  and so you are 
completely free to do whatever you want with it


  [1]: http://jquery.com/ "jQuery"
  [2]: http://www.opensource.org/licenses/mit-license.php "MIT License"
  [demo]: http://www.omilandia.com/demo/jquery/customselect/ "Example of Custom Select jQuery Plugin"
