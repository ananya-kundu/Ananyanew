


function myFunction() {
  var x= parseInt(document.getElementById("firstNo").value);
  console.log(x);
  var min=1;
  var max=100;
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  var y= (Math.floor(Math.random() * (max - min + 1)) + min) * x ;
  console.log(y);
  document.getElementById("demo").innerHTML = y;
}
