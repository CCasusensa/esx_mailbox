$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type == "enableui") {
			if (event.data.enable == true) {
				$("#Web_1920___1").css("display", "block");
				$('#Titel_Header').text(event.data.mailtitel);
				$('#Titel_Header_A0_Text_2').text(event.data.mailtext);
				$('#Titel_Footer').text('[Autore: ' + event.data.mailautor + ']');
			} else {
				$("#Web_1920___1").css("display", "none");
			}
        }
    });
	
	$("#Icon_ionic_ios_close_circle").click(function(){
		$.post('http://esx_mailbox/quit', JSON.stringify({}));
	});
});