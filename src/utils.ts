// TODO
export function getRandomDate() {
    return new Date(Math.random()).toISOString().substr(0, 10).replace(/-/g, '.')
}

// TODO
export function getRandomTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}

export function getRandomEmoji() {
    const emojis = ['🤘', '🙌', '👌', '💅', '🎉', '🚀'];
    return emojis[emojis.length * Math.random() | 0];
}
