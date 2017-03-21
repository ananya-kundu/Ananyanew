  var books = [{
      "name": "The C Programming Language",
      "topic": ["A", "B", "C"]
    },
    {
      "name": "Java",
      "topic": ["D", "E", "F"]
    },
    {
      "name": "Operating System",
      "topic": ["A", "E", "J"]
    },
    {
      "name": "Networking",
      "topic": ["M", "N", "P"]
    }
  ];


  class Library {
    constructor(name,topic) {
      this.name = name;
      this.topic = topic;
    }

    getName() {
      console.log(this.name);
      return this.name;
    }
    getTopic() {
      console.log(this.topic);
      return this.topic;
    }
  }
  class Findbooks extends Library {
    booksListfind(name,topic) {

        var bookName = this.name;
        //console.log(bookName);

        var bookTopic = this.topic;
        //console.log(bookTopic);

        for (var i = 0; i< books.length; i++) {
          var bookName1 = books[i].name;
          var bookTopics1 = books[i].topic;
          //console.log(books[i]);

          for (var j = 0; j< bookTopics1.length; j++) {
            if (bookTopic === bookTopics1[j]) {
              console.log(bookName1);
              alert(bookName1);
            }
          }
        }
      }
    }

        function display() {
          for (var i = 0; i <books.length; i++) {
            var bookName1 = books[i].name;
            var bookTopics1 = books[i].topic;

            var p = new Library(bookName1,bookTopics1);
             console.log(p);
            var a = p.getName();
            var b = p.getTopic();
            var ul = document.getElementById('pos');
            var li = document.createElement('li');
            li.innerHTML = a;
            ul.appendChild(li);
            var ul1 = document.createElement('ul');
            for (var j = 0; j < b.length; j++) {
              //console.log(b[j]);
              li.appendChild(ul1);
              var li1 = document.createElement('li');

              var del = document.createElement('a');
              del.innerHTML = b[j];

              del.setAttribute('href', 'javascript:searchBook("' + a + '","' + b[j] + '")');
              li1.appendChild(del);
              ul1.appendChild(li1);

            }
            console.log(a);
            console.log(b);
          }
        }

        function searchBook(name,topic) {
          this.name = name;
          this.topic = topic;
          console.log("function name is" + topic);
          console.log("function name is" + name);
          var p = new Findbooks(this.name, this.topic);
          p.booksListfind(name,topic);
          console.log(p);
        }





























        /*function topic() {
            console.log(typeof(books));
              console.log(typeof(A));
                console.log(books.A.artist);
                  console.log(typeof(books.A.tracks));
                    console.log(typeof(books[2468].album));
                     console.log(typeof((books[2468].tracks[0])));

             var t=books.A.artist;
            var para = document.createElement("p");
          var node = document.createTextNode(t);
           console.log(t);
          para.appendChild(node);

           var element = document.getElementById("demo");
          element.appendChild(para);
          document.getElementById("demo").value=books;
        }*/

        /*function update(){
          for (var i = 0; i < library.length; i++)
             {
              var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
              if (library[i].readingStatus) {
                console.log("Already read " + book);
                document.getElementById("output").innerHTML= "Already read " + book;
              } else
              {
               console.log("You still need to read " + book);
               document.getElementById("output").value= book;
              }
             }

        }*/
