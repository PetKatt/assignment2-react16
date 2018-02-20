import React from 'react';

import "./CharComponent.css";

const charComponent = (props) => {
    return (
      <div className="Char">  
        <p onClick={props.click}> {props.children}{props.letter} </p>
      </div>
    );
};

export default charComponent;
