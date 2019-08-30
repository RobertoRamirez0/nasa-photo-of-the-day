import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Heading from './Heading';
import Footer from './Footer';
import Photo from "./Photo";

function App() {

  const [data, setData] = useState({});
  
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);
  
  return (
    <div className="App">
      <Heading />
      <Photo title={data.title} url={data.url} desc={data.explanation}/>
      <Footer />
    </div>
  );
}

export default App;
