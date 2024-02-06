import './App.css';
import React, { useState } from 'react';
import { Title } from './components/Title/Title';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import CharacterList from './components/CharactersList/CharactersList';
import AddCharacter from './components/AddCharacter/AddCharacter';
import { characters as initialCharacters } from './assets/charactersData';

const App = () => {
  const [selectedCharId, setSelectedCharId] = useState<number | null>(null);
  const [characters, setCharacters] = useState(initialCharacters);
  const selectedCharacter = characters.find(
    (char) => char.id === selectedCharId,
  );

  const handleAddCharacter = (character: {
    titre: string;
    nom: string;
    img: string;
    fam: string;
  }) => {
    const newCharacter = {
      id: characters.length + 1,
      ...character,
    };
    setCharacters([...characters, newCharacter]);
  };

  return (
    <>
      <Title title="Ma GoT App" subtitle="liste des personnages" />
      <AddCharacter onAdd={handleAddCharacter} />
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      <div className="cardContainer">
        {characters.map((char) => (
          <CharacterList
            key={char.id}
            {...char}
            onClick={() => setSelectedCharId(char.id)}
          />
        ))}
      </div>
    </>
  );
};

export default App;
