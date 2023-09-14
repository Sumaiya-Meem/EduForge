import { useState } from "react";
import { useEffect } from "react";

const Card = () => {
    const [cardData,setCardData]=useState([])
    useEffect(()=>{

        const fetchData=async()=>{
            const res =await  fetch('card.json')
            const  data =await res.json();
            setCardData(data)
        }
        fetchData();
    },[])
    console.log(cardData)
    return (
        <div>
            
        </div>
    );
};

export default Card;