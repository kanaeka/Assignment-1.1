function checkCreds()
{
    var firstInitial = document.getElementById("finitial").value;
    var lastInitial = document.getElementById("linitial").value;
    var zipCode = document.getElementById("zipcode").value;
    // fullInitials concatenated below.
    var fullInitials = firstInitial+ " " + lastInitial;
    // checks if total sum of initials equals anything other than 2, as well as if either initials equals anything other than 1 individually. 
    if (fullInitials.length !=2 && firstInitial.length !=1 && lastInitial.length !=1)
    {
        document.getElementById("loginStatus").innerHTML = "Initials Error:<br> Please insert one alphabetical character to continue.";
    }
    // checks if zipcode equals anything other than the UAT zipcode
    else if (zipCode !=85283)
    {
        document.getElementById("loginStatus").innerHTML = "Please insert a valid UAT zipcode."
    }

    // redirects to boards.html from week 1.
     else
     {
        alert("Accepted. Redirecting to Program Objectives page.");
        location.replace("boards.html");
     }
    


}