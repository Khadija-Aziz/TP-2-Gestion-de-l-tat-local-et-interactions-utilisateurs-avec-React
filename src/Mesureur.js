import { useState } from 'react';

function Mesureur() {
  const [compte, setCompte] = useState(0);

  function incrementer() {
    setCompte(compte + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {compte} fois.
      </p>
      <button onClick={incrementer}>Incrémenter ici</button>
    </div>
  );
}

export default Mesureur;
