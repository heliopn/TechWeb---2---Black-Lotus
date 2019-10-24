import React, { useState, useEffect, Component } from 'react';
import './App.css';
import api from "./services/api.js";
import { log } from 'util';



function Home() {

  const defaultName = "";
  const getCardSearch = useState(null);
  const [cardsUrl, setCardsUrl] = useState(null);
  const [allCardsUrl, setAllCardsUrl] = useState(null);
  const [boosterUrl, setBoosterUrl] = useState(null);
  const [name, setName] = useState(null);
  const [edition, setEdition] = useState(null);
  const [all, setAll] = useState(null);


  useEffect(() => {
    const getCardSearch = async () => {
      console.log("Entrou no getSearchCard");
      await api
        .get(`/api/cardsearch`, {
          params: {
            name
          }
        })
        .then(cards => {
          console.log(cards.json());
          setCardsUrl(cards.json())
          return cards.json();
        }).then( data =>{
          let FromAPI = data.map(card =>{
            showListOfImages(card.imageUrl);
            console.log(card);
            return{cardUsl:card.imageUrl}
          });
          })
        .catch(e => {
          return e;
        });

    };
    const getAllCards = async () => {
      console.log("Entrou no getAllCards");
      await api
        .get(`/api/allcards`, {
          params: {
          }
        })
        .then(cards => {
          console.log(cards.json());
          setAllCardsUrl(cards.json())
          return cards.json();
        }).then( data =>{
          let FromAPI = data.map(card =>{
            showListOfImages(card.imageUrl);
            console.log(card);
            return{cardUsl:card.imageUrl}
          });
          })
        .catch(e => {
          return e;
        });

    };
    const getBooster = async () => {
      console.log("Entrou no getBooster");
      await api
        .get(`/api/booster`, {
          params: {
            edition
          }
        })
        .then(cards => {
          console.log(cards.json());
          setBoosterUrl(cards.json())
          return cards.json();
        }).then( data =>{
          let FromAPI = data.map(card =>{
            showListOfImages(card.imageUrl);
            console.log(card);
            return{cardUsl:card.imageUrl}
          });
          })
        .catch(e => {
          return e;
        });

    };
    if (name!==null) {
      getCardSearch();
    }
    if (edition!==null) {
      getCardSearch();
    }
    if (all!==null){
      getAllCards();
    }},[edition],[all],[name]);



  // callApi = async () => {
  //   const response = await fetch('/api/message');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   console.log(body);

  //   return body;
  // };

  // allCards = async () => {
  //   const response = await fetch('/api/allcards');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   body.forEach(this.showListOfImages);
  //   return body;
  // };

  const handleSearchChange = e => {
    console.log(e.target.value);
    setName(e.target.value)
  }
  // value={this.name} onSubmit={handleSearchChange}onInput={this.handleSearchChange}onSubmit={useEffect}
  return (
    <div className="grid-container">
      <div>
          <h2>Buscar Cartas</h2>
          <input type="search" name="searchCard" onInput={handleSearchChange}></input>
          <button onClick={getCardSearch()}>OK</button>
      </div>
      <div>
        <h2>Novo Deck</h2>
      </div>
      <div>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463975&type=card" alt="Settle" />
      </div>
      <div>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463975&type=card" alt="Settle" />
      </div>
    </div>
  );


  function showListOfImages(item, indice) {
    console.log(item.imageUrl)
    return (
      <div className="grid-container">
        <img src={item.imageUrl} alt={"Card " + toString(indice)} />
      </div>
    )
  };
}

export default Home;