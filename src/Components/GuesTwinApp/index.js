import React, { useEffect, useState } from "react"
import Cards from './Cards.json'
import CreateCard from "../createCard"


function GuesTwinApp (props){
const [cards,setCards] = useState(Cards.sort(() => Math.random() - 0.5))
const [openedCards,setOpen] = useState([])
useEffect(()=>{
    restart()
},[])

useEffect(()=>{
    let isGameEnded = cards.find(item=>item.clickable == true);
    if(!isGameEnded){
        props.winGame()
    }
})

function restart(){
    setOpen([]);
    setCards(Cards.sort(() => Math.random() - 0.5).map(item=>{
        item.clickable =true;
        item.opened=false;
        return item;
    }))
}


function show(name,value){
    if(openedCards.length%2==0){
        setCards(cards.map(card=>{
            if(card.value == value){
                card.opened = true;
            }
            return card;
        }))
        setOpen([
            {
                name:name,
                value:value,
            }
        ])   
    }

    if(openedCards.length%2){
        let length = openedCards.length;
        if(openedCards[length-1].name == name && openedCards[length-1].value != value){
            setOpen([...openedCards,{
                name:name,
                value:value,
            }]);
            setCards(cards.map(card=>{
                if(card.name == name){
                    card.opened = true;
                    card.clickable =false;
                }
                return card;
            }))
        }
        else if(openedCards[length-1].name != name){
            setCards(cards.map(card=>{
                if(card.value == value){
                    card.opened = true;
                }
                return card;
            }))
            setTimeout(()=>{
                hide(openedCards[length-1].name,value)
            },1000)
        }
    }
}

function hide(name,value){
    setCards(cards.map(card=>{
        if(card.value == value || card.name == name){
            card.opened = false;
        }
        return card;
    }))
    setOpen(openedCards.filter(item=>item.name != name))

}

    return (
        <div className="gamePage">
        <div className="Cards">
            {
                cards.map(item=>{
                    return <CreateCard
                            key={item.value} 
                            value={item.value} 
                            name={item.name}
                            clickable={item.clickable}
                            show ={show}
                            opened={item.opened}
                            />
                })
            }
        </div>
        </div>
    )
}
export default GuesTwinApp;
