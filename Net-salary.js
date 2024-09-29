// Income
let Monthly_income=1000000;
let Annual_income=(Monthly_income*12);

// Monthly (Reliefs)

let Personal_Relief=1200;
let Insurance_Relief=1000;
let Affordable_Housing_Relief=1456;

 if((Personal_Relief>=0 && Personal_Relief<=2400)&&(Insurance_Relief>=0 && Insurance_Relief<=5000)&&(Affordable_Housing_Relief>=0 && Affordable_Housing_Relief<=9000)){
    Personal_Relief=Personal_Relief
    Insurance_Relief=Insurance_Relief
    Affordable_Housing_Relief=Affordable_Housing_Relief
 }
 else{
    Personal_Relief="Relief_Error"
    Insurance_Relief="Relief_Error"
    Affordable_Housing_Relief="Relief_Error"
 }
// Monthly (Contributions)

let Allowable_Pension_Fund_Contribution=1000;
let Allowable_HOSP_Contribution	=0;

if((Allowable_HOSP_Contribution===0)&&(Allowable_Pension_Fund_Contribution>=0 && Allowable_Pension_Fund_Contribution<=20000)){
    Allowable_HOSP_Contribution=Allowable_HOSP_Contribution
    Allowable_Pension_Fund_Contribution=Allowable_Pension_Fund_Contribution
}
else{
    Allowable_HOSP_Contribution="Contribution_Error"
    Allowable_Pension_Fund_Contribution="Contribution_Error"
}

// Other PAYE parameters (Monthly)

let Allowable_Owner_Occupier_Interest=1500;
let Disability_Exemption=1000;

if((Allowable_Owner_Occupier_Interest>=0 && Allowable_Owner_Occupier_Interest<=25000)&&(Disability_Exemption>=0 && Disability_Exemption<=15000)){
    Allowable_Owner_Occupier_Interest=Allowable_Owner_Occupier_Interest
    Disability_Exemption=Disability_Exemption
}
else{
    Allowable_Owner_Occupier_Interest="Error"
    Disability_Exemption="Error"
}

// Taxable income

let Monthly_Taxable_Pay=(Monthly_income-(Allowable_HOSP_Contribution+Allowable_Pension_Fund_Contribution+Allowable_Owner_Occupier_Interest+Disability_Exemption));
let Annual_Taxable_Pay=Monthly_Taxable_Pay*12;

// Pensionable Pay

let Pensionable_Pay=1500;
let Limit=1;

if(Pensionable_Pay>=0 && Pensionable_Pay<=7000){
    Limit="Limit-1"
    Pensionable_Pay=Pensionable_Pay
}
else if(Pensionable_Pay>7000 && Pensionable_Pay<=36000){
    Limit="Limit-2"
    Pensionable_Pay=Pensionable_Pay
}
else{
    Pensionable_Pay="Input Error"
}

// Rates in Effect from 1 jully 2023
// Function for calculating the tax 

function Tax(){
    if(Annual_Taxable_Pay>=0 && Annual_Taxable_Pay<=288000){
        Tax_Rate=(10/100);
        Max_Relief=(Personal_Relief+Insurance_Relief+Affordable_Housing_Relief);
        Monthly_Tax=((Monthly_Taxable_Pay*Tax_Rate)-Max_Relief);
        console.log("Tax(Monthly)="+Monthly_Tax);
    }
    else if(Annual_Taxable_Pay>288000 && Annual_Taxable_Pay<=388000){
        Tax_Rate=(25/100);
        Max_Relief=(Personal_Relief+Insurance_Relief+Affordable_Housing_Relief);
        Monthly_Tax=((Monthly_Taxable_Pay*Tax_Rate)-Max_Relief);
        console.log("Tax(Monthly)="+Monthly_Tax);
    }
    else if(Annual_Taxable_Pay>388000 && Annual_Taxable_Pay<=6000000){
        Tax_Rate=(30/100);
        Max_Relief=(Personal_Relief+Insurance_Relief+Affordable_Housing_Relief);
        Monthly_Tax=((Monthly_Taxable_Pay*Tax_Rate)-Max_Relief);
        console.log("Tax(Monthly)="+Monthly_Tax);
    }
    else if(Annual_Taxable_Pay>6000000 && Annual_Taxable_Pay<=9600000){
        Tax_Rate=(32.5/100);
        Max_Relief=(Personal_Relief+Insurance_Relief+Affordable_Housing_Relief);
        Monthly_Tax=((Monthly_Taxable_Pay*Tax_Rate)-Max_Relief);
        console.log("Tax(Monthly)="+Monthly_Tax);
    }
    else{
        Tax_Rate=(35/100);
        Max_Relief=(Personal_Relief+Insurance_Relief+Affordable_Housing_Relief);
        Monthly_Tax=((Monthly_Taxable_Pay*Tax_Rate)-Max_Relief);
        console.log("Tax(Monthly)="+Monthly_Tax);
    }
    // Function for calculating the NHIF deductions
    NHIF_Deductions=()=>{
        if(Monthly_income>=0 && Monthly_income<6000){
            NHIF_Deduction=150
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=6000 && Monthly_income<8000){
            NHIF_Deduction=300
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>8000 && Monthly_income<12000){
            NHIF_Deduction=400
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=12000 && Monthly_income<15000){
            NHIF_Deduction=500
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=15000 && Monthly_income<20000){
            NHIF_Deduction=600
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=20000 && Monthly_income<25000){
            NHIF_Deduction=750
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=25000 && Monthly_income<30000){
            NHIF_Deduction=850
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=30000 && Monthly_income<35000){
            NHIF_Deduction=900
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=35000 && Monthly_income<40000){
            NHIF_Deduction=950
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=40000 && Monthly_income<45000){
            NHIF_Deduction=1000
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=45000 && Monthly_income<50000){
            NHIF_Deduction=1100
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=50000 && Monthly_income<60000){
            NHIF_Deduction=1200
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=60000 && Monthly_income<70000){
            NHIF_Deduction=1300
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=70000 && Monthly_income<80000){
            NHIF_Deduction=1400
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=80000 && Monthly_income<90000){
            NHIF_Deduction=1500
            console.log(NHIF_Deduction);
        }
        else if(Monthly_income>=90000 && Monthly_income<100000){
            NHIF_Deduction=1600
            console.log(NHIF_Deduction);
        }
        else{
            NHIF_Deduction=1700
            console.log(NHIF_Deduction);
        } 
        // function for calculating the NSSF deductions
        NSSF_Deductions=()=>{
            if(Limit==="Limit-1"){
                NSSF_Deduction=(Pensionable_Pay*(6/100))
                console.log(NSSF_Deduction);
            }
            else if(Limit==="Limit-2"){
                NSSF_Deduction=(Pensionable_Pay*(6/100))
                console.log(NSSF_Deduction);
            }
            else{
                NSSF_Deduction="Null"
                console.log(NSSF_Deduction);
                
            }
            // Function for calculating the total dedductions including the tax
            Total_Deductions=()=>{
                Total_Deduction=(Monthly_Tax+NHIF_Deduction+NSSF_Deduction)
                console.log(("T.Deduction"+"="+Total_Deduction));

                // function for calculating the net salary
                Net_Salarys=()=>{
                    Net_Monthly_Salary=(Monthly_income-Total_Deduction)
                    Net_Annual_Salary=(Net_Monthly_Salary*12)
                    return("-Net_Monthly_Salary"+"="+Net_Monthly_Salary);
                    
                }
            }
        }
    }
}
console.log(Tax()+NHIF_Deductions()+NSSF_Deductions()+Total_Deductions()+Net_Salarys());


