// modal.js

// wrap function in jQuery document.ready so 
// JavaScript loads after page is finished loading

$(document).ready(function() {

// define a variable for each button

var showModalButton = document.getElementById("showModalButton");
var hideModalButton = document.getElementById("hideModalButton");

// define a variable for the modal element

var modalElement = document.getElementById("modalContainer");


// define function to show the modal

function showModal() {
	modalElement.style.display = 'block';
	showModalButton.style.display = 'none';
}

// define function to hide the modal

function hideModal() {
	modalElement.style.display = 'none';
	showModalButton.style.display = 'block';
}

// call functions to show or hide the modal when clicked

showModalButton.onclick = showModal;
hideModalButton.onclick = hideModal;
});