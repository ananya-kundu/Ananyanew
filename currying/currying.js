var add = function(a)
{
  return function(b){
return a+b;
}
};
function Addition()
{
  var x=Number.parseInt(document.getElementById('firstnumber').value);
  var y=Number.parseInt(document.getElementById('secondnumber').value);
 var num = add(x)(y);
 document.getElementById('result').value=num;

}
