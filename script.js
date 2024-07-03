function displayUTCDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getUTCDay()];
    const time = now.toUTCString()
    document.getElementById("utcDateTimeDay").textContent = dayOfWeek;
    document.getElementById("utcDateTimeTime").textContent = time;
}
displayUTCDateTime();
setInterval(displayUTCDateTime, 1000);