
// function selectedPlayerList(selectButton,selectedPlayerNameTake){
//     document.getElementById(selectButton).addEventListener('click', function(){
//         const playerName= document.getElementById(selectedPlayerNameTake)
//         const playerNameInnerText= playerName.innerText
//         const selectedPlayerName =document.getElementById('selected-players-list')
//         const li =document.createElement('li')
//         const check = li.innerText= playerNameInnerText
//         //  li.innerText= playerNameInnerText
//         selectedPlayerName.appendChild(li)
//         const disableButton = document.getElementById(selectButton)
//         disableButton.disabled=true

//         if(check.length<5){
//            alert('you')
//         }
        
//     })
// }
// selectedPlayerList('dimaria-select','dimaria-name'),
// selectedPlayerList('vlahovic-select','vlahovic-name'),
// selectedPlayerList('bonucci-select','bonucci-name'),
// selectedPlayerList('zakaria-select','zakaria-name'),
// selectedPlayerList('bremer-select','bremer-name'),
// selectedPlayerList('locatelli-select','locatelli-name')



// function fivePlayerExpenses(selectButton){
//     document.getElementById(selectButton).addEventListener('click',function(){
//         const perPlayerPrice =document.getElementById('per-player-price')
//        const playerAmount = perPlayerPrice.innerText
//        const playerAmountInt =parseInt(playerAmount)
//        const playerExpenses = document.getElementById('player-expenses')
//        const allPlayerExpense =playerExpenses.innerText
//        const allPlayerEXpenseInt =parseInt(allPlayerExpense)
//        const totalAmount = playerAmountInt + allPlayerEXpenseInt
//        console.log(totalAmount)
//     }) 
// }
// fivePlayerExpenses('dimaria-select')
// fivePlayerExpenses('bremer-select')
// fivePlayerExpenses('bonucci-select')
// fivePlayerExpenses('locatelli-select')
// fivePlayerExpenses('zakaria-select')
// fivePlayerExpenses('vlahovic-select')

const fivePlayerListArray =[]

function addToSelectedFive(element){
    const playerName =element.parentNode.children[0].innerText
    fivePlayerListArray.push(playerName)
    const perPlayerPrice =document.getElementById('per-player-price').innerText
    document.getElementById('player-expenses').innerText= fivePlayerListArray.length * perPlayerPrice
    element.disabled=true
    
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


function totalCalulation(){
    document.getElementById
}