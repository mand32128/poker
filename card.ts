export const CardType = {
    NORMAL: 'normal',
    JOKER: 'joker',
} as const;

export const Suit = {
    SPADE: 'spade',
    HEART: 'heart',
    DIAMOND: 'diamong',
    CLUB: 'club',
} as const;

export const Rank = {
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
} as const;

type CardType = typeof CardType[keyof typeof CardType];
type Suit = typeof Suit[keyof typeof Suit];
type Rank = typeof Rank[keyof typeof Rank];

export class Card {
    constructor(
        private type: CardType,
        private suit: Suit,
        private rank: Rank
        ) {}
}
