"use strict"

let checkRadio;

function addList() {
    let ul = document.createElement("ul");
    ul.class = "list";
    ul.innerHTML = "First List";

    document.body.append(ul);

    let li = document.createElement("li");
    li.innerHTML = "Test";
    li.addEventListener("click", action);
    ul.append(li);

}

function setRadioChecked(node) {
    checkRadio = node.value;
}


function action() {
    if (checkRadio == "addElToEnd") {
        addElemToEndOfList(this);
    }
    else if (checkRadio == "insert") {
        addElementByPosition(this);
    }
    else if (checkRadio =="edit") {
        editListText(this);
    }
    else if (checkRadio == "addInnerList") {
        addInnerList(this);
    }
    else if (checkRadio == "deleteEl") {
        deleteElement(this);
    }
    
}

function editListText(node) {
    let text = document.getElementById("textEdit");
    node.innerHTML = text.value;
}

function addElemToEndOfList(node) {
    let li = document.createElement("li");

    li.innerHTML = "New Node";
    li.addEventListener("click", action);

    let text = document.getElementById("textAddElToEnd");

    li.innerHTML = text.value;
    node.parentNode.append(li);
}

function addInnerList(node) {
    let countUlElements = 0;

    for (let j = 0; j < node.parentNode.children.length; j++) {
        if (node.parentNode.children[j].nodeName == "UL") {
            countUlElements++;
        }
    }

    if (countUlElements < 1) {
        let ul = document.createElement("ul");

        ul.class = "list";

        let text = document.getElementById("textAddInnerList");

        ul.innerHTML = text.value;
        node.after(ul);

        let li = document.createElement("li");
        li.innerHTML = "New Node";
        li.addEventListener("click", action);
        ul.append(li);
    }
}

function addElementByPosition(node) {
    let li = document.createElement("li");

    li.innerHTML = "New Node Inserted";
    li.addEventListener("click", action);

    let text = document.getElementById("textInsert");

    li.innerHTML = text.value;
    node.before(li);
}

function deleteElement(node) {
    if (node.parentNode.children.length == 1) {
        node.parentNode.remove();
    }
    if (node.children.length != 0) {
        for (let item of node.children) {
            item.remove();
        }
    }
    node.remove();
}


