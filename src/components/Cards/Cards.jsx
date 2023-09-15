import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleAddCourseName}) => {
    const [cardData,setCardData]=useState([])
    useEffect(()=>{

        const fetchData=async()=>{
            const res =await  fetch('card.json')
            const  data =await res.json();
            setCardData(data)
        }
        fetchData();
    },[])
    // console.log(cardData)
    return (
        <div className="w-3/4 border-red-200 border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                cardData.map((card) => <Card key={card.id} card={card} handleAddCourseName={handleAddCourseName}></Card>)
            }
        </div>
    );
};
Cards.propTypes ={
    handleAddCourseName:PropTypes.func
}

export default Cards;