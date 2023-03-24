function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}
let a = [NaN,0,15,false,-22,' ',undefined,47,null];
console.log("Array before Shuffling", a);

console.log("Shuffling array");
shuffleArray(a);

console.log("Array after Shuffling", a);