interface CharList {
  id: number;
  titre: string;
  nom: string;
  img: string;
  fam: string;
  onClick: (id: number) => void;
}

export const CharacterList: React.FC<CharList> = ({
  id,
  nom,
  img,
  onClick,
}) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img className="imgChars" src={img} alt={nom} />
      <div className="idChars">{id}</div>
      <div className="info">
        <h3>{nom}</h3>
      </div>
    </div>
  );
};

export default CharacterList;
