function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Now!";
            clearInterval(timer); // Stop the countdown when it reaches 0
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Run immediately
    const timer = setInterval(updateCountdown, 1000); // Update every second
}

// Set the event date: Year, Month (0-based), Day, Hour, Minute (24-hour format)
const eventDate = new Date(2025, 2, 16, 11, 0, 0).getTime(); // 16 March 2025, 11:00
startCountdown(eventDate);