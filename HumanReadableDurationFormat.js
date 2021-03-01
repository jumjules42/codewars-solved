function formatDuration (seconds) {
    if(seconds === 0){ return "now"; }  

    const duration = {
        minutes: 60,
        hours: 60,
        days: 24,
        years: 365,
    };

    let time = [];
    let minutes, hours, days, years;

    minutes = Math.floor(seconds / duration.minutes);
    seconds %= duration.minutes;

    if(seconds > 1) {
        time.push(seconds + " seconds");
    }else if(seconds === 1) {
        time.push(seconds + " second");
    }

    if(minutes > 0) { 
        hours = Math.floor(minutes / duration.hours)
        minutes %= duration.minutes;
        if(minutes > 1) {
            time.push(minutes + " minutes");
        }else if(minutes === 1) {
            time.push(minutes + " minute");
        }
        if(hours > 0) { 
            days = Math.floor(hours / duration.days);
            hours %= duration.days;
            if(hours > 1) {
                time.push(hours + " hours");
            }else if(hours === 1) {
                time.push(hours + " hour");
            }
            if(days > 0) {
                years = Math.floor(days / duration.years);
                days %= duration.years;
                if(days > 1) {
                    time.push(days + " days");
                }else if(days === 1) {
                    time.push(days + " day");
                }
                if(years === 1) { 
                    time.push(years + " year"); 
                }else if(years > 1) {
                    time.push(years + " years");
                }
            }
        }
    }

    let format = time.filter(el => el !== 0).reverse();

    if(format.length > 1) {
        format[format.length - 1] = "and " + format[format.length - 1];
        for(let i = 0; i < format.length - 2; i++) {
            format[i] += ",";
        }
    }

    format = format.join(" ")

    return format;
}   

formatDuration(3662);
