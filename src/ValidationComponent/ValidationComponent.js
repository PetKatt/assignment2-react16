import React from 'react';

let warning = "";

const validationComponent = (props) => {
	if (props.textLength >= 5) {
				warning = "Text long enough!"
			} else {
				warning = "Text too short!"
			}

	return (
    <div>{warning}</div>
  ); 
};


export default validationComponent;
