// Parrametersc
let Speed=300;

let Demerits=0;

// Function for calculating the demerit that someone gets

function Merit(){
    if(Speed>=0 && Speed<=70){
        console.log("Ok");
        
    }
    else if(Speed>70 && Speed<=75){
        Demerits=Demerits+1
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>75 && Speed<=80){
        Demerits=Demerits+2
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>80 && Speed<=85){
        Demerits=Demerits+3
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>85 && Speed<=90){
        Demerits=Demerits+4
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>90 && Speed<=95){
        Demerits=Demerits+5
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>95 && Speed<=100){
        Demerits=Demerits+6
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>100 && Speed<=105){
        Demerits=Demerits+7
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>105 && Speed<=110){
        Demerits=Demerits+8
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>110 && Speed<=115){
        Demerits=Demerits+9
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>115 && Speed<=120){
        Demerits=Demerits+10
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>120 && Speed<=125){
        Demerits=Demerits+11
        console.log("Demerit-Points","="+Demerits);
        
    }
    else if(Speed>125){
        Demerits=Demerits+12
        console.log("Demerit-Points","="+Demerits);
        
    }
    else{
        console.log("Invalid Input");
        
    }
    // Function for showing wether someone is suspended
    Licence=()=>{
        if(Demerits>=12){
            console.log("Licence-Suspended");
            
        }
        else{
            console.log("Licence-Active");
            
        }
    }
}
// Result
console.log(Merit()+Licence());
