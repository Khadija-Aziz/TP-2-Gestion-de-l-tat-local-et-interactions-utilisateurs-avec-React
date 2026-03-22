import { useState } from 'react';

function Formulaire() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  function handleChangeNom(event) {
    setNom(event.target.value);
  }

  function handleChangePrenom(event) {
    setPrenom(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeTelephone(event) {
    setTelephone(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Nom : ${nom} \nPrénom : ${prenom} \nEmail : ${email} \nTéléphone : ${telephone}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChangeNom} />
      </label>

      <br />

      <label>
        Prénom :
        <input type="text" value={prenom} onChange={handleChangePrenom} />
      </label>

      <br />

      <label>
        Email :
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>

      <br />

      <label>
        Téléphone :
        <input
          type="tel"
          value={telephone}
          onChange={handleChangeTelephone}
        />
      </label>

      <br />

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default Formulaire;