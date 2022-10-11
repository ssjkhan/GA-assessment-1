var counter_HTML, input_HTML, addBtn_HTML, subBtn_HTML;

Initialize();

function Initialize() {
	getDocHandles();
	addListeners();
	setInitValues();
}

function getDocHandles() {
	counter_HTML = document.getElementById("counter");
	input_HTML = document.querySelector("input");
	addBtn_HTML = document.getElementById("add");
	subBtn_HTML = document.getElementById("sub");
}

function addListeners() {
	addBtn_HTML.addEventListener("click", addFunc);
	subBtn_HTML.addEventListener("click", subFunc);
}

function addFunc() {
	let val = readCounter() + readInput();
	negativeFormatting(val);
	counter_HTML.textContent = val;
}

function subFunc() {
	let val = readCounter() - readInput();
	negativeFormatting(val);
	counter_HTML.textContent = val;
}

function readInput() {
	return parseInt(input_HTML.value);
}

function readCounter() {
	return parseInt(counter_HTML.textContent);
}

function negativeFormatting(x) {
	if (x < 0) {
		counter_HTML.classList.add("negative");
	} else {
		counter_HTML.classList.remove("negative");
	}
}

function setInitValues() {
	input_HTML.value = 1;
	counter_HTML.textContent = 0;
}
