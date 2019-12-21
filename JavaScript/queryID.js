function checkStatus() {
    alert("Entered");
    var urL = "http://hapi.fhir.org/baseR4/";

    var option = document.getElementById("role").value;
    var given = document.getElementById("given").value;
    var id = document.getElementById("pwd").value;
    //var family = document.getElementById("family").value;
    if (option == "Patient") {
        urL = urL + option + "?organization=jonah&&given:exact=";
        setCookie("patientGiven", given, 1);
        //setCookie("patientFamily", family, 1);
    } else {
        urL = urL + option + "?given:exact=";
        setCookie("practitionerGiven", given, 1);
        //setCookie("practitionerFamily", family, 1);
    }
    urL = urL + given; // + "&&family=" + family;
    getData(urL, option, id);
}