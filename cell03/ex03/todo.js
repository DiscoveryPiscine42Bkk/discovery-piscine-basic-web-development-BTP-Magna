// Declare function to be use cookie across session
function newToDo() {
	// Prompt user for to do text
	let inputValue;
	// check if null reprompt
	do {
		inputValue = prompt("What do you want to do?");
		if (inputValue == "") {
			alert("Please input something");
		} else if (inputValue == null) {
			return;
		}
	} while (inputValue == "");

	// Create new li element and store it in li var
	let li = document.createElement("li");
	// Create text node with inputValue content
	let textNode = document.createTextNode(inputValue);
	// Add text input value into li element
	li.appendChild(textNode);
	// alert(li.textContent); // check input

	// add event listner removeToDo(this) 
	li.addEventListener("click", function () {
		removeToDo(this); // this refer to it own element
	});

	// Get element of where we want to put new li
	let ul = document.getElementById("list_table");
	// insert before ul first child element 
	ul.insertBefore(li, ul.firstChild);

	// Save to do list to the cookie
	saveToDo();
}


function insertToDo(value) {
	// Create new li element and store it in li var
	let li = document.createElement("li");
	// Create text node with inputValue content
	let textNode = document.createTextNode(value);
	// Add text input value into li element
	li.appendChild(textNode);

	// add event listner removeToDo(this) 
	li.addEventListener("click", function () {
		removeToDo(this); // this refer to it own element
	});
	// Get element of where we want to put new li
	let ul = document.getElementById("list_table");
	// insert before ul first child element 
	ul.insertBefore(li, ul.firstChild);
}


function removeToDo(el) {
	let confirmation = confirm("Do you want to delete this to do?");
	// alert(confirmation); confirm return true or false
	if (confirmation) {
		let to_do_element = el;
		to_do_element.remove();
		saveToDo();
	}
}


// Save current to do list to cookie and call this when ever it change
function saveToDo() {
	const list = document.getElementById("list_table");
	// Get all li element in the list table as an array
	const items = Array.from(list.children);
	// Get create new array with map and extract all text content and put it in new array
	const itemsText = items.map(li => li.textContent); // apply input condition to each li element return it text content
	// convert the new li text content into JSON string to save to cookie
	const jsonString = JSON.stringify(itemsText);
	// Save the Json to cookie
	setCookie('toDoList', jsonString, 365); // 365 day expiration
}

// Set cookie helper function from w3s
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
	// Encoding URI Compent convert any special character that might interferce with cookie format
	// like ; = & so this way it save properly
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}



function loadTodo() {
	// Get back the save text value array
	const jsonString = getCookie('toDoList');
	// Parse back json string to normal string array
	const items = JSON.parse(jsonString);
	// Reverse the array because the insertToDo populate empty ul
	// By appending on top so reverse the array now will just work
	items.reverse();
	// Populate back in the li
	for (i in items) {
		insertToDo(items[i]);
	}	
}


// Load and get the cookie string array
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let carray = decodedCookie.split(';');
	// loop through each cookie to see if it exist
	for(let i = 0; i <carray.length; i++) {
	  let c = carray[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		// 
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}