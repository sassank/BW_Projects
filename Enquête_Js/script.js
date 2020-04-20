function nomToCap() {
    var inputNom = document.getElementById("inputNom");
    if (inputNom.value != "") {
        var string = inputNom.value;
        inputNom.value = string.toUpperCase()
    }

    var regex = /[\d ;/.!%*^$£"_,+)(=&)@\<>|§ ]{1,}$/;
    if(regex.test(inputNom.value))
    {
        inputNom.style.backgroundColor = "#fba";
    } else {
        inputNom.style.backgroundColor = "";
    }
}

function prenomToCap() {
    var inputPrenom = document.getElementById("inputPrenom");
    if (inputPrenom.value != "") {
        var string = inputPrenom.value;
        inputPrenom.value = string[0].toUpperCase() +
            string.slice(1);
    }
    var regex = /[\d ;/.!%*^$£"_+,)(=&)@\<>|§ ]{1,}$/;
    if(regex.test(inputPrenom.value))
    {
        inputPrenom.style.backgroundColor = "#fba";
    } else {
        inputPrenom.style.backgroundColor = "";
    }
}

function checkAge() {

    var inputAge = document.getElementById('inputAge');
    var inputAgeWarn = document.getElementById('inputAgeWarn');
    document.getElementById('inputAge').value = document.getElementById('inputAge').value.replace(/^(?:[^1-9]\d?|100)$/, '');

    // Verification de l'age
    if (inputAge.value != "") {
        if (inputAge.value > 120) {
            inputAge.style.backgroundColor = "#fba";
            return false;
        } else {
            inputAge.style.backgroundColor = "";
        }

        if (isNaN(inputAge.value)) {
            inputAge.style.backgroundColor = "#fba";
            return false;
        } else {
            inputAge.style.backgroundColor = "";
        }
    }
}

function checkMail(){
    var inputMail = document.getElementById('inputEmail');
    if (inputMail.value == ""){
        inputMail.style.backgroundColor = "";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputMail.value)) {
        inputMail.style.backgroundColor = "#fba";
    } else {
        inputMail.style.backgroundColor = "";
    }
}

function checkPage1(){
    var inputPrenom = document.getElementById("inputPrenom");
    var inputNom = document.getElementById("inputNom");
    var inputMail = document.getElementById('inputEmail');
    var inputAge = document.getElementById('inputAge');

    // Verification de la totalité des champs
    if (inputPrenom.value == "" || inputNom.value == "" || inputMail.value == "" || inputAge.value == "" ){
        alert("Vous devez remplir tout les champs!");
        return false;
    }

    // Verification du prenom et du nom
    var regex = /[\d ;/.!%*^$£"_+,)(=&)@\<>|§ ]{1,}$/;
    if(regex.test(inputPrenom.value) || regex.test(inputNom.value))
    {
        alert("Vous avez entré des caractères interdits");
        return false;
    }

    // Verification de l'age
    if (inputAge.value > 120) {
        alert('Votre âge doit être entre 1 et 120 !');
        return false;
    }

    if (isNaN(parseInt(inputAge.value))) {
        alert('Votre age doit être un nombre !');
        return false;
    }

    var regexMail = /[\d ;/.!%*^$£)(=&)\<>|§ ]{1,}$/;

    if(regexMail.test(inputMail.value))
    {
        alert("Vous avez entré des caractères interdits");
        return false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputMail.value))
    {
        alert("Vous devez entrer un email valide");
        return false;
    }
    setCookie()
}

function checkBox() {
    var checkBox;
    var checkName;
    var checkTrue1 = [];
    var checkTrue2 = [];
    for (i = 1; i != 5; i++) {
        checkName = "check" + i;
        checkBox = document.getElementById(checkName);
        if (checkBox.checked == true) {
            checkTrue1.push(1);
        }
        checkName = "check" + i + i;
        checkBox = document.getElementById(checkName);
        if (checkBox.checked == true) {
            checkTrue2.push(1);
        }
    }
    if (checkTrue1.length > 1 || checkTrue2.length > 1) {
        alert('Vous avez mis plusieurs réponses, il faut en mettre une seule !');
        return false;
    } else if (checkTrue1.length < 1) {
        alert('Vous devez cocher une case sur la première réponse !');
        return false;
    } else if (checkTrue2.length < 1) {
        alert('Vous devez cocher une case sur la seconde réponse !');
        return false;
    }
    setCookie2();
    return true;
}

function checkColumn() {
    var columnFirst = document.getElementById('select1');
    var columnSecond = document.getElementById('select2');

    if (columnFirst.value == "" || columnSecond.value == "") {
        alert('Vous devez séléctionner deux réponses !');
        return false;
    }
    setCookie3();
    return true;
}

function checkDate() {
    var date = document.getElementById('datePage');
    // Verification de la date
    if (!/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(date.value)) {
        date.style.backgroundColor = "#fba";
        return;
    }

    var parts = date.value.split("/");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        date.style.backgroundColor = "#fba";
        return;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    if (!day > 0 && day <= monthLength[month - 1]) {
        date.style.backgroundColor = "#fba";
        return;
    }

    var newDate = new Date(date.value);
    var curDate = new Date();

    if (newDate > curDate){
        date.style.backgroundColor = "#fba";
    } else {
        date.style.backgroundColor = "";
    }
}

function checkHttp() {
    var http = document.getElementById('httpLien');
    try {
        new URL(http.value);
    } catch (_) {
        http.style.backgroundColor = "#fba";
        return false;
    }
    http.style.backgroundColor = "";
}

function checkNote() {
    document.getElementById('note').value = document.getElementById('note').value.replace(/[^0-9]/g, '');
}

function checkPage3() {
    var note = document.getElementById('note');
    var date = document.getElementById('datePage');
    var http = document.getElementById('httpLien');

    // Verification de tout les champs
    if (note.value == "" || date.value == "" || http.value == "") {
        alert('Les trois champs doivent être entrés');
        return false;
    }

    // Verification de la note
    if (note.value > 10) {
        alert('Votre note doit être entre 1 et 10 !');
        return false;
    }

    if (isNaN(parseInt(note.value))) {
        alert('Votre note doit être un nombre !');
        return false;
    }

    // Verification de la date
    if (!/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(date.value)) {
        alert("La date entrée n'a pas le bon format");
        return false;
    }

    var parts = date.value.split("/");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        alert("La date entrée n'est pas valide");
        return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    if (!day > 0 && day <= monthLength[month - 1]) {
        alert("La date entrée n'est pas valide");
        return false;
    }

    var newDate = new Date(date.value);
    var curDate = new Date();

    if (newDate > curDate){
        alert("Vous ne pouvez pas entrer un date dans le futur");
        return false;
    }
    // Verification du lien HTTP

    try {
        new URL(http.value);
    } catch (_) {
        alert("L'URL n'est pas valide !");
        return false;
    }
    setCookie4();
    return true;
}

function setDateVal(){
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var datePage = document.getElementById('datePage');

    datePage.value = utc;
}