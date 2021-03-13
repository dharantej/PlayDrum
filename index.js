document.addEventListener('keydown',function(event)
{
  var ch=event.key;
  switch(ch)
  {
    case 'a':
    var audio=new Audio('sounds/kick-bass.mp3');
    document.querySelector('.a').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 's':
    var audio=new Audio('sounds/snare.mp3');
    document.querySelector('.s').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 'd':
    var audio=new Audio('sounds/tom-1.mp3');
    document.querySelector('.d').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 'w':
    var audio=new Audio('sounds/crash.mp3');
    document.querySelector('.w').style.color='#9ecca4';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 'j':
    var audio=new Audio('sounds/tom-2.mp3');
    document.querySelector('.j').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 'k':
    var audio=new Audio('sounds/tom-3.mp3');
    document.querySelector('.k').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    document.querySelector('.l').style.color='#DA0463';
    audio.play();
    break;
    case 'l':
    var audio=new Audio('sounds/tom-4.mp3');
    document.querySelector('.l').style.color='#9ecca4';
    document.querySelector('.w').style.color='#DA0463';
    document.querySelector('.a').style.color='#DA0463';
    document.querySelector('.s').style.color='#DA0463';
    document.querySelector('.j').style.color='#DA0463';
    document.querySelector('.k').style.color='#DA0463';
    document.querySelector('.d').style.color='#DA0463';
    audio.play();
    break;
    default:
    console.log(event.key);
    break;
  }
});

document.querySelector('.w').addEventListener('click',function(){
  var audio=new Audio('sounds/crash.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();

});
document.querySelector('.a').addEventListener('click',function(){
  var audio=new Audio('sounds/kick-bass.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();
});
document.querySelector('.s').addEventListener('click',function(){
  var audio=new Audio('sounds/snare.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();
});
document.querySelector('.d').addEventListener('click',function(){
  var audio=new Audio('sounds/tom-1.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();
});
document.querySelector('.j').addEventListener('click',function(){
  var audio=new Audio('sounds/tom-2.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();
});
document.querySelector('.k').addEventListener('click',function(){
  var audio=new Audio('sounds/tom-3.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  document.querySelector('.l').style.color='#DA0463';
  audio.play();
});
document.querySelector('.l').addEventListener('click',function(){
  var audio=new Audio('sounds/tom-4.mp3');
  this.style.color='#9ecca4';
  document.querySelector('.w').style.color='#DA0463';
  document.querySelector('.a').style.color='#DA0463';
  document.querySelector('.s').style.color='#DA0463';
  document.querySelector('.j').style.color='#DA0463';
  document.querySelector('.k').style.color='#DA0463';
  document.querySelector('.d').style.color='#DA0463';
  audio.play();
});
