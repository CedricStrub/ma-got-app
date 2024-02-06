interface Characters {
  id: number;
  titre: string;
  nom: string;
  img: string;
  fam: string;
}

const CharacterDetail: React.FC<{ character: Characters }> = ({
  character,
}) => {
  return (
    <div className="cardTop">
      <div className="left">
        <img src={character.img} alt={character.nom} />
      </div>
      <div className="right">
        <h2>{character.nom}</h2>
        <p>----------------------</p>
        <h2>{character.fam}</h2>
        <h3>{character.titre}</h3>
      </div>
    </div>
  );
};

export default CharacterDetail;
