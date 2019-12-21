function loginVerification(ret, option, input_id) {
    var text = JSON.parse(ret);
    if (text.total == 0) {
        alert("Sorry, we will redirect you to the registration page to help you setup an account");
        if (option == "Patient")
            window.open("patient_FHIR.HTML", "test", "width=1366, height=768, toolbar=yes, location=no", "_blank");
        else {
            window.open("practitioner_FHIR.HTML", "test", "width=1366, height=768, toolbar=yes, location=no", "_blank");
            setCookie("practitionerId", "guest", 1);
        }
    } else {
        alert("Welcome");
        id = text.entry[0].resource.id;
        if (id == input_id) {
            if (option == "Patient") {
                setCookie("patientId", id, 1);
                alert("I have nothing to share for the time being");
            } else {
                setCookie("practitionerId", id, 1);
                window.open("encounter_FHIR.HTML", "test", "width=1366, height=768, toolbar=yes, location=no", "_blank");
            }
        } else
            alert("You might have entered incorrect name or id");

    }
    console.table(ret);
}