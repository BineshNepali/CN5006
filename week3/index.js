function EmployeeInfo(name, Salary) 
{ 
console.log("Welcome " + name + " Your monthly Salary is " + 
Salary); 
} 
  
// Display current date and time 
const currentDateTime = new Date(); 
  
console.log("This is my first program"); 
console.log("Programe run on : " 
+  currentDateTime.toLocaleString()); 
  
var EmpName = "Binesh"; 
var EmpSalary = 50000; 
  
EmployeeInfo(EmpName, EmpSalary); 

const EmpSkills= (skills,Name,LabGrp)=> { 
  console.log(" 3128032"+ Name+ "Java "+ skills) 
  console.log("Group 19",LabGrp) 
} 
EmpSkills("java","3128032 ","Group 19") 
 
const student= require('./StudentInfo')  
const person = require('./Person')  
console.log("Student Name:" +student.getName())   
console.log(student.Location())  
console.log(student.dob)  
console.log(student.Studentgrade())  
console.log("grade is "+student.Studentgrade(55) ) 
person1= new person("Binesh","21","bineshnepali16@gmail.com")  
console.log("Mobile & Mobile Application Development ",person1.getPersonInfo()) 
console.log("Programe ended") 
