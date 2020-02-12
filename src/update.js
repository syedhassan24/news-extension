
console.log("testing");
var url="http://api.openweathermap.org/data/2.5/weather?q=Dubai&APPID=39b9b3840d287ad6306860fcad2bcbd5";
//var weather=document.getElementById('b');
var news=document.getElementById('c');
var time=document.getElementById('d');
var url2="https://newsapi.org/v2/top-headlines?country=us&apiKey=47db0e6e1d874dfaa2647aae6559f136";
var result= "hells" ;
var rest;
console.log(result);
newsR();
//retrieveT();
timeDate();

function retrieveT(){
  var req= new XMLHttpRequest();
  req.open("GET",url);
  req.onload = function () {
  result=JSON.parse(req.responseText);
  weather.innerHTML=Math.ceil(result.main.temp-273.15);
};
req.send();
}

function newsR(){
  var req= new XMLHttpRequest();
  req.open("GET",url2);
  req.onload = function () {
  rest=JSON.parse(req.responseText);
  for(var i=0;i<5;i++)
  {
    var bull = document.createElement("ul");
    var point = document.createElement("li");
    point.setAttribute("style","color:#fe921f;font-size: 20px;");
    var node = document.createTextNode(rest.articles[i].title);
    var point2 = document.createElement("li");
    var node2 = document.createTextNode(rest.articles[i].description);
    var point3 = document.createElement("li");
    var ur =document.createElement("a");
    ur.setAttribute("target","blank");
    ur.setAttribute("href", rest.articles[i].url);
    ur.setAttribute("style","color:#fe921f;text-decoration:underline;");
    ur.innerHTML="Source";
    point.appendChild(node);
    point2.appendChild(node2);
    point3.appendChild(ur);
    bull.appendChild(point);
    bull.appendChild(point2);
    bull.appendChild(point3);
    news.appendChild(bull);
  }
  };
  req.send();
}

function timeDate(){
  var hour;
  var month=["January","Feb","march","april","may","june","july","august","september","october","november","december"];
  var day= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var info= new Date();
  hour=info.getHours();
  time.innerHTML=hour;
  if(hour>12)
  {
    var x= hour-12;
    time.innerHTML=day[info.getDay()]+","+month[info.getMonth()]+info.getDate()+","+x+":"+info.getMinutes()+"pm"+","+info.getFullYear();
  }
  else {
    {
      time.innerHTML=day[info.getDay()]+","+month[info.getMonth()]+info.getDate()+","+info.getHours()+":"+info.getMinutes()+"am"+","+info.getFullYear();
    }
  }
}
