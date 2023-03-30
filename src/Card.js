import React from "react";

export const Card = (item) => {
    
  return (
    
    <div className="cards" key={item.id}>
      <p className="question">
        {item.id}. {item.question}
      </p>
      <div className="options">
        <p>a: {item.a}</p>
        <p>b: {item.b}</p>
        <p>c: {item.c}</p>
        <p>d: {item.d}</p>
      </div>

      <p className="ans"> Correct ans is: <span className="correct-option">{item.ans}</span> </p>
    </div>
   
  );
};

