const MIN = 1;
const MAX = 100;
const computerNum = Math.floor(Math.random() * (MAX - MIN + 1) ) + MIN;
let tries = 0;

function updateTries() {
    document.querySelector('[name="tries"]').innerHTML = `${tries} tries`;
};

function guess() {
    const guess = +document.querySelector('input').value;
    let feedback;
    tries += 1;

    if (guess > computerNum) {
        feedback = "Too high";
    } else if (guess < computerNum) {
        feedback = "Too low";
    } else {
        feedback = "You got it!"
    }
    updateTries();
    updateFeedback(feedback);
} 

function updateFeedback(feedback) {
    document.querySelector('[name="feedback"]').innerHTML = feedback;
}

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    guess();
})

updateTries();
console.log(computerNum);
