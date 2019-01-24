
// HTML-elementer:
const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");

const db = firebase.database();
const meldinger = db.ref("minemessengermeldinger");


// Definerer en bruker
let user;

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        // skjema.addEventListener("submit", lagreMelding);
        // meldinger.on("child_added", visMelding);
    } else {
        document.body.innerHTML = `
            <main class="notloggedin>
                <h1>Du er ikke logget inn</h1>
                <a href="login.html">Logg inn her</a>
            </main>            
        `;
    }
});


