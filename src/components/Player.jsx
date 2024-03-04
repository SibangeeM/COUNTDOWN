import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredplayerName, setEnteredPlayerName] = useState(null);
  // const [submit, setSubmit] = useState(false);

  // const handleOnchange = (e) => {
  //   setPlayerName(e.target.value);
  // };
  const handleOnClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ? enteredplayerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
