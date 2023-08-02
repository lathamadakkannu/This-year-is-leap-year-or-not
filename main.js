var date=new Date();
var a=date.getFullYear();
document.write("This year is leap year or not="+a+"<br><br>");

if (a%4==0){
    
    document.write("Leap Year");
} 
else {
    document.write("Not a Leap Year");
}