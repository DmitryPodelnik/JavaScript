const cPossibleUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cPossibleLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const cPossibleNumbers = '0123456789';
$(document).ready(function() {
    $('#generateButt').click(function() {
        let possibleSimbol = String();
        if ($('#digits').is(':checked')){
            possibleSimbol += cPossibleNumbers;
        }
        if($('#upperCaseLetter').is(':checked')){
            possibleSimbol += cPossibleUpperCase;
        }
        if($('#lowerCaseLetter').is(':checked')){
            possibleSimbol += cPossibleLowerCase;
        }
       let lengthStr = parseInt($('#lengthStr').val()); 
       let strNew = new String();
        for(let letterId = 0; letterId < lengthStr; letterId++){
           strNew += possibleSimbol[Math.floor(Math.random() * possibleSimbol.length)]
        }
        $('#resultField').val(strNew);
    });
});