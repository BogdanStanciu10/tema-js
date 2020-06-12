const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
var descriptionInputValue = document.querySelector('.input-description');
var dateInputValue = document.querySelector('.input-date');
var hrsInputValue = document.querySelector('.input-hrs');
var mnsInputValue = document.querySelector('.input-mns');
const add = document.querySelector('.add');

if(window.localStorage.getItem("tasks") == undefined){
     var tasks = [];
     window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

var tasksEX = window.localStorage.getItem("tasks");
var tasks = JSON.parse(tasksEX);
//alert(tasks);



class item{
	constructor(name, description, datei, hours, minutes){
		this.createItem(name, description, datei, hours, minutes);
	}
    createItem(name, description, datei, hours, minutes){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
        input.value = name;
        input.classList.add('item_input');
        
        var inputDescription = document.createElement('input');
    	inputDescription.type = "text";
    	inputDescription.disabled = true;
        inputDescription.value = description;
        inputDescription.classList.add('item_input');
        
        var inputDate = document.createElement('input');
    	inputDate.type = "date";
    	inputDate.disabled = true;
        inputDate.value = datei;
        inputDate.classList.add('item_input');
        
        var inputHours = document.createElement('input');
    	inputHours.type = "number";
    	inputHours.disabled = true;
        inputHours.value = hours;
        inputHours.classList.add('item_input');
        
        
        var inputMinutes = document.createElement('input');
    	inputMinutes.type = "number";
    	inputMinutes.disabled = true;
        inputMinutes.value = minutes;
    	inputMinutes.classList.add('item_input');



    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, inputDescription, inputDate, inputHours, inputMinutes, name, description, datei, hours, minutes));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));
    	

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(inputDescription);
        itemBox.appendChild(inputDate);
        itemBox.appendChild(inputHours);
        itemBox.appendChild(inputMinutes);
        
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, inputDescription, inputDate, inputHours, inputMinutes, name, description, datei, hours, minutes){
        if(input.disabled == true && inputDescription.disabled == true && inputDate.disabled == true && inputHours.disabled == true && inputMinutes.disabled == true){
           input.disabled = !input.disabled;
           inputDescription.disabled = !inputDescription.disabled;
           inputDate.disabled = !inputDate.disabled;
           inputHours.disabled = !inputHours.disabled;
           inputMinutes.disabled = !inputMinutes.disabled
        }
    	else{
            input.disabled = !input.disabled;
            inputDescription.disabled = !inputDescription.disabled;
            inputDate.disabled = !inputDate.disabled;
            inputHours.disabled = !inputHours.disabled;
            inputMinutes.disabled = !inputMinutes.disabled;
            let indexof = tasks.indexOf(name, description, datei, hours, minutes);
            tasks[indexof] = input.value;
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = tasks.indexOf(name);
        tasks.splice(index, 1);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != "" || descriptionInputValue.value != "" || dateInputValue != "" || hrsInputValue != "" || mnsInputValue != ""){
		new item(inputValue.value, descriptionInputValue.value, dateInputValue.value, hrsInputValue.value, mnsInputValue.value);
        tasks.push(inputValue.value, descriptionInputValue.value, dateInputValue.value, hrsInputValue.value, mnsInputValue.value);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        inputValue.value = "";
        descriptionInputValue.value = "";
        dateInputValue.value = "";
        hrsInputValue.value = "";
        mnsInputValue.value = "";       
	}
}


for (var v = 0 ; v < tasks.length ; v++){
    new item(tasks[v]);
}


new item("test title", "test description", "2020-06-11", "2", "15");