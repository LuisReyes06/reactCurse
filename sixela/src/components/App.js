import './App.css';
import Welcome from '.component/FirstComponent';
import Saludos from '.component/SecondComponent';

function App() {
  return (
    <div className="App">

      <h1>

        Hola Mundo

      </h1>

      <Welcome username = "Luis"/>

      <Saludos name = "Ariel"/>

    </div>
  );
}

export default App;
