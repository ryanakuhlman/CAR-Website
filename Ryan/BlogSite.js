var quote = document.querySelectorAll(".quote");
var addComment = document.querySelectorAll(".addComment");
var addBlog = document.querySelectorAll(".addCard");
var showYourComment = document.getElementsByClassName("containerTab");
var post = document.getElementById("post");
var cancel = document.getElementById("cancel");

for(var i = 0; i < quote.length; i++) {
	quote[i].addEventListener("click", function(event) {
		alert("Hello World");
	});
}

for(var i = 0; i < addBlog.length; i++) {
	addBlog[i].addEventListener("click", function(event) {
		modal();
	});
}

for(var i = 0; i < addComment.length; i++) {
	addComment[i].addEventListener("click", function(event) {
		tab();
	});
}


function tab() {
	for(var i = 0; i < showYourComment.length; i++) {
		showYourComment[i].style.display = "block";
	}
	document.getElementsByClassName("containerTab").style.display = "none";
}

function postComment() {
	var x = document.getElementById("textArea").value;
	var y = document.getElementsByClassName("containerTab");
	document.getElementById("showText").innerHTML = x;
	document.getElementById("textArea").value = "";
}

function cancelComment() {
	document.getElementById("textArea").value = "";
}

function modal(){
        alert("hello from a function");
}


