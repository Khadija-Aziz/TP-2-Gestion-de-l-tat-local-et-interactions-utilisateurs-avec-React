import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${compte}`;
  }, [compte]);

  return (
    <div>
      <p>Nombre de clics : {compte}</p>

      <button onClick={() => setCompte(compte + 1)}>
         Veuillez incrémenter ici
      </button>
    </div>
  );
}

export default CompteurEffet;