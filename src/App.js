import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import imagenClic from './imagenes/imgClic.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

const manejarClic = () =>{
  setNumClics(numClics + 1);
};

const reiniciarContador = () => {
  setNumClics(0);
};

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='img-logo'
          src={imagenClic}
          alt='logo de la pagina'
        />
      </div>
      <div className='contenedor-principàl'>
        <Contador numClics= {numClics} />

        <Boton
        texto= 'Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto= 'Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
