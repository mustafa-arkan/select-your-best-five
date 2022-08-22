
const selectButtons=document.getElementsByClassName('btn-select')



for(let i=0;i<selectButtons.length;i++){

   selectButtons[i].addEventListener('click',function(){
    

const nameOfPlayer=document.getElementsByClassName('players')



const playerNameValue=nameOfPlayer[i].innerText


selectButtons[i].disabled=true
selectButtons[i].backgroundColor='black'

////////////
const selectedPlayers=document.getElementById('selected-v')

const playerList=document.createElement('li')

const limit=selectedPlayers.childNodes.length

playerList.innerHTML=playerNameValue

if(limit >=0 && limit <=5){

selectedPlayers.appendChild(playerList)

}

else{
alert('You have selected more than five players')
selectButtons[i].disabled=false

selectButtons[i].style.backgroundColor=' '

}


   })

}













