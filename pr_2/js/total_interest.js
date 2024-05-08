let heading = "Total Interest";
document.getElementById('heading').innerHTML = " "+ heading;

let amount = "Amount :"
let year = "number of year:"
let total = "Total Amount :"
let amountcalculate = "2000";
let r = 5 ;
let y = 5 ;

    if (y > 3 && y <= 5) {
        r = 3;
    } else if (y > 5 && y <= 8) {
        r = 5;
    } else if (y > 8 && y <= 12) {
        r = 12;
    } else {
        r = 15;
    }
    let t_interest = (amountcalculate * r * y) / 100;

document.getElementById('amount').innerHTML = " " + amount;
document.getElementById('year').innerHTML = " " + year;
document.getElementById('total').innerHTML = " " + total;
document.getElementById('amountcalculate').innerHTML = " " + amountcalculate;
document.getElementById('years').innerHTML = " "+ r;
document.getElementById('totalcalculation').innerHTML = " " + t_interest;

