import React from 'react'
import { Navbar,Nav,NavDropdown, NavItem, NavLink, Container, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faAngleLeft,faAngleRight,faCalendar } from '@fortawesome/fontawesome-free-solid'
import CampaignDropdownList from "./CampaignDropdownList"
import StatusDropdownList from "./StatusDropdownList"
function appHeader(props) {
    return (
        <Container>
            <Navbar bg="light" variant="light" expand="md" sticky="top" className="py-4">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <CampaignDropdownList setSelectedCamp = {props.getSelectedCampaign}/>
                                    <StatusDropdownList setSelectedStat = {props.getSelectedStatus}/>
                                    <Nav className="ms-auto navbar-nav">
                                        <NavItem>
                                            <FontAwesomeIcon icon={faSearch} className="mx-3" style={{transform:"scale(1.5,1.5)"}}></FontAwesomeIcon>
                                        </NavItem>
                                        <NavItem>
                                            <FontAwesomeIcon icon={faAngleLeft} className="mx-3" style={{ color:"red"}}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faCalendar} className="mx-3" style={{ color:"red"}}></FontAwesomeIcon>
                                            <span className="mx-3" style={{ color:"red"}}>Today, Jan 10th</span>
                                            <FontAwesomeIcon className="mx-3" icon={faAngleRight} style={{ color:"red"}}></FontAwesomeIcon>

                                            <span className="mx-3" style={{width:"40px",height:"30px",backgroundColor:"red",textAlign:"center",borderRadius:"10px",display:"inline-block"}}>
                                                    1d
                                            </span>
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                          
        </Container>
    )
}

export default appHeader

