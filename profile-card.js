const timeElement = document.getElementById("Time");

function updateTime() {
    const currentTimeInMs = Date.now(); // Gets current timestamp in milliseconds
    timeElement.textContent = `Current Time in Milliseconds: ${currentTimeInMs}`;
}

// Update time immediately and then every millisecond for most accurate display
updateTime();
setInterval(updateTime, 1000);

