/*
-Componente de clase exportarlo e importarlo en el app.js y mostrarlo en pantalla
-Pasar un property de app
-Class component property componentes
*/

/*Function component*/

import React from 'react';

function Welcome(props){
    return(
         <h1>Hola {props.username}!</h1>
    )
}

export default Welcome