import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import imagenClic from './imagenes/imgClic.png';

function App() {

const manejarClic = () =>{
  console.log("Clic");
}

const reiniciarContador = () => {
  console.log("reinicar");
}

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
        <Contador numClics= '5' />

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
