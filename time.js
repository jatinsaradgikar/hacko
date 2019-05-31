s = '12:40:22AM';

function timeConvert(s) {
    let strhour = '';
    let hour = 0;

    for(let i=0; i<s.length; i++) {
        if(s[i]===':') {
            break;
        }
        strhour += s[i];
    }

    hour = parseInt(strhour);
    console.log(hour);

    if(s.includes('PM')) {
        s = s.replace('PM','');

        if(hour === 12) {
            break;
        }

        hour += 12;
        
        hour = hour.toString();
        s = s.replace(strhour, hour);    
    }
    else {
        s = s.replace('AM','');

        if(hour === 12) {
            s = s.replace(strhour,'00');
        }
    }
    return s;
}

var miltime = timeConvert(s);
console.log(miltime);