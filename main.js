
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

//console.log(currentCost)
//total player cost done


   })


////////total player cost done//////////////////////////////

   document.getElementById('btn-total').addEventListener('click',function(){


//console.log('clicked')


const managerCost=document.getElementById('manager')


const managerCostString=managerCost.value

const managerCostAmount=parseFloat(managerCostString)

//console.log(managerCostAmount)

//console.log(managerCostAmount)

const coachCost=document.getElementById('coach')

const coachCoststring=coachCost.value

const coachcostAmount=parseFloat(coachCoststring)

managerCost.value=' '
coachCost.value=' '
//coach and manager cost done successfully

//console.log(coachcostAmount)

//it's turn of player total

////////player cost nia asa/////

const perPlayerCostAgain=document.getElementById('perPlayer')

//console.log('clicked')

const perPlayerCostAgainString=perPlayerCostAgain.innerText


   const setPlayerCost=parseFloat(perPlayerCostAgainString)


   //console.log(setPlayerCost)





//////player cost nia asa done successfully/////

// const a=setPlayerCost+coachcostAmount+managerCostAmount

// console.log(a)













   })




