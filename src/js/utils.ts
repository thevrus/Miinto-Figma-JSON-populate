// TODO
export function getRandomDate() {
    return new Date(Math.random()).toISOString().substr(0, 10).replace(/-/g, '.')
}

// TODO
export function getRandomTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}
export function getRandomOrder() {
    return Math.floor(Math.random() * 9999) + 9999;
}

export function getRandomGtin() {
    return Math.floor(Math.random() * 100_000_0000) + 999_999_99999;
}

export function getRandomEmoji() {
    const emojis = ['🤘', '🙌', '👌', '💅', '🎉', '🚀'];
    return emojis[emojis.length * Math.random() | 0];
}