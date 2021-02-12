import React, {useState} from 'react'
import {Nav,NavDropdown} from 'react-bootstrap'

function StatusDropdownList(props) {
    const [stat,setStat] =  useState("Pending");
    const status = [
        "pending",
        "saved",
        "active",
        "paused",
        "expired",
        "terminated",
        "declined"
    ] 

    const handleSelect=(id)=>{
        let currStat = status[id]
        setStat(currStat)  
        props.setSelectedStat(currStat)    
    }

    return (
        <Nav>
            <NavDropdown title={stat} id="basic-nav-dropdown" onSelect={handleSelect}>
                    {
                    status.map((item,index) => {
                        return <NavDropdown.Item eventKey={index} key={index} >{item}</NavDropdown.Item>
                    })
                }
            </NavDropdown>
        </Nav>
    )
}

export default StatusDropdownList
