module.exports = {
    name: 'blackjack',
    description: 'Play a game of blackjack!',
    execute(message, args) {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let deck = createDeck();
        shuffleDeck(deck);
        function createDeck(){
            const deck = [];
            for (let i = 0; i < values.length; i++) {
                for (let j = 0; j < suits.length; j++) {
                deck.push(`${values[i]} of ${suits[j]}`);
                }
            }
            return deck;
        }
        function shuffleDeck(deck) {
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
            }
            return deck;
        }
        function dealCard(deck) {
            return deck.pop();
        }
        let hand = [dealCard(deck), dealCard(deck)];
        message.channel.send(`Your hand: ${hand.join(', ')}`);
    }
}