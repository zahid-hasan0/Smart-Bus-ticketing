function clickme(){
    console.log("hellow");
}

let seatCounts=0;
let seats= document.getElementsByClassName("seat");
for (let seatInfo of seats){
    
    seatInfo.addEventListener("click",function(){
        
        seatInfo.style.backgroundColor="#1DD100"
        seatInfo.style.backgroundColor="pointer"
        
        // let seatNum = document.getElementById("seat-name").innerText
        // console.log(seatNum);

        const p=document.createElement('p');
        const ticketAd = document.getElementById('seat-name');
        ticketAd.innerHTML="<p></p>"

    })
}

