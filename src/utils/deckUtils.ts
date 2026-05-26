import type { Card, CardBonus } from '@/models/Card';

const deckConfig: Record<number, CardBonus[]> = {
  1: ['fence', 'park', 'investment'],
  2: ['fence', 'park', 'investment'],
  3: ['fence', 'pool', 'builder', 'bis'],
  4: ['park', 'pool', 'builder', 'investment', 'bis'],
  5: ['fence', 'fence', 'park', 'park', 'investment', 'investment'],
  6: ['fence', 'fence', 'park', 'pool', 'builder', 'investment', 'bis'],
  7: ['fence', 'park', 'park', 'pool', 'builder', 'investment', 'investment', 'bis'],
  8: ['fence', 'fence', 'park', 'park', 'pool', 'builder', 'investment', 'investment', 'bis'],
  9: ['fence', 'park', 'park', 'pool', 'builder', 'investment', 'investment', 'bis'],
  10: ['fence', 'fence', 'park', 'pool', 'builder', 'investment', 'bis'],
  11: ['fence', 'fence', 'park', 'park', 'investment', 'investment'],
  12: ['park', 'pool', 'builder', 'investment', 'bis'],
  13: ['fence', 'pool', 'builder', 'bis'],
  14: ['fence', 'park', 'investment'],
  15: ['fence', 'park', 'investment'],
};

const getDeck = (): Card[] =>
  Object.entries(deckConfig).flatMap(([value, bonuses]) =>
    bonuses.map((bonus) => ({ number: parseInt(value), bonus })),
  );

const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck: Card[] = [];

  while (deck.length > 0) {
    const index = Math.floor(Math.random() * deck.length);
    const selectedCard = deck.splice(index, 1)[0];
    shuffledDeck.push(selectedCard!);
  }

  return shuffledDeck;
};

export const getShuffledDecks = (): Card[][] => {
  const deck = getDeck();

  const shuffledDeck = shuffleDeck(deck);

  const subDeckLength = shuffledDeck.length / 3;

  const subDecks = [...Array(3)].map((_, index) =>
    shuffledDeck.slice(index * subDeckLength, (index + 1) * subDeckLength),
  );

  return subDecks;
};
