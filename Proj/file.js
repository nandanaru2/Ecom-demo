
    function validateForm() {
    var x = document.forms["myForm"]["exampleInputName1"].value;
    var q = document.forms["myForm"]["Product Name"].value;
    var y = document.forms["myForm"]["exampleInputphonenumber"].value;
    var z = document.forms["myForm"]["Quantity"].value;
    var a = document.forms["myForm"]["Aathar Number"].value;
    var b = document.forms["myForm"]["Address"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
if (q == "") {
    alert("PRoduct Name must be filled out");
    return false;
}
if (y == "") {
    alert("Enter the valid Phone Number");
    return false;
}
if (z>5 && z<25 ) {
    alert("Name must be filled out");
    return false;
}
if (a== "") {
    alert("Enter your aatha number");
    return false;
}
}
