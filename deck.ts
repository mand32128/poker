const CardType = {
    NORMAL: 'normal',
    JOKER: 'joker',
} as const;

const Suit = {
    SPADE: 'spade',
    HEART: 'heart',
    DIAMOND: 'diamong',
    CLUB: 'club',
} as const;

const Rank = {
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

type Card = {
    cardType: CardType,
    suit?: Suit,
    rank?: Rank,
};

class Deck {
    // 山札
    private remainingCards: Card[] = [];
    // 手札
    private hand: Card[] = [];

    constructor() {
        // ジョーカー2枚を追加
        for (let i = 0; i < 2; i++) this.remainingCards.push({ cardType: CardType.JOKER });
        // ノーマルカード計52枚を追加
        for (const suit of Object.values(Suit)) {
            for (const rank of Object.values(Rank)) {
                this.remainingCards.push({
                    cardType: CardType.NORMAL,
                    suit: suit,
                    rank: rank,
                })
            }
        }
    }
}

// デッキの中身を見るデバッグ出力
const deck = new Deck();
console.log(deck);
