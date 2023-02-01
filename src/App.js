import logo from './logo.svg';
import './App.css';
import Personaje from './componentes/Personajes'

function App() {
  return (
    <div className="App">
      
      <h1>Personajes de la serie Bojack Horseman</h1>

      <div id="global" className='contenedor-con-scroll'>
      <div className='contenedor-principal'>

<Personaje 
nombre='Bojack Horseman'
cargo='Actor de Hollywoo'
texto="Back in the '90s
I was in a very famous TV show
I'm BoJack the horse (BoJack)
BoJack the horse
Don't act like you don't know
And I'm trying to hold on to my past
It's been so long
I don't think I'm gonna last
I guess I'll just try
And make you understand
That I'm more horse than a ma
Or I'm more man than a horse
BoJack"
imagen='bojack'
/>

<Personaje 
nombre='Diane'
cargo='Escritora de libros'
texto="back in the ninety's i was in a very famous tiiiivi shooow tururur"
imagen='diane'
/>

<Personaje 
nombre='Princess Carolyn'
cargo='Agente/ manager'
texto="back in the ninety's i was in a very famous tiiiivi shooow tururur"
imagen='princess'
/>

<Personaje 
nombre='Todd Chavez'
cargo='Generador de ideas'
texto="back in the ninety's i was in a very famous tiiiivi shooow tururur"
imagen='todd'
/>

<Personaje 
nombre='Mr. Peanutbutter'
cargo='Actor de Hollywoo x2'
texto="back in the ninety's i was in a very famous tiiiivi shooow tururur"
imagen='mr'
/>
</div>
      </div>

      

      
        
    </div>
  );
}

export default App;
