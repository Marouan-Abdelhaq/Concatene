function concatenerTexte() {
    var texteA = document.getElementById("texteA").value;
    var texteB = document.getElementById("texteB").value;
    var texteC = texteA + texteB;
    document.getElementById("texteC").value = texteC;
}