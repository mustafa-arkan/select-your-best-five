
const allButtons=document.getElementsByClassName('btn-select')



for(let i=0;i<allButtons.length;i++){

   allButtons[i].addEventListener('click',function(){
    

const playerName=document.getElementsByClassName('player-name')



const playerNameValue=playerName[i].innerText


allButtons[i].disabled=true
allButtons[i].backgroundColor='gray'

///////
const selectedPlayers=document.getElementById('selected-players')

const playerList=document.createElement('li')

const listLimit=selectedPlayers.childNodes.length

playerList.innerHTML=playerNameValue

if(listLimit >=0 && listLimit <=5){

selectedPlayers.appendChild(playerList)

}

else{
alert('You have selected more than five players')
allButtons[i].disabled=false

allButtons[i].style.backgroundColor=' '

}












   })

}













