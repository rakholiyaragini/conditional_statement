let heading = "Electricity Unit Bill";
document.getElementById('heading').innerHTML = " "+ heading;

let unit = 10;
let totalamount = "Total Amount : 90";
document.getElementById("totalamount").innerHTML = " " + totalamount;

let billamount = 0;

if(unit <= 50){

    billamount = unit * 1;

}else if(unit > 50 && unit <= 150){

    billamount = (50 * 1) + ((unit - 50) * 2);

}else if(unit > 150 && unit <= 250){

    billamount = (50 * 1) + (100 * 2) + ((unit - 150) * 3);

}else{

    billamount = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4);
}
document.getElementById("billamount").innerHTML = " Bill Amount : " + billamount;
