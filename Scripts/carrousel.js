let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){nextSlide()}, 5000);

function nextSlide(){
        count++;
        if (count > 4){
            count = 1;
        }

        document.getElementById("radio" + String(count)).checked = true;

    }