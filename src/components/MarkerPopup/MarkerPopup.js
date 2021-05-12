import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name, properties } = props.data;

  // console.log(name);

  return (
    <Popup>
      <div className='poup-text'>
        <p>{name}</p>
        {properties.time && <p>{properties.time}</p>}
        {properties.phone && <p>{properties.phone}</p>}
        {properties.photo && <img src={properties.photo} alt='Placeholder' />}
      </div>
    </Popup>
  );
};

export default MarkerPopup;
