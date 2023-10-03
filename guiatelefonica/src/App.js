import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [showAll] = useState(true);
  const [newTlf, setNewTlf] = useState(""); // Paso 3 - Añadir números al listín
  const [newFilter, setNewFilter] = useState(""); // Paso 4 - Añadir filtro

  // Controlador de eventos de nombres

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Controlador de eventos del tlf

  const handleTlfChange = (event) => {
    setNewTlf(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  // Guardamos los nombres y tlf en la lista

  const addPerson = (event) => {
    event.preventDefault(); // Evitamos que se envíe el formulario
    console.log("Formulario enviado", event.target);

    // Completamos la función para añadir los nombres
    const personObject = {
      name: newName,
      tlf: newTlf,
      id: persons.length + 1,
    };

    // Paso 2

    // Evita que el usuario pueda agregar nombres que ya existen en el directorio telefónico.

    // Controlamos la entrada de datos
    if (personObject.name === "" || personObject.tlf === "") {
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
    // End Paso 2

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewTlf("");
  };

  // Paso 4 - Filtro para buscar por nombre

  const personsToShow = newFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(newFilter))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter by name
        <input type="text" value={newFilter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <h2>Add a new</h2>
        <div>
          Name:
          <input type="text" value={newName} onChange={handleNameChange} />
          <br></br>
          <br></br>
          Number:
          <input type="number" value={newTlf} onChange={handleTlfChange} />
        </div>
        <div>
          <br></br>
          <button type="submit" onClick={addPerson}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            Nombre: {person.name}
            <br></br>
            Número: {person.tlf}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
