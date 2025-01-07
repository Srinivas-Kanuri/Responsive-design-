let score = JSON.parse(localStorage.getItem('score')) || {wins : 0 , Losses : 0, Ties : 0 };
    
upadateScore();
 
   
function playGame(playerMove)
{

  const computerMove = picComputerMove();
  let result ='';
  if(playerMove === 'Scissors')
  {
    if(computerMove === 'Rock'){
    result = 'You Lose';
    } else if( computerMove === 'Paper'){
    result='You Win';
    }else if( computerMove === 'Scissors'){
    result = 'Tie';
    }
   
  }

   else if(playerMove === 'Paper')
  {
    if(computerMove === 'Rock'){
    result = 'You Win';
    } else if( computerMove === 'Paper'){
    result='Tie';
    }else if( computerMove === 'Scissors'){
    result = 'You Lose';
    }
   
  }

  else if( playerMove === 'Rock') 
  {
    if(computerMove === 'Rock'){
    result = 'Tie';
    } else if( computerMove === 'Paper'){
    result='You Lose';
    }else if( computerMove === 'Scissors'){
    result = 'You Win';
    }
  }
    if  (result ==='You Win') {
    score.wins +=1;
  }else if(result === 'You Lose'){
    score.Losses +=1;
  } else if(result === 'Tie'){
    score.Ties +=1;
  }

  localStorage.setItem('score',JSON.stringify(score))

 upadateScore();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-Moves').innerHTML = `You <img class="move-icon"  src="${playerMove}-emoji.png" ><img class="move-icon" src="${computerMove}-emoji.png">computer`;
 
}
function upadateScore() {
document.querySelector('.js-score').
innerHTML = `Wins:${score.wins},Losses:${score.Losses},Tie:${score.Ties}`;
}

  
function picComputerMove()
{
 let computerMove= '';
 const randomNumber = Math.random();

  if (randomNumber >=0 && randomNumber < 1/3) {
  computerMove='Rock'; 
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove ='Paper';
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove ='Scissors';
  }
  console.log(computerMove);
  
  return computerMove;

 }