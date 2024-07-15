import React, { useState } from 'react';

const mockSavedCards = [
    { id: 1, last4: '1234', brand: 'Visa', expMonth: '12', expYear: '2025' },
    { id: 2, last4: '5678', brand: 'Mastercard', expMonth: '06', expYear: '2024' },
  ];

export default function CreditCardForm() {
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardSelect = (card) => {
      setSelectedCard(card);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedCard) {
        console.log('Using saved card:', selectedCard);
      }  
    };
   return (
      <form onSubmit={handleSubmit} className=" mt-8">
        <div className="mb-4">
          {mockSavedCards.map(card => (
            <div key={card.id} className="flex justify-start mb-2">
              <input
                type="radio"
                id={`card-${card.id}`}
                name="savedCard"
                checked={selectedCard === card}
                onChange={() => handleCardSelect(card)}
                className="mr-2"
              />
              <label htmlFor={`card-${card.id}`} className="flex-1">
                {card.brand} ending in {card.last4} (Expires {card.expMonth}/{card.expYear})
              </label>
            </div>
          ))}
        </div>
      </form>
    );
  }

