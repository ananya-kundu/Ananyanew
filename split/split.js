
window.onload=function myfun(){

  var str='Tim:20,Henry:30,Linda:35';
  document.write("Given input is : " +str+ "<br/>");

  var repl=str.replace(/:/g,", "); //'/g' used for globally accessing i.e. all ':' replaced with ','
  console.log(repl);

  var a=repl.split(",");
  console.log(a);
  /*for(var i=0;i<=a.length;i++){
    console.log(a[i]);
  }*/
  document.write("Output is : " +a);

}
