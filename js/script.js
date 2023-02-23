function totalclick(click) {
    const totalClicks = document.getElementById("totalClicks")
    console.log(totalClicks);
    const sumvalue =parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumvalue;

    if(sumvalue < 0) {
        totalClicks.innerText = 0;        

    }

    if(click === 0){
        totalClicks.innerText = 0;        

    }

}
function like(){
    var likes = document.getElementById('like');
    if (likes.style.color == "red") {
        document.getElementById('like').style.color = "black"
    }
    else{
        likes.style.color = "red"
    }
}

function suprimer(){
     document.getElementById('suprimer').remove()
    }

function addition(click) {
    const addiTions = document.getElementById("addiTions");
    console.log(addiTions);
    const sumvalue =parseInt(addiTions.innerText) + click;
    addiTions.innerText = sumvalue; 

    if(sumvalue < 0) {
        addiTions.innerText = 0;        

    }

    if(click === 0){
        addiTions.innerText = 0;        

    }
    
}

function Heart(){
    var Heart = document.getElementById('Heart');
    if (Heart.style.color == "red") {
        Heart.style.color = "black"
    }
    else{
        Heart.style.color = "red"
    }
}

function Delet(){
    document.getElementById('Delet'). remove()    
 }