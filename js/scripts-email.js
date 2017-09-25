$(document).ready(function() {
	
	
    $("#send-message").submit(function(ev) {
        ev.preventDefault();
        validateForm();
    });
});

function validateForm() {
    var name = $('input[name = "name"]');

    if (name.hasClass('validField') == false) {
        name.addClass('errorValidation');
        name.next().addClass('tooltip-red');
    };

    var email = $('input[name = "emailAddress"]');
    if (email.hasClass('validField') == false) {
        email.addClass('errorValidation');
        email.next().addClass('tooltip-red');
    };
	
//function unvalidForm

    if (name.hasClass('validField') == true && email.hasClass('validField')== true) {

        $('#box-shadow-disabled').show();
        $('#load-img').show();
        $('#load-span').show();
        $('#form-order-dark').show();

        $.ajax({
            type: "POST",
            //url: "http://mitemail.westeurope.cloudapp.azure.com/mit/v1/email",
            url: "http://mitps.ru/mailer.php",
            data: getEmailData(),
            success: function(data) {
                var a = data;
                console.log(a);
                $('#box-shadow-disabled').hide();
                
                $('#form-order').hide();
                $('#load-img').hide();
                $('#load-span').hide();
                $('#form-order-dark').hide();
                $('#send-message').trigger('reset');
				$('#ready-message').fadeIn(300);
				setTimeout(function(){
					$('#ready-message').fadeOut(300);
					$('#box-shadow').hide();
				}, 3000);
               // alert('Done!!')
            },
            error: function(xhr, status, text) {
                var x = xhr;
                console.log(x);
                $('#box-shadow-disabled').hide();

                $('#load-img').hide();
                $('#load-span').hide();
                $('#form-order-dark').hide();
				$('.a').hide();
				$('#send-error').show();
                //alert('Error');

            }
        });
    } else {
        return false;
    };
};

function getEmailData() {
    return {
        "domainName":"mitps.ru",
        "name": $("#name").val(),
        "mobilePhone": $("#phoneNumber").val(),
        "emailAddress": $("#emailAddress").val(),
        "message": $("#message").val()
    };
};

function validateInput(element) {
    var name = element.getAttribute('name'),
        validate = false;
    switch (name) {
        case 'name':
            if (element.value.length > 1 && element.value.length < 60) {
                /*var namePattern=/^[a-zA-Zа-яА-Я0-9 ]+$/;
                if(namePattern.test(element.value)==true){*/
                validate = true;
                //}
            }
            break;
        case 'phoneNumber':
            //if(element.value.length == 13){
            //var phoneNumberPattern=/^[+][0-9]/;
            //if(phoneNumberPattern.test(element.value)==true){
            validate = true;
            //  }
            //}
            break;

        case 'emailAddress':
            if (element.value != '') {
                var emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
                if (emailPattern.test(element.value) == true) {
                    validate = true;
                }
            }
            break;
    }
    if (!validate) {
        element.className = 'errorValidation';
        element.nextSibling.className = 'tooltip tooltip-red';
        false
    } else {
        element.className = 'validField';
        element.nextSibling.className = 'tooltip tooltip-grey';
    };
};

