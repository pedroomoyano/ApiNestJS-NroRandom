import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [key, setKey] = useState(0); // Este estado se usará para forzar el reinicio de la animación

  const fetchRandomNumber = async () => {
    const response = await fetch('http://localhost:3000/random-number', {
      method: 'POST',
    });
    const data = await response.json();
    setRandomNumber(data.value);

    // Cambia la clave para forzar la recreación del componente y reiniciar la animación
    setKey((prevKey) => prevKey + 1);
  };
    
  return (
    <div style={styles.container}>
      <h1>Numero Aleatorio</h1>
      <button onClick={fetchRandomNumber} style={styles.button}>
        Obtener numero aleatorio
      </button>
      {randomNumber !== null && (
        <div className={`number-display  ${key ? 'animate' : ''}`}>
          {randomNumber}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
export default App;
