console.log('script cookies');

function deleteCookie(name) {
    document.cookie = name + '="";-1; path=/';
}

function setCookie(cname, cvalue, exdays) {
    console.log('script function');
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "civilité=" + document.getElementById('inputCivilité').value + ";" + expires + ";path=/";
    document.cookie = "nom=" + document.getElementById('inputNom').value + ";" + expires + ";path=/";
    document.cookie = "prenom=" + document.getElementById('inputPrenom').value + ";" + expires + ";path=/";
    document.cookie = "email=" + document.getElementById('inputEmail').value + ";" + expires + ";path=/";
    document.cookie = "age=" + document.getElementById('inputAge').value + ";" + expires + ";path=/";
}


function setCookie2(exdays) {
    console.log('script2 function');
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    for (i = 1; i != 5; i++) {
        deleteCookie("checkbox" + i);
        deleteCookie("checkbox" + i + i);
    }
    for (i = 1; i != 5; i++) {
        if (document.getElementById('check' + i).checked) {
            document.cookie = "checkbox" + i + "=" + document.getElementById('check' + i).value + ";" + expires + ";path=/";
        }
        if (document.getElementById('check' + i + i).checked) {
            document.cookie = "checkbox" + i + i + "=" + document.getElementById('check' + i + i).value + ";" + expires + ";path=/";
        }
    }
}


// Fonctionne bien
function setCookie3(exdays) {
    console.log('script3 function');
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "Page2Q1=" + document.getElementById('select1').value + ";" + expires + ";path=/";
    document.cookie = "Page2Q2=" + document.getElementById('select2').value + ";" + expires + ";path=/";
}

// Perfect
function setCookie4(exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "dateEnq=" + document.getElementById('datePage').value + ";" + expires + ";path=/";
    document.cookie = "noteEnq=" + document.getElementById('note').value + ";" + expires + ";path=/";
}


//
function setCookie5(exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "areatext=" + document.getElementById('areatext').value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function executeResult() {
    var cookies = document.cookie;
    var resultat = 0;
    var compteur = 0;
    cookies = cookies.split(";");

    for (let cook in cookies) {
        if (cookies[cook].includes("noteEnq") || cookies[cook].includes("Page2Q1") || cookies[cook].includes("Page2Q2") || cookies[cook].includes("checkbox")) {
            compteur = compteur + 1;
        }
    }

    if (compteur < 11) {
        alert("Vous n'avez pas bien rempli le questionnaire");
        return false;
    }

    resultat = resultat + parseInt(getCookie("noteEnq")) + parseInt(getCookie("Page2Q1")) + parseInt(getCookie("Page2Q2"));

    for (i = 1; i != 5; i++) {
        if (!isNaN(parseInt(getCookie("checkbox" + i)))) {
            resultat = resultat + parseInt(getCookie("checkbox" + i));
        }

        if (!isNaN(parseInt(getCookie("checkbox" + i + i)))) {
            resultat = resultat + parseInt(getCookie("checkbox" + i + i));
        }
    }

    var modal = document.getElementById("myModal");
    var contentModal = document.getElementById("contentModal");

    if (resultat === 18){
        contentModal.src = "../img/happy.png";
    } else if (resultat > 12){
        contentModal.src = "../img/semi_happy.png";
    } else if (resultat > 5){
        contentModal.src = "../img/stoic.png";
    } else {
        contentModal.src = "../img/nothappy.png";
    }
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
