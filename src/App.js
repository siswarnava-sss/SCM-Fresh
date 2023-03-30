import React, { useEffect } from "react";
import { useState } from 'react';
import { Card } from "./Card";
import "./index.css";

function App() {
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);

    const response = await fetch("https://retoolapi.dev/0yJLnj/data");
    const data = await response.json();
  
    if (data)setData(data);
    console.log(data);
    setLoading(false);
  }
  

  useEffect(() => {
    fetchAPIData();
  },[]);

  return (

    <>
    <h1 className="heading">Answers To The Questions</h1>

    <div className="container" key="container">
    
    { loading ? "Loading..." : ( data && data.map((item) =>
    
    (
      
        <Card {...item}/>
      
    )

 ))}
    </div>
     
     

   
      
    </>
  );
  
  
}


export default App;
