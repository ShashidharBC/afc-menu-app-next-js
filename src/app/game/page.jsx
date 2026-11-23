"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, RotateCcw } from "lucide-react";

const CARD_EMOJIS = ["🐶", "🐱", "🐰", "🦊", "🐼", "🐨", "🐯", "🦁"];
const CARDS = [...CARD_EMOJIS, ...CARD_EMOJIS];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = CARDS.map((card, index) => ({
      id: index,
      content: card,
    })).sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (cardId) => {
    if (flipped.length === 2) return;
    if (matched.includes(cardId) || flipped.includes(cardId)) return;

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].content === cards[secondId].content) {
        setMatched([...matched, firstId, secondId]);
        setFlipped([]);

        if (matched.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 pb-16 pt-10">
      <div className="mb-8 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          AFC Memory Game
        </h1>
        <div className="flex items-center justify-center gap-4">
          <span className="rounded-full border border-white/70 bg-white/60 px-5 py-2 text-base font-semibold text-sky-800 shadow-sm backdrop-blur">
            Moves: {moves}
          </span>
          <button
            onClick={initializeGame}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 font-medium text-white shadow-lg shadow-sky-300/60 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            <RotateCcw className="h-4 w-4" />
            New Game
          </button>
        </div>
      </div>

      <div className="grid max-w-md grid-cols-4 gap-3 rounded-3xl border border-white/70 bg-white/40 p-4 shadow-xl shadow-sky-200/60 backdrop-blur-md sm:gap-4 sm:p-5">
        {cards.map((card, index) => {
          const isOpen = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(index)}
              disabled={gameWon}
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-md transition-all duration-300 hover:scale-105 sm:h-20 sm:w-20 sm:text-4xl ${
                isMatched
                  ? "bg-gradient-to-br from-emerald-100 to-teal-100 ring-2 ring-emerald-300"
                  : isOpen
                    ? "bg-white ring-2 ring-sky-300"
                    : "bg-gradient-to-br from-sky-400 to-blue-600 shadow-sky-300/60"
              }`}
            >
              {isOpen && card.content}
            </button>
          );
        })}
      </div>

      {gameWon && (
        <div className="mt-8 rounded-3xl border border-white/70 bg-white/60 px-8 py-6 text-center shadow-xl backdrop-blur-md">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-emerald-600">
            <Sparkles className="h-6 w-6" />
            Congratulations! You Won!
            <Sparkles className="h-6 w-6" />
          </h2>
          <p className="mt-2 text-sky-700">Total Moves: {moves}</p>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
