let ol = document.querySelector("ol");
let todoInput = document.getElementById("todoInput");
let todoButton = document.getElementById("todoButton");
let weak = document.getElementById("weak");
const notTodo = [
	"sleep",
	"go to sleep",
	"Sleep",
	"Go to sleep",
	"nap",
	"take a nap",
	"Nap",
	"Take a nap",
];

function clearInput() {
	todoInput.value = "";
}

function restIsForWeak() {
	weak.innerText = "Rest is for the weak!";
	setTimeout(() => {
		weak.innerText = "";
	}, 3000);
}

function appendListItem() {
	let li = document.createElement("li");
	if (!notTodo.includes(todoInput.value)) {
		li.appendChild(document.createTextNode(todoInput.value));
		ol.appendChild(li);
		clearInput();
	} else {
		restIsForWeak();
		clearInput();
	};
};

function todoVerification(e) {
	if (e.which === 13 && todoInput.value.length > 0) {
		appendListItem();
	};
};

todoButton.addEventListener("click", appendListItem);

todoInput.addEventListener("keypress", todoVerification);