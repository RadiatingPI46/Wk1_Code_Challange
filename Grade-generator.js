// Student marks input 
let Student_mark=56;
// Grading values
const Grades =["A","B","C","D","E"]
// Function for determining someones grade based on the marks input
function Grading(){
    if(Student_mark>=0 && Student_mark<40){
        console.log("Grade"+"-"+Grades[4]);
    }
    else if(Student_mark>=40 && Student_mark<50){
        console.log("Grade"+"-"+Grades[3]);
        
    }
    else if(Student_mark>=50 && Student_mark<60){
        console.log("Grade"+"-"+Grades[2]);
        
    }
    else if(Student_mark>=60 && Student_mark<80){
        console.log("Grade"+"-"+Grades[1]);
        
    }
    else if(Student_mark>=80 && Student_mark<=100){
        console.log("Grade"+"-"+Grades[0]);
        
    }
    else{
        console.log("Invalid Input");
        
    }
}

console.log(Grading());
