let heading = "Seasons";
document.getElementById('heading').innerHTML = " "+ heading;


let month = 8;
let season = document.getElementById("season")

switch(month){

    case 1:
    case 2:
    case 3:
    case 4:
        season.innerHTML =  month + " : Winter";
        break;

    case 5:
    case 6:
    case 7:
    case 8:
        season.innerHTML =  month + " : summer";
        break;

    case 9:
    case 10:
    case 11:
    case 12:
        season.innerHTML =  month + " : monsoon";
        break;

    default :
        season.innerHTML = "Enter Valid Month.."
}