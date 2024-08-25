// start function: calls intervalStart function upon clicked, works under conditions that "stop" is not active, and vice versa
function start()
{
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    intervalStart();
}

// functions the same as "start"
function stop()
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    intervalStop();
}

// var change equals changing by 100 pixels. interval timer sets, making a change every 10ms of .3 pixels moving left
function intervalStart()
{
    var image = document.getElementById("clouds");
    var change = 100;
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";

        change +=.3;
    },10);
}

// calls clearInterval, which resets intervalStart changes and halts movement
function intervalStop()
{
    {
        clearInterval(intervalID);
        clearInterval
    }
}
