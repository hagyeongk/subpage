import {bestItem,bestHover,bestMain,mainHover} from "./data.js"

const sectionOne=document.querySelector('.best_pro')
const sectionTwo=document.querySelector('.phone_sheet')

for(let i=0; i<bestItem.length;i++){

    let bestDiv=document.createElement('div')
    bestDiv.setAttribute('class','best_box')

    let bestImg=document.createElement('img')
    bestImg.setAttribute('src', bestItem[i].src)
    bestDiv.appendChild(bestImg)

    let bestNameDiv=document.createElement('span')
    let bestNameTxt=document.createTextNode(bestItem[i].name)
    bestNameDiv.appendChild(bestNameTxt)
    bestDiv.appendChild(bestNameDiv)

    let bestPrice=document.createElement('span')
    let bestPriceTxt=document.createTextNode(bestItem[i].price)
    bestPrice.appendChild(bestPriceTxt)
    bestDiv.appendChild(bestPrice)

    sectionOne.appendChild(bestDiv)

    bestImg.addEventListener('mouseover',function(){
        bestImg.src=bestHover[i].src
    })
    bestImg.addEventListener('mouseout', function(){
        bestImg.src=bestItem[i].src
    })
}

for(let i=0; i<bestMain.length; i++){

    let mainDiv=document.createElement('div')
    mainDiv.setAttribute('class','main_box')

    let mainImg=document.createElement('img')
    mainImg.setAttribute('src', bestMain[i].src)
    mainDiv.appendChild(mainImg)

    let mainNameDiv=document.createElement('span')
    let mainNameTxt=document.createTextNode(bestMain[i].name)
    mainNameDiv.appendChild(mainNameTxt)
    mainDiv.appendChild(mainNameDiv)

    let mainPrice=document.createElement('span')
    mainPrice=document.createTextNode(bestMain[i].price)
    mainDiv.appendChild(mainPrice)

    sectionTwo.appendChild(mainDiv)

    mainImg.addEventListener('mouseover',function(){
        mainImg.src=mainHover[i].src
    })

    mainImg.addEventListener('mouseout',function(){
        mainImg.src=bestMain[i].src
    })


}


