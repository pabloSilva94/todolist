import './App.css';

import { GridFacil } from './components/GridFacil';
import { GridMedio } from './components/GridMedio';
import { GridDificil } from './components/GridDificil';
import { cardsFacil } from './data/cardsFacil'
import { cardsMedio } from './data/cardsMedio'
import { useState } from 'react';
import { cardsDificil } from './data/cardsDificil';


function App() {
  const [opions, setOptions] = useState(false)
  const [facil, setFacil] = useState(false)
  const [medio, setMedio] = useState(false)
  const [dificil, setDificil] = useState(false)
  const [bichos, setBichos] = useState(cardsDificil)

  return (
    <>
      {!opions && <div className='menu'>
        <h1>Jogo da Memoria dos animais </h1>
        <p>Selecione a dificuldade</p>
        <div className='menu-difuldades'>
          <button onClick={() => setOptions(true) & setFacil(true)} >Facil</button>
          &nbsp;
          &nbsp;
          <button onClick={() => setOptions(true) & setMedio(true)}>Medio</button>
          &nbsp;
          &nbsp;
          <button onClick={() => setOptions(true) & setDificil(true)}>Dificil</button>
        </div>
      </div>}

      <div className="App">
        {facil &&
          <>
            <button className='btn-home' onClick={() => setOptions(false) & setFacil(false)}>🏚️</button>
            <GridFacil cards={cardsFacil} />
          </>
        }
        {medio &&
          <>
            <button className='btn-home' onClick={() => setOptions(false) & setMedio(false)}>🏚️</button>
            <GridMedio cards={cardsMedio} />
          </>
        }
        {dificil &&
          <>
            <button className='btn-home' onClick={() => setOptions(false) & setDificil(false)}>🏚️</button>
            <GridDificil cards={cardsDificil} />
          </>
        }
      </div >
      <div className='slide'>
        <div className='s1'>
          {bichos.map((e) => {
            if (e.id === '1') {
              return e.sort(() => Math.random() + 1)
            }
          })}
        </div>

      </div>
    </>
  );
}

export default App;
