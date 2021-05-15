import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {
  const {
    state: { buyer, orders },
  } = useContext(AppContext);

  // console.log(buyer[0].address);
  const location = useGoogleAddress();

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en unos dias</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;
