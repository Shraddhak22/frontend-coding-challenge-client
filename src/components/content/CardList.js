import React, {useState,useEffect} from 'react'
import CardDetail from "./CardDetail"
import uuid from 'react-uuid'

const CardList = (props) => {
    const [cardsData, setcardsData] = useState(props.cards);
    useEffect(() => {
        setcardsData(props.cards);
    }, [props]);

    return (
        <div className="container py-5">
            <div className="row">
                {cardsData.map((card) =>{
                    return <CardDetail key={uuid()} card={card}/>
                })}
            </div>
        </div>
    )
}

export default CardList
