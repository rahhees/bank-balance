let balance =0;


function deposited(){
    let deposit=Number(document.getElementById('deposit').value);
    if(deposit<=0 || isNaN(deposit)){
        document.getElementById("error").innerHTML=alert("Please enter a valid number");
    }
    else{
        balance=deposit+balance;
        document.getElementById('deposit').innerHTML=alert("Amount deposited Successfully")
        
        // document.getElementById("output").innerHTML="₹"+balance;



    }
}

function withdraw(){
    let withdraw=Number(document.getElementById('withdraw').value);
    if(withdraw<=0 || isNaN(withdraw)){
        document.getElementById("error").innerHTML=alert("Please enter a valid amount")
    }else{
       balance= balance-withdraw;
       document.getElementById("withdraw").innerHTML=alert("Amount Withdrawn Successfully ")
        // document.getElementById("output").innerHTML="₹"+balance;


    }
}

function balanced(){
     document.getElementById("output").innerHTML="₹"+balance;


}
