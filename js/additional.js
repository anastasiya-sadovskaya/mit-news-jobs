 

$(document).ready(function(){	

	

			function defaultForm(){
				fields = $('input:text');
				fields.removeClass('errorValidation');
				fields.removeClass('validField');
				tooltips = 	$('.tooltip');	
				tooltips.removeClass('tooltip-grey');
				tooltips.removeClass('tooltip-red');
				$('.a').show();
				$('#send-error').hide();
			};
			
			

			$('#link-button-order, #link-button-order-calc').click(function(){
				defaultForm();
				$('#form-order').fadeIn(300);
				$('#box-shadow').fadeIn(300);
				$('#close').fadeIn(300);
				$('input[name="name"]').focus();
				return false;
			});

			// $('#link-button-order-calc').click(function(){
			// 	defaultForm();
			// 	$('#form-order').fadeIn(300);
			// 	$('#box-shadow').fadeIn(300);
			// 	$('#close').fadeIn(300);
			// 	$('input[name="name"]').focus();
			// 	return false;
			// });
			
			$('#link-order').click(function(){	
				defaultForm();
				$('#form-order').fadeIn(300);
				$('#box-shadow').fadeIn(300);
				$('#close').fadeIn(300);
				$('input[name="name"]').focus();
				return false;
			});
			
			$('#box-shadow').click(function(){	
				$('#form-order').fadeOut(300);
				$('#box-shadow').fadeOut(300);
				$('#close').fadeOut(300);
				$("#send-message").trigger('reset');
				
				//$('#success-send').fadeOut(300);
				//$('#success-close').fadeOut(300);
								
			});
			
			$('#close').click(function(){	
				$('#form-order').fadeOut(300);
				$('#box-shadow').fadeOut(300);
				$('#close').fadeOut(300);
				$("#send-message").trigger('reset');	
				
				
				return false;
			});
			
			//$( ".click_accordion" ).click(function() {
				//$(this).next().toggle( "500", function() {
					// Animation complete.
				//});
				//return false;
			//});
			
			$('#link-button-catalog').click(function(){	
				$('#catalog-list').fadeIn(300);
				$('#box-shadow').fadeIn(300);
				$('#close-catalog').fadeIn(300);
				$('#А').fadeIn(300);
				
				
				/*if($('#a').click()){
					document.getElementById('А').style.display='block';
				}
				else{
					document.getElementById('А').style.display='none';
				}*/
				return false;
			});
			
			$('#box-shadow').click(function(){	
				$('#catalog-list').fadeOut(300);
				$('#box-shadow').fadeOut(300);
				$('#close-catalog').fadeOut(300);
				//$('#success-send').fadeOut(300);
				//$('#success-close').fadeOut(300);
			});
			
			$('#close-catalog').click(function(){	
				$('#catalog-list').fadeOut(300);
				$('#box-shadow').fadeOut(300);
				$('#close-catalog').fadeOut(300);	
				return false;
			});

			/*$('#konfig-btn').click(function(){
				openEngine(args);
				return false;
			});*/
			
	});

var accord = document.getElementsByClassName("click_accordion");
var i;

for (i = 0; i < accord.length; i++) {
	accord[i].onclick = function(){
		this.classList.toggle("activ");
		this.nextElementSibling.classList.toggle("show");
	};
};
			
			
function openList(evt, letter) {
	var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
	};
	
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activ", "");
		
    };
   document.getElementById(letter).style.display = "block";
   
   
   
	return false;
};

function closeList(){
	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
	tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activ", "");
    };
  /*document.getElementById(letter).style.backgroundColor = "#A1150D";*/

};

function openEngine(args) {
	var url = "http://deutz.ru/live_deutz_products/html/display:init?" + args;
	var width = 1000;
	var height = 620;
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;

	var popUp = window.open(url, 'DEUTZ', 'width=' + width + ', height=' + height + ', left=' + left + ',top=' + top + ', '
																						+ 'resizable=no, scrollbars=no, toolbar=no, status=no, menubar=no, location=no');

	popUp.focus();
};

function openEngineWindow(lang) {
	var url = "http://deutz.com/live_deutz_products/html/display:init?intro=1&all=1&dep=com&lang=" + lang;
	var width = 1000;
	var height = 620;
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;

    var popUp = window.open(url, 'DEUTZ', 'width=' + width + ', height=' + height + ', left=' + left + ',top=' + top + ', '
																			+ 'resizable=no, scrollbars=no, toolbar=no, status=no, menubar=no, location=no');

    popUp.focus();
};	

			
			//$('#send').click(function(){	
				//$('#form-order').fadeOut(300);
				//$('#box-shadow').fadeOut(300);
				//$('#close').fadeOut(300);				
				//$('#success-send').fadeIn(300);
				//$('#success-close').fadeIn(300);
				//setTimeout(function(){$('#success-send').fadeOut('300')},2500); 
				//setTimeout(function(){$('#box-shadow').fadeOut('300')},2500); 				
			//});
			
			//$('#success-close').click(function(){
				//$('#box-shadow').fadeOut(300);
				//$('#success-send').fadeOut(300);
				//$('#success-close').fadeOut(300);
			//});


