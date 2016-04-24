function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

//var deadline = new Date(Date.parse(new Date()) +  2 * 60 * 1000);
//initializeClock('clockdiv', deadline);


		
    
    if(typeof Storage !== "undefined")
  {
  // Yes! localStorage and sessionStorage support!
  // Some code.....
  if (localStorage.getItem("MyTime") === null) {
  var timeInMinutes = 1;

		var currentTime = Date.parse(new Date());
		var deadline = new Date(currentTime + timeInMinutes*60*1000);
		document.cookie = deadline + '; path=/; domain= .codervubon.com';
		initializeClock('clockdiv', deadline);
 // Store
localStorage.setItem("MyTime", new Date());
}else{


var timeInMinutes = 1;
  if(((Date.parse(new Date())) - ((Date.parse(new Date(localStorage.getItem("MyTime")))) + timeInMinutes*60*1000)) >= 0){
//alert('time exceed');
document.getElementById('clockdiv').style.display= 'none';
}else{
alert('time not exceed');
		var currentTime = Date.parse(new Date(localStorage.getItem("MyTime")));
		var deadline = new Date(currentTime + timeInMinutes*60*1000);
		document.cookie = deadline + '; path=/; domain= .codervubon.com';
		initializeClock('clockdiv', deadline);
}

}
  }
else
  {
  // Sorry! No web storage support..
  }
	
	
