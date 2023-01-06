function signup() {
    event.preventDefault();
    var username = document.getElementById("NAME").value;
    var email = document.getElementById("EMAIL").value;
    var PASS = document.getElementById("PASSWORD").value;
    // var confirm = document.getElementById("CONFIRM");
    var user= {
        username : username ,
        email : email;
        PASS : PASS;
    };      
    var json= JSON.stringify(user);
    localStorage.setItem(key: username, value: json);
    alert("DANG KY CAI DIT ME M");
}