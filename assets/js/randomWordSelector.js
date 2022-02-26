
fetch('words.json').then(response => {
    return response.json();
}).then(data => {
    shuffleWords(data);
    // console.log(data);
}).catch(err => {
    // Do something for an error here
});

function shuffleWords(data){
    const array = data
    const word = array.sort((a, b) => 0.5 - Math.random());
    const counter = data.length;
    const index = Math.floor(Math.random() * counter);
    // return data[index].toUpperCase();
    console.log(data[index].toUpperCase())

}