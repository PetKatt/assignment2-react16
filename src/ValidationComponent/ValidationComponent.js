import React from 'react';

const validationComponent = (props) => {
	let warning = "";
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
