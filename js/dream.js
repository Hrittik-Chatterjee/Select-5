

const fivePlayerListArray =[]

function addToSelectedFive(element){
    const playerName =element.parentNode.children[0].innerText
    fivePlayerListArray.push(playerName)
    const perPlayerPrice =document.getElementById('per-player-price').innerText
    document.getElementById('player-expenses').innerText= fivePlayerListArray.length * perPlayerPrice
    element.disabled=true
    if(fivePlayerListArray.length>5){
        alert('you can only select 5 players')
    }   
}


function selectedPlayerList(selectButton,selectedPlayerNameTake){
    document.getElementById(selectButton).addEventListener('click', function(){
        const playerName= document.getElementById(selectedPlayerNameTake)
        const playerNameInnerText= playerName.innerText
        const selectedPlayerName =document.getElementById('selected-players-list')
        const li =document.createElement('li')
        li.innerText= playerNameInnerText
        selectedPlayerName.appendChild(li)
        const disableButton = document.getElementById(selectButton)
        disableButton.disabled=true
        
    })
}
selectedPlayerList('dimaria-select','dimaria-name'),
selectedPlayerList('vlahovic-select','vlahovic-name'),
selectedPlayerList('bonucci-select','bonucci-name'),
selectedPlayerList('zakaria-select','zakaria-name'),
selectedPlayerList('bremer-select','bremer-name'),
selectedPlayerList('locatelli-select','locatelli-name')


document.getElementById("calculate-total-button").addEventListener('click',function(){
    const coachInt=document.getElementById('coach-price').innerText
    const coach =parseInt(coachInt)
    const managerInt=document.getElementById('manager-price').innerText
    const manager=parseInt(managerInt)
    const playerInt =document.getElementById('player-expenses').innerText
    const player=parseInt(playerInt)

    document.getElementById('sub-total-amount').innerText=  coach + manager +player

})