import React,{useState,useEffect} from 'react';
import campaigns from "../../data/campaigns.json"
import {Nav,NavDropdown} from 'react-bootstrap'
function CampaignDropdownList(props) {
    const [campaignId,setCampaignId] = useState("0")
    const [campaignName,setCampaignName] = useState("All Campaigns")

    const handleSelect=(id)=>{
        setCampaignId(id)
        if(id === "0"){
            setCampaignName("All Campiagns")
        } else{
            let campName = campaigns.filter((campaign) => {
                return campaign.id === id
            })
            setCampaignName(campName[0].campaignName)
        }
        props.setSelectedCamp(id)
    }

    return (
        <Nav className="me-auto px-4">
            <NavDropdown title={campaignName} id="basic-nav-dropdown" onSelect={handleSelect}>
                <NavDropdown.Item eventKey="0" key="0" >All Campaigns</NavDropdown.Item>
                {
                    campaigns.map((campaign) => {
                        return <NavDropdown.Item eventKey={campaign.id} key={campaign.id} >{campaign.campaignName}</NavDropdown.Item>
                    })
                }
            </NavDropdown>           
        </Nav>
       
    )
}

export default CampaignDropdownList
