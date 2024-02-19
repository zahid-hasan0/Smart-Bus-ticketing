function clickme(){
    console.log("hellow");
}

// first functionality 
 function buyTicket(){

    let scrollIn = document.getElementById('mySection');
    scrollIn.scrollIntoView();

 }







//  second functionnality 
let totalSeat=40;
let mySeatValue=0;

let seats= document.getElementsByClassName("seat");

for (let seatInfo of seats){
    
    
    seatInfo.addEventListener("click",function(){
        
        seatInfo.style.backgroundColor="#1DD100"
        seatInfo.style.backgroundColor="pointer"
        
        let mySeat =seatInfo.innerText
       const newP=document.createElement('p');
       const addValue =document.createTextNode( " "+mySeat) ;
        newP.appendChild(addValue);
        const ticketAd = document.getElementById('ticket-add');
       ticketAd.appendChild(newP);
       
       totalSeat-=1;
       mySeatValue +=1;

       document.getElementById('myseat').innerText=totalSeat;
       document.getElementById('seat-count').innerText=mySeatValue;

       
// static information start
       const newP1=document.createElement('p');
       const addValue1 =document.createTextNode("Economy") ;
        newP1.appendChild(addValue1);
        const ticketAd1 = document.getElementById('ticket-add1');
       ticketAd1.appendChild(newP1);

       const newP2=document.createElement('p');
       const addValue2 =document.createTextNode("550") ;
        newP2.appendChild(addValue2);
        const ticketAd2 = document.getElementById('ticket-add2');
       ticketAd2.appendChild(newP2);

    //    static information end

       let taka= (mySeatValue*550);

        document.getElementById('amount').innerText =taka;


        // discount section 
       
        const discountBtn =document.getElementById("apply-btn");
        console.log(discountBtn);

        
           
          
            
    
    })

   

    
}


const discountBtn =document.getElementById("apply-btn");
discountBtn.addEventListener("click",function(){

    let codeV=document.getElementById("cupon").value;

    let mainCodesSplit= codeV.split("")
    let mainCode = mainCodesSplit.join("");

    console.log(mainCode);

})

   