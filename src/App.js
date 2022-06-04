import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components"
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherinfoComponent"

const API_KEY ="fe4feefa8543e06d4f3c66d92c61b69c";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
width: 380px;
padding: 20px 10px;
margin: auto;
border-radius: 4px;
box-shadow: 0 3px 6px 0 #555;
background: white;
font-family: Montserrat;
`;

const AppLabel = styled.span`
color: #black;
font-size: 18px;
font-weight: bold;
`;


function App() {
     const [city, updateCity] = useState();
     const [weather, updateWeather] = useState();

     const fetchWeather = async (e) => {
         e.preventDefault(); 
     const response = 
     await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
     updateWeather(response.data)
    };
  return (
    <Container>
        <AppLabel> Weather App</AppLabel>
     {weather? (
     <WeatherComponent weather={weather}/>
     ) : (<CityComponent updateCity={updateCity}
      fetchWeather={fetchWeather} />
      )}
    </Container>

  );
}

export default App;
