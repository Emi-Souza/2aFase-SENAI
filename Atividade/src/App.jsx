import { useState } from 'react';
import './App.css';
import DiaSemana from './Atividades/DiaSemana';

function App() {
  const [semana, setSemana] = useState('');

  const verificarDiaSemana = () => {
    if (semana === '7') {
      alert('É um dia da semana!');
    } else if (semana > '7') {
      alert('Valor inválido! Deve ser entre 1 e 7.');
    } else if (semana < '1') {
      alert('Valor inválido! Deve ser entre 1 e 7.');
    }
  };

  return (
    <>
      <h1>Atividade</h1>
      <input
        type="text"
        value={semana}
        onChange={(event) => setSemana(event.target.value)}
      />
      <button onClick={verificarDiaSemana}>Verificar Semana</button>
      {semana && <DiaSemana />}
    </>
  );
}

export default App;

