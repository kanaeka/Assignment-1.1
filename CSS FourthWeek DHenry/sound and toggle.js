// rain function for "rain" button, begins music as well as intervalStart
function rain()
{
    mySound = new sound("night-in-kyoto-avbe-main-version-21302-01-57.mp3");
    mySound.play();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    intervalStart();
}

// helper function, creates audio element
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {this.sound.play();}

}

// halt function for "halt" button, stops the music and calls intervalStop
function stopMusic()
{
    window.location.reload();
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    intervalStop()
}

// begins moving image
function intervalStart()
{
    var image = document.getElementById("rain");
    var change = -200;
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";
        image.style.top = change+"px";

        change += .1;
    },10);
}

// halts moving image
function intervalStop()
{
    {
        clearInterval(intervalID);
        clearInterval
    }
}
