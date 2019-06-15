/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,activePlayer,roundScore,gamePlaying;
var diceDom=document.querySelector('.dice');
	diceDom.style.display='none';

init();

function init(){
	score=[0,0];
	activePlayer=0;
	roundScore=0;
	gamePlaying=true;

	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
}


document.querySelector('.btn-roll').addEventListener('click',function(){
     if(gamePlaying){
     	var dice=Math.floor(Math.random()*6)+1;

	     diceDom.src='dice-'+dice+'.png';
	     diceDom.style.display='block';

	     if(dice!==1)
	     {
	     	roundScore+=dice;
	     	document.querySelector('#current-'+activePlayer).textContent=roundScore;
	     }
	     else
	     {
	         nextPlayer();
	     }
     }
     

});


document.querySelector('.btn-hold').addEventListener('click',nextPlayer);

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
	if(gamePlaying){
		score[activePlayer]+=roundScore;
		document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
		if(score[activePlayer]>=20)
		{
			document.querySelector('#name-'+activePlayer).textContent='Winner!';
			diceDom.style.display='none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			gamePlaying=false;
			document.getElementById('current-'+activePlayer).textContent='0';
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		}
		else{
			
			
			activePlayer===0? activePlayer=1 :activePlayer=0;
			diceDom.style.display='none';

			roundScore=0;
			document.getElementById('current-0').textContent='0';
			document.getElementById('current-1').textContent='0';
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
		}
	}
	
	
}

