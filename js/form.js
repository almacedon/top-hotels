var input1 = document.querySelector('input[name="days"]');
var calendar = document.querySelector('.dates-calendar');
var button1 = document.querySelector('.dates-calendar button');

var input2 = document.querySelector('input[name="persons"]');
var block = document.querySelector('.persons-quantity');
var button2 = document.querySelector('.persons-quantity button');

input1.addEventListener("click", function (evt) {
	evt.preventDefault();
	calendar.classList.add("visible");
});

button1.addEventListener("click", function (evt) {
	evt.preventDefault();
	calendar.classList.remove("visible");
});

input2.addEventListener("click", function (evt) {
	evt.preventDefault();
	block.classList.add("visible");
});

button2.addEventListener("click", function (evt) {
	evt.preventDefault();
	block.classList.remove("visible");
});