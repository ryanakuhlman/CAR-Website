$("#post").click(function() {
	$(".containerTab").toggle();
});

$("#cancel").click(function() {
	$(".containerTab").hide();
	$("#textArea").value = "";
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

