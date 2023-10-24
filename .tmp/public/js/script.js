
function submitForm() {
    var nameoutput= document.getElementById("name");
    var lastoutput= document.getElementById("lastname");
    var ageoutput= document.getElementById("context");
    var petro= document.getElementById("nameoutput");
    var dojchin= document.getElementById("lastnameoutput");
    var tochak =document.getElementById("contextoutput");
    
    petro.innerText = nameoutput.value;
    dojchin.innerText = lastoutput.value;
    tochak.innerText = ageoutput.value;
    
return false;
}