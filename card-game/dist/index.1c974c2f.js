let activeCard, previousCard, attempts = 3, score = 0, deck = createDeck();
// Init
let picked = pickCard();
setCard(picked);
document.querySelector("#lower").addEventListener("click", lower);
document.querySelector("#higher").addEventListener("click", higher);
document.querySelector("#equal").addEventListener("click", equal);
function createDeck() {
    let deck = [], suites = [
        "&spades;",
        "&hearts;",
        "&clubs;",
        "&diams;"
    ];
    for(let i = 0; i < suites.length; i++)for(let j = 2; j < 15; j++){
        let card = {
            suite: suites[i],
            color: getColor(suites[i]),
            display: getDisplay(j),
            value: j
        };
        deck.push(card);
    }
    function getColor(suite) {
        if (suite == "&hearts;" || suite == "&diams;") return "red";
        else return "black";
    }
    function getDisplay(val) {
        if (val < 11) return val;
        if (val == 11) return "J";
        if (val == 12) return "D";
        if (val == 13) return "K";
        if (val == 14) return "A";
    }
    return deck;
}
function pickCard() {
    let rand = Math.floor(Math.random() * deck.length);
    let pickedCard = deck.splice(rand, 1);
    // Set active card for comparison
    activeCard = pickedCard[0];
    return pickedCard[0];
}
function setCard(card) {
    let el = document.createElement("article");
    el.classList.add("card");
    // Random degree for coolness
    let deg = Math.floor(Math.random() * 8);
    el.style.transform = `rotateZ(${deg}deg)`;
    el.innerHTML = `<section class="front">
            <header><span class="${card.color}">${card.suite}</span> ${card.display}</header>
            <div class="suite ${card.color}">${card.suite}</div>
            <footer><span class="${card.color}">${card.suite}</span> ${card.display}</footer>        
    </section>
    <section class="back"></section>`;
    document.querySelector(".placeholder").insertAdjacentElement("beforeend", el);
}
function updateCount() {
    document.querySelector(".left").innerHTML = `${deck.length + 1} kort kvar`;
}
function lower(e) {
    if (deck.length > 0 && attempts > 1) {
        // Shift cards
        previousCard = activeCard;
        // Pick a new
        let picked = pickCard();
        setCard(picked);
        // Evaluate picked card
        if (activeCard.value < previousCard.value) // if true
        updateScore(10);
        else // if false
        updateAttempts();
        // Update card count ui
        updateCount();
    } else {
        let picked = pickCard();
        setCard(picked);
        setTimeout(()=>{
            document.querySelector("#gameover").classList.toggle("show");
        }, 600);
    }
}
function higher(e) {
    if (deck.length > 0 && attempts > 1) {
        // Shift cards
        previousCard = activeCard;
        // Pick a new
        let picked = pickCard();
        setCard(picked);
        // Evaluate picked card
        if (activeCard.value > previousCard.value) // if true
        updateScore(10);
        else // if false
        updateAttempts();
        // Update card count ui
        updateCount();
    } else {
        let picked = pickCard();
        setCard(picked);
        setTimeout(()=>{
            document.querySelector("#gameover").classList.toggle("show");
        }, 600);
    }
}
function equal(e) {
    if (deck.length > 0 && attempts > 1) {
        // Shift cards
        previousCard = activeCard;
        // Pick a new
        let picked = pickCard();
        setCard(picked);
        // Evaluate picked card
        if (activeCard.value == previousCard.value) // if true
        updateScore(100);
        else // if false
        updateAttempts();
        // Update card count ui
        updateCount();
    } else {
        let picked = pickCard();
        setCard(picked);
        setTimeout(()=>{
            document.querySelector("#gameover").classList.toggle("show");
        }, 600);
    }
}
function updateAttempts() {
    // Timer for cardanimation to complete
    setTimeout(()=>{
        attempts--;
        document.querySelector(".attempts").innerHTML = attempts;
    }, 600);
}
function updateScore(factor = 10) {
    // Timer for cardanimation to complete
    setTimeout(()=>{
        // Score count algorithm can be refactored to include risk taking    
        score += previousCard.value * factor;
        document.querySelector(".score").innerHTML = score;
    }, 600);
}

//# sourceMappingURL=index.1c974c2f.js.map
