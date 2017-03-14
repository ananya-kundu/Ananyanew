var album = {
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
function update(){

  //  document.getElementById('output').innerHTML =album ;

  var id = parseInt(document.getElementById("id1").value);
  var prop = document.getElementById("prop1").value;
  var value = document.getElementById("value1").value;

  if (value != " ") {
    if (prop != "tracks") {
      album[id][prop] = value;
    } else {
      if (prop == "tracks") {
        if (!album[id].hasOwnProperty("tracks")) {
          album[id].tracks = [];
          album[id].tracks.push(value);
        } else {
          album[id].tracks.push(value);
        }
      }
    }
  }
  else {
    delete album[id][prop];
  }
  var x = "" ;
  for (var i in album){
      x +=i+" "+JSON.stringify(album[i])+"<br><br><br>";
      console.log(x);
  }
  console.log(album);
  document.getElementById('output').innerHTML ="ghj"+ x ;
}
