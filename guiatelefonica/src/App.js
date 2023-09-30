import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [showAll] = useState(true);

  // Guardamos los nombres en la lista

  const addPerson = (event) => {
    event.preventDefault(); // Evitamos que se envíe el formulario
    console.log("Formulario enviado", event.target);

    // Completamos la función para añadir los nombres
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    // Controlamos la entrada de datos
    if (personObject.name === "") {
      return false;
    }

    // Controlo que no exista en la lista

    const template = `${newName} is already added to phonebook`;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        alert(template);
        return false;
      }
    }

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  // Operador condicional
  const personsToShow = showAll
    ? persons
    : persons.filter((persons) => persons.name === true);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
