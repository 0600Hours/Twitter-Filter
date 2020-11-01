// store interval for later so we can stop searching once the timeline loads
var interval = null;

// check and see if the timeline is loaded yet
function waitForTimeline(callback) {
    // check for timeline based on this div; language-specific, unfortunately
    if ($('div[aria-label="Timeline: Your Home Timeline"]').length !== 0) {
        clearInterval(interval);
        callback();
    }
    ;
}

// function to run when the timeline has loaded
function onTimelineFound() {
    alert("timeline found");
    $('div[aria-label="Timeline: Your Home Timeline"] > div').css("border", "1px solid red")
};

// check every 10th of a second to see if the timeline has loaded yet
interval = window.setInterval(function () {
    waitForTimeline(onTimelineFound);
}, 100);