
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







///////



////////

   })

}

//////////////end of selected-v section





document.getElementById('btn-perPlayerCalc').addEventListener('click',function(){


   const perPlayerCost=document.getElementById('perPlayer-field')
   const perPlayerCostString=perPlayerCost.value
   
   newPerPlayerCost=parseFloat(perPlayerCostString)
   //console.log(newPerPlayerCost)
//get per player field value.

const selPlayers=document.getElementById('selected-v')

const pist=document.createElement('li')

const lengthy=selPlayers.childNodes.length-1

const amountForTotalPlayer=lengthy*newPerPlayerCost
  
   //console.log(amountForTotalPlayer)

   //length tekhe length number nia perplayer er cost gun

   const playerCost=document.getElementById('perPlayer')

   const previousCostString=playerCost.innerText


   const previousCost=parseFloat(previousCostString)

   
   perPlayerCost.value=' '

   //get the cuurent player expense

   //console.log(previousCostString)

   const currentCost=amountForTotalPlayer

   //console.log(currentCost)

   playerCost.innerText=currentCost


//total player cost done

   
   })









