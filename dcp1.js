
function sum(a, k) {

    for(var i=0; i<a.length; i++) {
        for(var j=1; j<a.length; j++) {
            if(a[i] + a[j] == k) {
                flag = 1;
                break;
            }
        }
    }

    if(flag) {
        return true;
    }
    else {
        return false;
    }
}

function sumFast(a, k) {

    start = 0;
    end = a.length - 1;

    while(start < a.length && end > -1) {
        if(a[start] + a[end] == k) {
            flag = 1;
            break;
        }
        else {
            flag = 0;
        }
        start++;
        end--;
    }

    if(flag) {
        return true;
    }
    else {
        return false;
    }
}

boolSum = sum([10,15,3,7], 17);
boolSumFast = sumFast([10,15,3,7], 17);
console.log(boolSum);
console.log(boolSumFast);