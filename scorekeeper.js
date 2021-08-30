var p1 = document.querySelector('#p1');
var p2 =document.querySelector('#p2');
var p3 = document.getElementById('p3');
var reset = document.getElementById('reset');
var s1 = document.getElementById('s1');
var s2 = document.querySelector('#s2');
var s3 = document.querySelector('#s3');
var h1 =document.querySelector('h1');
var input= document.querySelector('input');
var follow = document.querySelector('#follow');
var p1Score = 0;
var p2Score = 0;
var p3Score = 0;
var winningScore= 5;
var gameOver= false;
// p1.addEventListener('click', function(){
//   if(!gameOver){
//      p1Score++
//  if(p1Score===winningScore){
//    s1.classList.add('winner');
//    gameOver= true;
//  }
// };
//  s1.textContent = p1Score;
// });
//make something happen when player one is clicked
p1.addEventListener('click', function(){
  if(!gameOver){
    p1Score++
    if(p1Score===winningScore){
      h1.textContent=('player one won! , click reset to play again');
      s1.classList.add('s2color');
      gameOver= true;
    }
  }; 
  s1.textContent = p1Score;
});

//make something happen when player Two is clicked
p2.addEventListener('click', function(){
  if(!gameOver){
    p2Score++
    if(p2Score===winningScore){
      h1.textContent=('player Two won! , click reset to play again');
      s2.classList.add('s2color');
      gameOver= true;
    }
  }
  
  s2.textContent = p2Score;
});

p3.addEventListener('click', function(){
  if(!gameOver){
     p3Score++
     if( p3Score===winningScore){
       h1.textContent=('player Three won! , click reset to play again');
      s3.classList.add('s2color');
       gameOver=true;
     }
  }
 
  s3.textContent = p3Score;
});
input.addEventListener('click', function(){
  follow.textContent= input.value;
  winningScore=Number(input.value);
})
reset.addEventListener('click', function(){
  p1Score= 0;
  p2Score = 0;
  p3Score = 0;
  s1.textContent=0;
  s2.textContent=0;
  s3.textContent=0;
  s1.classList.remove('s2color');
  s2.classList.remove('s2color');
  s3.classList.remove('s2color');
  h1.textContent = ('keep your score accurate');
  input.value=0;

  gameOver=false;


})
// p1.addEventListener('click', function(){
//   if(!gameOver){
//      p1Score++
//  if(p1Score===winningScore){
//    s1.classList.add('winner');
//    gameOver= true;
//  }
// };
//  s1.textContent = p1Score;
// });
