$(document).ready(function() {
  window.setTimeout(function() {
    animatePlane(1);
  }, 1000);
})

last = -1

var animatePlane = function(num) {
  if(!num) num = 1
  var plane = $('#plane' + num), top
  
  do {  
    num = Math.floor(Math.random() * 6);
  } while(num == last)
  
  last = num
  plane[0].className = 'plane-' + num;
  
  // do {
  top = (Math.floor(Math.random() * 80) + 10)
  // } while(top > 35 && top < 65)
  
  plane.css('top', top + '%');
  plane.css('left', (num % 2 == 0 ? '-30%' : '100%'));
  plane.css('opacity', (50 + (Math.floor(Math.random() * 50))) / 100);
  plane.css('scale', (30 + (Math.floor(Math.random() * 70))) / 100);
  
  window.setTimeout(function() {
    plane.animate({
      left: (num % 2 == 0 ? '100%' : '-20%')
    }, 12000, 'linear', function(){   animatePlane(); });
  }, Math.floor(1000 * ((Math.random() * 10) + 3)));
}
