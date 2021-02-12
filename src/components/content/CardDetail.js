import React from 'react'
import {Card,Button} from 'react-bootstrap'
import sampleimage from "../../assets/images/sample.jpg"
import { faMoneyCheck, faUserFriends, faEye } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardDetail(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src= {sampleimage} />
            <Card.Body>
                <Card.Title>{props.card.cardTitle}</Card.Title>
                <Card.Text>{props.card.cardDescription}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="row">
                    <div className="col">
                        <FontAwesomeIcon  className="me-3" icon={faMoneyCheck} style={{color:'gray'}}/>
                        <span style={{color:'grey', fontSize:"12px"}}>{props.card.listOfPlans[0].price.currencySymbol + ` ` + props.card.listOfPlans[0].price.amount}</span>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon className="mx-3" icon={faUserFriends} style={{color:'gray'}}/>
                        <span style={{color:'grey', fontSize:"12px"}}>{props.card.shares}</span>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon className="mx-3" icon={faEye} style={{color:'gray'}}/>
                        <span style={{color:'grey', fontSize:"12px"}}>{props.card.views}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
        </div>
    )
}

export default CardDetail
