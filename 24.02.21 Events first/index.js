"use strict"

function hideShowList(event) {
    if (event.target.tagName != "SPAN") {
        return;
    }

    let childrenElement = event.target.parentNode.querySelector("ul");
    if (!childrenElement) {
        return;
    }

    childrenElement.hidden = !childrenElement.hidden;
}

for (let li of mainList.querySelectorAll("li")) {
    let span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
}

mainList.addEventListener("click", hideShowList);