function calcualteWeddingDay(){
    const countDownDate = new Date("March 9, 2024 16:00:00").getTime();
    
    const x = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((distance % (1000*60)) / 1000);

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        if(daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.innerHTML = days.toString();
            hoursElement.innerHTML = hours.toString();
            minutesElement.innerHTML = minutes.toString();
            secondsElement.innerHTML = seconds.toString();
        }

        if(distance < 0) {
            clearInterval(x);
            const timerElement = document.getElementById("weddingDayMessage");
            
            if(daysElement && hoursElement && minutesElement && secondsElement && timerElement) {
                daysElement.innerHTML = "0";
                hoursElement.innerHTML = "0";
                minutesElement.innerHTML = "0";
                secondsElement.innerHTML = "0";
                timerElement.innerHTML = "¡ES HOY, ES HOY! :D";
            }
        }
    });
}

export default calcualteWeddingDay;