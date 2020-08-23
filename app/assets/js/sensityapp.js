function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("hour").innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function getDate() {
  var wDays = [
    "Sunday, ",
    "Monday, ",
    "Tuesday, ",
    "Wednesday, ",
    "Thursday, ",
    "Friday, ",
    "Saturday, ",
  ];
  var months = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December ",
  ];
  var date = new Date();
  var day = date.getDate();
  var wd = date.getDay();
  var mo = date.getMonth();
  document.getElementById("date").innerHTML = wDays[wd] + months[mo] + day;
}

function getPhrase() {
  var random = Math.ceil(Math.random() * 5);
  var phrases = [
    "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    "Quality is not an act, it is a habit.",
    "Setting goals is the first step in turning the invisible into the visible.",
  ];
  var authors = [
    "Stephen Hawking",
    "Confucius",
    "Helen Keller",
    "St. Jerome",
    "Aristotle",
    "Tony Robbins",
  ];
  document.querySelector(".phrase").innerHTML = `"${phrases[random]}"`;
  document.querySelector(".author").innerHTML = authors[random];
}

function changeBackground() {
  var images;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.status == 200) {
      images = JSON.parse(this.responseText);
      var getImage = images.images.map((item) => item.url);

      var randomImg = getImage.find(
        (element, index) => index === Math.ceil(Math.random() * getImage.length)
      );

      var setBackground;

      //pega uma imagem randômica
      setBackground = getBackground(randomImg || "../img/1.jpg");

      document.querySelector(".header").style.backgroundImage = setBackground;
    }
  };
  xhttp.open("GET", "http://www.splashbase.co/api/v1/images/latest", true);
  xhttp.send();
}

// seta a imagem randômica já testada
function getBackground(image) {
  return `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${image})`;
}
