var articles='{ "Book":[{"Author":"S.K.","PublishedDate":"27/02/2017","Publication":"SK Publication"},'+
              '{"Author":"S.S.","PublishedDate":"16/02/2017","Publication":"SS Publication"},'+
              '{"Author":"P.M.","PublishedDate":"24/01/2017","Publication":"PM Publication"},'+
              '{"Author":"A.S.","PublishedDate":"19/02/2017","Publication":"AS Publication"},'+
              '{"Author":"M.B.","PublishedDate":"15/01/2017","Publication":"MB Publication"} ]}';

var obj=JSON.parse(articles);

function what(){

  var ran =[Math.floor(Math.random()* obj.Book.length)];
 document.getElementById("mid").innerHTML="Author:: "+obj.Book[ran].Author+"<br>Published Date::"+obj.Book[ran].PublishedDate+"<br>Publication:: "+obj.Book[ran].Publication+"<br>"+Date();
setTimeout(what,1000);

};
