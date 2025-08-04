
var z=document.getElementsByClassName("heading");
z[0].addEventListener('mouseover',function f1(){
    z[0].style.backgroundColor='lightskyblue';
     
 })

 
var y=document.getElementsByClassName("l1");
for (let i = 0; i < y.length; i++) {
  y[i].addEventListener('mouseover',function f1(){
    y[i].style.backgroundColor='aquamarine';
    y[i].style.fontWeight = 'bold';  
 })
}
var p = document.getElementsByClassName("profile");
p[0].addEventListener('click', function f1() {
  p[0].style.transform = 'scale(1.1)'; 
  p[0].style.backgroundColor='olive';
  
});

