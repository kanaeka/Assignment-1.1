// Daniel Henry  Assignment 3.1
      function palinchecker() {
        var str1 = document.getElementById("firstStr").value;
//variable finds greatest integer of input length divided by 2.
        var len = Math.floor(str1.length / 2);
//checks if there's 1 or less characters.
        if (str1.length <=1)
            {
                document.getElementById("palin").innerHTML = "Palindrome: Please enter more than 2 characters.";
            }
//variable 1 begins at 0, keeps running as long as var i is less than length, increases upwards.            
        for (var i = 0; i < len; i++)

//if user input does not equate to reversed output, "palin" is modified to notify user
          if (str1[i] !== str1[str1.length - i - 1])
            {
                document.getElementById("palin").innerHTML = "Palindrome: NOPE<br>Try another word!";
            }
       else
            {
                document.getElementById("palin").innerHTML = "Palindrome: YES<br>Try again?";
            }
      }