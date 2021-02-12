import React,{useState,useEffect} from 'react'
import AppHeader from "./components/header/AppHeader";
import axios from "axios"
import './App.css'; 
import CardList from "./components/content/CardList"

function App() {
  const [initialCards,setIntialCards] = useState([])
  const [cards,setCards] = useState(initialCards)
  //const [selectedCampaign, setSelectedCampaign] = useState("0")
 // const [selectedStatus, setSelectedStatus] = useState("")

  const getAllCards = () => {
      axios.get("/getCards").then(function(response) {
        setIntialCards(response.data)
        setCards(response.data)
      })
  }

  const updateSelectedCampaign = (id) => {
    //setSelectedCampaign(id)
    if(id !== "0"){
      setCards(initialCards.filter((card) => {
          return card.campaignId === id
      }))
    } else{
      setCards(initialCards)
    }
  }

  const updateSelectedStatus = (stat) =>{
    debugger;
    if(stat !== ""){
      setCards(initialCards.filter((card) => {
          return card.currentWorkflow === stat
      }))
    } else{
      setCards(initialCards)
    }
  }
  

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
        <AppHeader getSelectedCampaign={updateSelectedCampaign} getSelectedStatus={updateSelectedStatus}/>
        <CardList cards={cards} />
    </div>
  );
}

export default App;
