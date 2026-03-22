import { useState } from 'react';

function AffichageDynamique() {
  const [compteur, setCompteur] = useState(0);

  function handleClick() {
    setCompteur(compteur + 1);
  }

  function getMessage() {
    const textes = [
      "Cliquez sur le bouton",
      "Premier clic",
      "Deuxième clic",
      "Troisième clic"
      
    ];

    return textes[compteur] || `${compteur}ème clic`;
  }

  return (
    <div>
      <p>{getMessage()}</p>
      <button onClick={handleClick}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;