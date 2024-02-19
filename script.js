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
let seatCounts=1;
let seats= document.getElementsByClassName("seat");
for (let seatInfo of seats){
    
    seatInfo.addEventListener("click",function(){
        


        if(mySeatValue <= 3){

            seatInfo.style.backgroundColor="#1DD100"
            seatInfo.style.backgroundColor="pointer"

        }
        else{

            alert("you already buy 4 ticket ")
            // seatInfo.style.backgroundColor="red"
            seatInfo.style.backgroundColor="pointer"
            return;
        }
       
        
        let mySeat =seatInfo.innerText
       const newP=document.createElement('p');
       const addValue =document.createTextNode(seatCounts+" ."+ " "+mySeat) ;
        newP.appendChild(addValue);
        const ticketAd = document.getElementById('ticket-add');
       ticketAd.appendChild(newP);
       seatCounts +=1;
       totalSeat-=1;
       mySeatValue +=1;

       document.getElementById('myseat').innerText=totalSeat;
       document.getElementById('seat-count').innerText=mySeatValue;

       

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

       let taka= (seatCounts*550)-550;

        document.getElementById('amount').innerText =taka;

        

        // discount section 
       
            const discountBtn=document.getElementById('apply-btn')
            discountBtn.addEventListener("click",function(){

             
            const getValue=document.getElementById('cupon').value;
            let countV=getValue.split("").join("");
        
            
            const offerIs= countV.toUpperCase()
                if(offerIs==="NEW15" ){
                    
                   let grand = taka-((taka*15)/100);
                    
                //    let amount = parseInt(document.getElementById('grand-total').innerText)
                  
                        document.getElementById('grand-total').innerText=parseInt(grand);
                        // document.getElementById('cupon').value="";
                        
                        
                }
                else if (offerIs === "COUPLE 20"){

                    let grand = taka-((taka*20)/100);
                  
                        document.getElementById('grand-total').innerText=grand;
                        

                        
                }
                else{

                    alert("invalid Cupon code")
                    document.getElementById('grand-total').innerText=taka;

                }
                



            })

        

        
    
    })
}


// console.log(hello);