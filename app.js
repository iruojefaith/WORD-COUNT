let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('string').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});