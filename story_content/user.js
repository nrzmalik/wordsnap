window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function toggleMute() {
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}
toggleMute();
 
}

window.Script2 = function()
{
  function toggleMute() {
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}
toggleMute();
 
}

window.Script3 = function()
{
  function toggleMute() {
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}
toggleMute();
 
}

window.Script4 = function()
{
  setVar("WordCount",0);
setVar("TimerEnable",true);
var player = GetPlayer();
player.SetVar("TimerCount", "00:00");
function stopTimer() {
    if (typeof window.timerInterval !== 'undefined') {
        clearInterval(window.timerInterval);
        delete window.timerInterval;
    }
}
stopTimer();
}

window.Script5 = function()
{
  var player = GetPlayer();

// Get the initial time in minutes from the variable 'SlTimer'
var totalMinutes = 2;

// Convert minutes to seconds
var totalTimeInSeconds = totalMinutes * 60;

// Check if the timer is already running
if (typeof window.timerInterval === 'undefined') {
    // Function to start the countdown
    function startCountdown() {
        window.timerInterval = setInterval(function() {
            // Calculate minutes and seconds
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;

            // Format minutes and seconds to MM:SS
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

            // Update the 'SlTimerCount' variable in Storyline
            player.SetVar("TimerCount", formattedMinutes + ":" + formattedSeconds);

            // Decrease the total time by 1 second
            totalTimeInSeconds--;

            // Stop the countdown when time runs out
            if (totalTimeInSeconds < 0) {
                clearInterval(window.timerInterval);
                delete window.timerInterval;
                player.SetVar("TimerEnable",false)
            }
        }, 1000);
    }

    // Start the countdown
    startCountdown();
}

}

window.Script6 = function()
{
  intapi();
}

window.Script7 = function()
{
  function toggleMute() {
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(0);
}
toggleMute();
 
}

};
