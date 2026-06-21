// ============================================
// LERNKARTEN — Bahnwärter Thiel (BAC germană maternă)
// Claudia Toth · Figuren · Begriffe · Symbole · Zitate · Wortschatz
// Delimitator ' ; apostrof = ’ (U+2019); fără audio la nivel matern.
// ============================================

const flashcardsData = [
    // === Figuren (6) ===
    { de: 'Thiel', ro: 'Protagonistul (Antiheld) · Bahnwärter herculean, fromm, „mechanisch"; suflet scindat Pflicht↔Trieb → Wahnsinn. Täter UND Opfer' },
    { de: 'Minna', ro: 'Prima soție · iubire spirituală; moare la nașterea lui Tobias; după moarte = Lichtgestalt idealizată, apare în viziuni' },
    { de: 'Lene', ro: 'A doua soție, Kuhmagd · grobă, „dominante Furie", brutală cu Tobias; întruchipează Trieb/Körper; Thiel îi e hörig' },
    { de: 'Tobias', ro: 'Fiul Minnei · schwächlich, iubit de Thiel, misshandelt de Lene; vrea „Bahnmeister"; ucis de tren = victima Maschine' },
    { de: 'das Kleinkind', ro: 'Copilul comun Thiel↔Lene · rodul Trieb-Ehe; ucis de Thiel în Wahn împreună cu Lene' },
    { de: 'die Maschine (der Zug)', ro: 'Forța-vedetă · Technik/Schicksal, putere brutală; „Glotzaugen", „Blutregen"; sfâșie liniștea naturii, îl ucide pe Tobias' },

    // === Begriffe (8) ===
    { de: 'der Naturalismus (1880–1900)', ro: 'Epoche · Determinismus (Milieu+Vererbung+Trieb), milieu social, observație „științifică"' },
    { de: 'die novellistische Studie', ro: 'Subtitlul/Gattung · „studiu" în formă de nuvelă — pretenție de exactitate științifică (naturalistă)' },
    { de: 'der Determinismus', ro: 'Omul e determinat de ereditate, mediu și instinct · Thiel „machtlos ausgeliefert" Trieb-ului' },
    { de: 'der Er-Erzähler', ro: 'Narator la persoana a III-a · detaliu naturalist + Stimmungsbilder impresioniste' },
    { de: 'Natur als Spiegel der Seele', ro: 'Tehnică impresionistă · peisajul oglindește psihicul lui Thiel (Purpur=Wut, Gewitter=Angst, blau=Glück)' },
    { de: 'der Totenkult', ro: 'Cultul morților · Thiel ține ceremonii pentru Minna în Wärterbude, intră în Trance/viziuni' },
    { de: 'der Trieb', ro: 'Instinctul/pulsiunea (mai ales sexuală) · forța naturalistă care îl domină pe Thiel prin Lene' },
    { de: 'das Übergangswerk', ro: 'Operă de tranziție · Naturalismus + Impressionismus + Symbolismus depășesc naturalismul pur' },

    // === Symbole (6) ===
    { de: 'die Eisenbahn / „die Maschine"', ro: 'Simbol central · Technik, Schicksal, Gewalt dämonisch; distruge idila naturii, îl ucide pe Tobias' },
    { de: 'die Kiefernheide / der Wald', ro: 'Natura · frumoasă, „heilig", dar și spațiul Unbewussten; Stimmungsraum' },
    { de: 'das Wärterhäuschen', ro: 'Lumea interioară a lui Thiel · loc sfânt al amintirii Minnei (Totenkult) — dar și Lene/Trieb pătrund' },
    { de: 'Minna (Lichtgestalt)', ro: 'Simbol al sufletului &amp; amintirii · apare în viziuni; Gegenbild la senzuala Lene' },
    { de: 'Farben &amp; Licht (rot/schwarz/purpur)', ro: 'Spiegelung impresionistă a psihicului · Purpur=Wut, „Verwesungslicht"=Tod, Himmel blau=Glück' },
    { de: 'Kontrast Ruhe ↔ Lärm', ro: 'Liniștea „heilig" a naturii ↔ „rasendes Tosen und Toben" al trenului · Natur vs. Technik' },

    // === Zitate (5) — cardul ESTE citatul ===
    { de: '„herkulische Gestalt"', ro: 'descrierea lui Thiel · puternic fizic, dar slab de voință în interior' },
    { de: '„von innerer Glückseligkeit"', ro: 'Thiel când Tobias vrea să devină „Bahnmeister" · iubirea de tată' },
    { de: '„rasendes Tosen und Toben"', ro: 'trenul sfâșie liniștea naturii · om vs. mașină (Kontrast Ruhe↔Lärm)' },
    { de: '„Glotzaugen" / „Blutregen"', ro: 'trenul ca Ungetüm · farurile roșii prefac ploaia în picături de sânge (Personifikation)' },
    { de: '„mechanisch"', ro: 'Thiel își face munca rutinat/automat · Ordnung &amp; Routine ca structură de viață' },

    // === Wortschatz DE → RO (8) ===
    { de: 'der Bahnwärter', ro: 'cantonierul (păzitor de cale ferată)' },
    { de: 'die Novelle', ro: 'nuvela' },
    { de: 'der Naturalismus', ro: 'naturalismul' },
    { de: 'der Trieb', ro: 'instinctul / pulsiunea' },
    { de: 'das Milieu', ro: 'mediul (social)' },
    { de: 'die Vererbung', ro: 'ereditatea' },
    { de: 'der Wahnsinn', ro: 'nebunia' },
    { de: 'der Determinismus', ro: 'determinismul' }
];

// ============================================
// RUNTIME — render + flip (.flipped) + navigare (fără audio)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} Lernkarten:</strong> Figuren · Begriffe · Symbole · Zitate · Wortschatz.<br>
            Klick auf die Karte für die Erklärung · Pfeile zum Blättern.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Karte 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Klick für die Erklärung</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Zurück</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Weiter →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.innerHTML = c.de;
    ro.innerHTML = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Karte ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
