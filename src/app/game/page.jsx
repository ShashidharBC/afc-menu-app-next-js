"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const CARD_EMOJIS = ["🐶", "🐱", "🐰", "🦊", "🐼", "🐨", "🐯", "🦁"];
const CARDS = [...CARD_EMOJIS, ...CARD_EMOJIS];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Shuffle cards
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
    // Prevent clicking if two cards are already flipped
    if (flipped.length === 2) return;
    // Prevent clicking already matched or flipped cards
    if (matched.includes(cardId) || flipped.includes(cardId)) return;

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].content === cards[secondId].content) {
        setMatched([...matched, firstId, secondId]);
        setFlipped([]);

        // Check if game is won
        if (matched.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        // Reset flipped cards after a delay
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          AFC Memory Game
        </h1>
        <div className="flex gap-4 mb-4 items-center justify-center">
          <p className="text-lg font-semibold text-gray-600">Moves: {moves}</p>
          <button
            onClick={initializeGame}
            className="px-4 py-2 bg-[#EA580C] text-white rounded-lg hover:bg-[#ea5a0cb7] transition-colors"
          >
            New Game
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md px-3">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`w-20 h-20 flex items-center justify-center text-4xl rounded-lg transition-all duration-300 transform hover:scale-105
              ${
                flipped.includes(index) || matched.includes(index)
                  ? "bg-white rotate-0"
                  : "bg-[#EA580C] rotate-180"
              } ${matched.includes(index) ? "bg-green-100" : ""}`}
            disabled={gameWon}
          >
            {(flipped.includes(index) || matched.includes(index)) &&
              card.content}
          </button>
        ))}
      </div>

      {gameWon && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-green-600 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Congratulations! You Won!
            <Sparkles className="w-6 h-6" />
          </h2>
          <p className="text-gray-600 mt-2">Total Moves: {moves}</p>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
