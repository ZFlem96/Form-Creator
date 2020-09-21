// nameOrCityRegex : ^[A-Z{1}][a-z+]
// address regex : [0-9]{3}\s[NSEW]?\s?[A-Z][a-z]*.*
//  zip code regex: [0-9]{5}(-[0-9]{4})?
// state regex: ([A-Z]{2}|[A-Z]{1}[a-z])
// phone number regex: 1?(([(][0-9]{3}[)])|([0-9]{3}))\s?\-?[0-9]{3}\-?[0-9]{4}
// password: ([a-z]*|\W+|[A-Z]+|[0-9]+){8,}
// must be at least 8 characters and include one 
// capitalized letter, one digit, and one special character
//  !@#$%^&*()[]{};:'"<>,./?
var pattern;
var form = new FormData();
var mf = document.getElementById("myForm");
var form = new FormData(mf);
var first, last, adress, cty, ste, num, pw, pwv, zp;
var fnameCheck = false, lnameCheck = false, addressCheck = false, cityCheck = false, stateCheck = false, numberCheck = false, passwordCheck = false, pwVCheck = false, zpCheck = false; 

function validateFirstName(form){
    first = mf.elements[0].value;
    pattern = new RegExp('^[A-Z]{1}[a-z]+');
    if(pattern.test(first)){
        fnameCheck = true;
    }   
    else{
        fnameCheck = false;
        alert("Invalid first name.");
    }
}
function validateLastName(form){
    last = mf.elements[1].value;
    pattern = new RegExp('^[A-Z]{1}[a-z]+');
    if(pattern.test(last)){
        lnameCheck = true;
    }   
    else{
        lnameCheck = false;
        alert("Invalid last name.");
    }
}

function validateAddress(form){
    adress = mf.elements[2].value;
    pattern = new RegExp('[^!@#$%^&*(){};:<> ?].*');
    if(pattern.test(adress)){
        addressCheck = true;
    }   
    else{
        alert("Invalid address.");
        addressCheck = false;
    }
}

function validateCity(form){
    cty = mf.elements[3].value;
    pattern = new RegExp('([A-Z]{1}[a-z]+|[A-Z]+).*');
    if(pattern.test(cty)){
        cityCheck = true;
    }   
    else{
        alert("Invalid city.");
        cityCheck = false;
    }
}

function validateState(form){
    // mf.elements[4].value = FormData(String(mf.elements[4].value).toUpperCase);
    // form.;
    // mf.get
    ste =  mf.elements[4].value;
    pattern = new RegExp('[A-Z]{2}|[A-Z]{1}[a-z]{1}|[a-z]{2}');
    if(pattern.test(ste)){
        // var str = String(ste);
        // ste.value = str.toUpperCase();
        stateCheck = true;
        // ste = 
    }   
    else{
        alert("Invalid state.");
        stateCheck = false;
    }
}
function validateZipCode(form){
    zp = mf.elements[5].value;
    pattern = new RegExp('[0-9]{5}(-[0-9]{4})?');
    if(pattern.test(zp)){
        zpCheck = true;
    }   
    else{
        zpCheck = false;
        alert("Invalid zip code.");
    }
}
function validateNumber(form){
    num = mf.elements[6].value;
    pattern = new RegExp('1?(([(][0-9]{3}[)])|([0-9]{3}))\s?\-?[0-9]{3}\-?[0-9]{4}');
    if(pattern.test(num)){
        numberCheck = true;
    }   
    else{
        alert("Invalid phone number.");
        numberCheck = false;
    }
}

function validatePassword(form){
    pw = mf.elements[7].value;
    pattern = new RegExp('([a-z]*|\W+|[A-Z]+|[0-9]+){8,}');
    if(pattern.test(pw)){
        pwv = mf.elements[8].value;  
              if(pw===pwv){
        passwordCheck = true;
        pwVCheck = true;
    }   
    else{
        pwVCheck = false;
        passwordCheck = false;
        alert("Password doesen't match.");
    }
    }   
    else{
        alert("Invalid password.");
        passwordCheck = false;
        pwVCheck = false;
    }
}

function sendData(form){
        validateFirstName(form);
        validateLastName(form);
        validateAddress(form);
        validateCity(form);
        validateState(form);
        validateZipCode(form);
        validateNumber(form);
        validatePassword(form);
        if(fnameCheck && lnameCheck && addressCheck && cityCheck && stateCheck && numberCheck && passwordCheck && pwVCheck && zpCheck){
            alert("Valid Submission");
            var formData = first;
            document.getElementById("response1").innerHTML = formData;
            formData = last;
            document.getElementById("response2").innerHTML = formData;
            formData = adress;
            document.getElementById("response3").innerHTML = formData;
            formData = cty;
            document.getElementById("response4").innerHTML = formData;
            var str = String(ste);
            str = str.toUpperCase();
            mf.elements[4].value = str;
            formData = mf.elements[4].value;
            document.getElementById("response5").innerHTML = formData;
            formData = zp;
            document.getElementById("response6").innerHTML = formData;
            formData = num;
            document.getElementById("response7").innerHTML = formData;
            formData = pw;
            document.getElementById("response8").innerHTML = formData;
            document.getElementById("response9").innerHTML = formData;
        }
    }