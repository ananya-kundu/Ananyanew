/*$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function (errorMessage) {
        }
    });
});*/


//http://www.9bitstudios.com/2014/03/getting-data-from-the-wikipedia-api-using-jquery/

$(document).ready(function(){
  $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sachin_Tendulkar&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            console.log(markup);

            var blurb = $('<div></div>').html(markup);
            var para1=$(blurb).find('p')[0];
            console.log(para1);
            var para2=$(blurb).find('p')[1];
            console.log(para2);
            var para3=$(blurb).find('p')[2];
            console.log(para3);
            var para4=$(blurb).find('p')[3];
            console.log(para4);
//$('#article').html($(blurb).find('table'));
            var blurb1 = $('<table></table>').html(blurb);
            var tab1=(blurb1).find('tr').find('table');
           console.log("aaaaaaaaa........",tab1);

           blurb1.find('tab1').each(function(){
                $(this).replaceWith($(this).html());
              });

            blurb.find('tab1').each(function(){
                  $(this).replaceWith($(this).html());
              });

            blurb1.find('tr').find('table').remove();
            blurb.find('.mw-ext-cite-error').remove();

            $("#tab1").html($(blurb1).find('tr'));
            $("#article1").html(para1);
            $("#article2").html(para2);
            $("#article3").html(para3);
            $("#article4").html(para4);
            $("#article5").html(tab1);




        },
        error: function (errorMessage) {
        }
    });
});
