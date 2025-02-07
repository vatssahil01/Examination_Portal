function navigateToFile() {
    let selectedFile = document.getElementById("fileSelect").value;
    if (selectedFile) {
        window.location.href = selectedFile; // Redirects to the selected HTML file
    }
}
function startCountdown() {
    let timeLeft = 60 * 60; // 60 minutes in seconds
    let timerDisplay = document.getElementById("timerDisplay");

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);  // Get minutes
        let seconds = timeLeft % 60;               // Get seconds
        timerDisplay.textContent =
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;   // Display in MM:SS format

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);          // Update every second
        } else {
            timerDisplay.textContent = "Time's Up!";
        }
    }

    updateTimer();
}

 // Access the user's camera
 navigator.mediaDevices.getUserMedia({ video: true })
 .then(function(stream) {
     // Get the video element
     const videoElement = document.getElementById('video');
     // Set the stream as the video source
     videoElement.srcObject = stream;
 })
 .catch(function(error) {
     console.error("Error accessing the camera: ", error);
 });

// Open Calculator Modal
function openCalculator() {
    document.getElementById("calculatorModal").style.display = "block";
}

// Close Calculator Modal
function closeCalculator() {
    document.getElementById("calculatorModal").style.display = "none";
}
