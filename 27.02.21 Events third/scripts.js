"use strict"

        let nameBox = document.nameText.nickname;

        function checkSymbol(e) {
            let name = nameText.nickname.value;
            let val = String.fromCharCode(e.keyCode);

            if (!isNaN(val) && val != " ") {
                e.preventDefault();
            }
        }

        nameBox.addEventListener("keydown", checkSymbol);

