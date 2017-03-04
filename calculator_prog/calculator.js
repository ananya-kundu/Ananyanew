function calculator()
{
  var x=parseInt(document.getElementById("firstNo").value);
  var y=parseInt(document.getElementById("secondNo").value);
  var z=document.getElementById('symbol').value;
  var sum;
  switch(z){
    case "Addition":
        sum = x+y;
        break;
    case "Subtraction":
        sum = x-y;
        break;
   case "Multiplication":
         sum = x*y;
         break;
  case "Divison":
        sum = x/y;
        break;
}
e=document.getElementById("ans").value;
e.value=sum;
}
