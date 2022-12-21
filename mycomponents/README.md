# Installation

    - Vous devez installer le projet en lançant la commande npm

## Description

    - Pour l'utiliser vous devez importer le composant et réagir avec lui

    - Pour que votre modal s'ouvre, vous devez ajouter la propriété "classNameModal" et lui attribuer la class que   vous voulez pour l'afficher.

    - Pour personnalisé le message de la modal avouter la propriété "message"
    - Pour utiliser la croix attribuer la propriété "close"
    - Pour donner une fonction à votre button, attribuer la propriété "open", et pour changer sa valeur utiliser la propriété buttonValue

### Exemple

```js
import React, { useState } from 'react'
import { Modals } from 'modal-component-wealth-health-p14-v2'

const data = []

function App() {
  const [displayModal, setDisplayModal] = useState(false)

  function saveForm() {
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    data.push(firstName, lastName)
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
  }

  function closeModal() {
    displayModal ? setDisplayModal(false) : setDisplayModal(true)
  }

  return (
    <form action="" onSubmit={saveForm}>
      <label htmlFor="email">email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" required />
      <Modals
        classNameModal={`${displayModal ? 'display-modal' : ''}`}
        close={closeModal}
        message={"you're login"}
      />
    </form>
  )
}

export default App
```
