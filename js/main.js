var bgs = [
    '/img/drawingA.gif',
    '/img/drawingB.gif',
    '/img/drawingC.gif',
    '/img/drawingD.gif',
];

var colors = [
  '#1c9967',
  '#c9571f',
  '#e8c405',
  '#b42d76',
];

var n = Math.floor(Math.random()*bgs.length);
var c = Math.floor(Math.random()*colors.length);
var root = document.documentElement;
document.getElementById('drawing').style.backgroundImage = 'url(' + bgs[n] + ')';
root.style.setProperty("--accent", colors[c]);
root.style.setProperty("--accent-transparent", colors[c] + 'cc');

var links = document.getElementsByTagName("A");
window.onload = loadFrames;

function loadFrames(event) {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));

} } }


//window.onload = init;


$(document).ready(function() {
  $('ul#category-selector li').click(function() {
    $('ul#category-selector li.current').removeClass('current');
    $(this).addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    if(filterVal == 'all') {
      $('section a').removeClass('hidden');
      $('section').removeClass('hidden');
    } else {
      $('section a').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });

      $('section').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });


    }

    return false;
  });
});
