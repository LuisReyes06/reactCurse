import axios from 'axios';
import React, { useEffect, useState } from 'react';
/*import {ListGroup} from 'react-bootstrap';*/

function ValorDolar(props){
    const [valores, setValores] = useState([]);
  
    useEffect(() => {
      axios.get("https://mindicador.cl/api/dolar")
      .then(res => {
          const data = res.data;
          setValores(data.serie);
      });
    }, []);
  
    return (
    //<ListGroup>
    <div>

        {valores.map((v) => <p><b>Valor: {v.valor}</b></p>)}
        
    </div>
    //</ListGroup>
    );
  }

  export default ValorDolar;