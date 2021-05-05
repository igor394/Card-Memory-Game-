export const createNewList = () => {
    let cardsList = [];
    for (let i = 0; i < 16; i += 2) {
        let index = Math.floor(Math.random() * 1000);
        cardsList.push({
            id: i,
            idCheck: i + 1,
            check: false,
            url: `https://picsum.photos/176/176?image=${index}`,
            state: false
        });
        cardsList.push({
            id: i + 1,
            idCheck: i,
            check: false,
            url: `https://picsum.photos/176/176?image=${index}`,
            state: false
        });
    }
    return shuffle(cardsList);
}

function shuffle(arr) {
    let index = arr.length;
    let accum;
    let randomIndex;
    while (0 !== index) {
        randomIndex = Math.floor(Math.random() * index);
        index -= 1;
        accum = arr[index];
        arr[index] = arr[randomIndex];
        arr[randomIndex] = accum;
    }
    return arr;
}