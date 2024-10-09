"use client";

import { use, useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
export function LikedCard() {
  const [input, setinput] = useState("");
  const [show, setshow] = useState(false);
  const [nome, setnome] = useState("");
  function handleShow() {
    setshow(!show);
    setinput("");
    setnome(input);
  }
  return (
    <div className="w-full bg-gray-800 flex flex-col rounded-lg p-4 h-44 justify-between">
      {show ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md p-2 h-8"
            type="text"
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
          <button onClick={handleShow}>
            <FiX size={22} color="white" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 transition-all duration-200"
          onClick={handleShow}
        >
          <FiEdit />
        </button>
      )}
      {nome && (
        <div className="flex flex-col">
          <span className="text-white font-bold"> jogo favorito: </span>
          <p className="text-white">{nome}</p>
        </div>
      )}

      {!nome && <p className="text-white font-bold">Adicionar jogo</p>}
    </div>
  );
}
