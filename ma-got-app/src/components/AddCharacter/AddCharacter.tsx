// AddCharacterForm.tsx
import React, { useState } from 'react';

interface AddCharacterFormProps {
  onAdd: (character: {
    titre: string;
    nom: string;
    img: string;
    fam: string;
  }) => void;
}

const AddCharacterForm: React.FC<AddCharacterFormProps> = ({ onAdd }) => {
  const [titre, setTitre] = useState('');
  const [nom, setNom] = useState('');
  const [img, setImg] = useState('');
  const [fam, setFam] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ titre, nom, img, fam });
    // Reset form
    setTitre('');
    setNom('');
    setImg('');
    setFam('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Family"
        value={fam}
        onChange={(e) => setFam(e.target.value)}
      />
      <button type="submit">Add Character</button>
    </form>
  );
};

export default AddCharacterForm;
