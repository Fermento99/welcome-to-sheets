export type CardBonus = 'fence' | 'park' | 'pool' | 'builder' | 'investment' | 'bis';

export type Card = {
  number: number;
  bonus: CardBonus;
};
