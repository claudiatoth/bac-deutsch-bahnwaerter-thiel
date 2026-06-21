// ============================================
// ÜBUNGEN — Bahnwärter Thiel (BAC germană maternă)
// Claudia Toth · 5 Übungen: Multiple Choice + Lückentext (autoverificare)
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
        .replace(/[.!?;:,]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
function answerMatches(input, accept) {
    const n = normalizeAnswer(input);
    if (!n) return false;
    return accept.some(a => normalizeAnswer(a) === n);
}

const ex1Data = {
    instr: '👇 Wähle die richtige Antwort. (Wissen über Werk, Epoche und Figuren)',
    questions: [
        { q: 'Zu welcher literarischen Epoche gehört „Bahnwärter Thiel"?', options: ['Romantik', 'Naturalismus', 'Expressionismus', 'Aufklärung'], correct: 1 },
        { q: 'Welcher Gattung gehört das Werk an?', options: ['Roman', 'Novelle', 'Drama', 'Ballade'], correct: 1 },
        { q: 'Was ist Thiel von Beruf?', options: ['Lehrer', 'Bahnwärter', 'Arzt', 'Förster'], correct: 1 },
        { q: 'Wer ist Thiels erste, vergeistigte Frau?', options: ['Lene', 'Minna', 'Käthe', 'Roswitha'], correct: 1 },
        { q: 'Wie stirbt Tobias?', options: ['an einer Krankheit', 'er wird vom Zug überfahren', 'er ertrinkt', 'Lene erschlägt ihn'], correct: 1 },
        { q: 'Was verkörpert die Figur Lene?', options: ['Geist und Seele', 'Trieb, Körper und Naturgewalt', 'Reichtum und Adel', 'Frömmigkeit'], correct: 1 },
        { q: 'Was geschieht am Ende mit Thiel?', options: ['er flieht ins Ausland', 'er wird wahnsinnig, tötet Lene und das Kind und kommt in die Anstalt', 'er versöhnt sich mit Lene', 'er stirbt unter dem Zug'], correct: 1 }
    ]
};

const ex2Data = {
    instr: '👇 Ordne jedem Zitat / Motiv seine richtige Bedeutung zu.',
    questions: [
        { q: '„rasendes Tosen und Toben"', options: ['Lenes Wutanfall', 'der Zug zerreißt die Stille der Natur (Mensch vs. Maschine)', 'ein Gewitter über dem Dorf', 'Thiels Traum'], correct: 1 },
        { q: '„herkulische Gestalt"', options: ['Thiels starke äußere Erscheinung', 'eine Statue im Wald', 'Lenes Kraft', 'der Zug'], correct: 0 },
        { q: '„von innerer Glückseligkeit"', options: ['Thiels Vaterliebe, als Tobias „Bahnmeister" werden will', 'Lenes Zufriedenheit', 'die Hochzeit mit Lene', 'ein Kirchenfest'], correct: 0 },
        { q: '„Glotzaugen" / „Blutregen"', options: ['Thiels Albtraum von Minna', 'der Zug als dämonisches Ungetüm', 'ein Sonnenuntergang', 'Lenes Augen'], correct: 1 },
        { q: '„mechanisch"', options: ['Thiels routinierte, automatische Arbeit (Ordnung)', 'die Maschine spricht', 'Tobias’ Spielzeug', 'der Wahnsinn'], correct: 0 }
    ]
};

const ex3Data = {
    instr: '👇 Welcher Begriff / welches Stilmittel ist gemeint? (wichtig für Subiect I &amp; II)',
    questions: [
        { q: 'Der Mensch ist von Milieu, Vererbung und Trieb bestimmt — er handelt nicht frei.', options: ['Idealismus', 'Determinismus', 'Romantik', 'Symbolismus'], correct: 1 },
        { q: 'Der Sonnenuntergang glüht „purpurn", als Thiel voller Wut ist.', options: ['Natur als Spiegel der Seele', 'Rückblende', 'Ironie', 'Parallelismus'], correct: 0 },
        { q: 'Der Zug bekommt rote „Glotzaugen" und wird zum Ungetüm.', options: ['Personifikation', 'Hyperbel', 'Anapher', 'Ellipse'], correct: 0 },
        { q: 'Der Untertitel „novellistische Studie" betont …', options: ['den Anspruch wissenschaftlicher Genauigkeit (Naturalismus)', 'eine Komödie', 'ein Märchen', 'einen Liebesroman'], correct: 0 },
        { q: 'Die heilige Ruhe der Natur steht gegen den Lärm des Zuges.', options: ['Kontrasttechnik', 'Alliteration', 'Rahmenerzählung', 'Hyperbel'], correct: 0 }
    ]
};

const ex4Data = {
    instr: '👇 Ergänze die Inhaltsangabe mit dem passenden Wort. (ä=ae, ö=oe, ü=ue gehen auch)',
    items: [
        { before: 'Gerhart Hauptmanns', after: 'gehört zur Epoche des Naturalismus.', accept: ['Novelle', 'novellistische Studie', 'die Novelle'], hint: 'Gattung', answer: 'Novelle' },
        { before: 'Thiels erste, vergeistigte Frau', after: 'stirbt bei der Geburt von Tobias.', accept: ['Minna'], hint: 'prima soție', answer: 'Minna' },
        { before: 'Um Tobias zu versorgen, heiratet Thiel die grobe Kuhmagd', after: '.', accept: ['Lene'], hint: 'a doua soție', answer: 'Lene' },
        { before: 'Der kleine Tobias wird vom', after: 'überfahren und stirbt.', accept: ['Zug', 'ZUg'], hint: 'mașina/trenul', answer: 'Zug' },
        { before: 'Am Ende verfällt Thiel dem', after: 'und tötet Lene und das Kind.', accept: ['Wahnsinn', 'Wahn'], hint: 'nebunia', answer: 'Wahnsinn' }
    ]
};

const ex5Data = {
    instr: '👇 Bewerbungsbrief (Subiect III): Wähle das Richtige.',
    questions: [
        { q: 'Welche zwei Elemente bringen je 2 Punkte?', options: ['Datum und Unterschrift', 'Betreffzeile und Anrede', 'Absender und Anlagen', 'Grußformel und Empfänger'], correct: 1 },
        { q: 'Welche Grußformel ist passend (formell)?', options: ['Tschüss und bis bald', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Servus'], correct: 2 },
        { q: 'Wie beginnt man den Brieftext, wenn man den Namen nicht kennt?', options: ['Hallo!', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag, Leute,'], correct: 1 },
        { q: 'Welcher Satz passt in eine Bewerbung?', options: ['Ich will unbedingt diesen Job.', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Gebt mir bitte die Stelle.', 'Ich brauche dringend Geld.'], correct: 1 }
    ]
};

function buildMC(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.questions.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' + it.q + '</label><div class="mc-options">';
        it.options.forEach(function (opt, j) {
            const id = prefix + '-q' + i + '-o' + j;
            html += '<div class="mc-option"><input type="radio" name="' + prefix + '-q' + i + '" id="' + id + '" value="' + j + '"><label for="' + id + '">' + opt + '</label></div>';
        });
        html += '</div><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkMC(data, prefix) {
    let correct = 0;
    data.questions.forEach(function (it, i) {
        const sel = document.querySelector('input[name="' + prefix + '-q' + i + '"]:checked');
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (sel && parseInt(sel.value, 10) === it.correct) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.options[it.correct]; }
        }
    });
    return { correct: correct, total: data.questions.length };
}

function resetMC(containerId, data, prefix) {
    data.questions.forEach(function (it, i) {
        const sels = document.querySelectorAll('input[name="' + prefix + '-q' + i + '"]');
        sels.forEach(function (s) { s.checked = false; });
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function buildLueckentext(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.items.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' +
            it.before + ' <input type="text" id="' + prefix + '-in-' + i + '" placeholder="(' + it.hint + ')" autocomplete="off"> ' + it.after +
            '</label><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkLueckentext(data, prefix) {
    let correct = 0;
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (input && answerMatches(input.value, it.accept)) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.answer; }
        }
    });
    return { correct: correct, total: data.items.length };
}

function resetLueckentext(data, prefix) {
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        if (input) input.value = '';
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function checkEx1() { return checkMC(ex1Data, 'ex1'); }
function checkEx2() { return checkMC(ex2Data, 'ex2'); }
function checkEx3() { return checkMC(ex3Data, 'ex3'); }
function checkEx4() { return checkLueckentext(ex4Data, 'ex4'); }
function checkEx5() { return checkMC(ex5Data, 'ex5'); }

function resetEx1() { resetMC('ex1-container', ex1Data, 'ex1'); }
function resetEx2() { resetMC('ex2-container', ex2Data, 'ex2'); }
function resetEx3() { resetMC('ex3-container', ex3Data, 'ex3'); }
function resetEx4() { resetLueckentext(ex4Data, 'ex4'); }
function resetEx5() { resetMC('ex5-container', ex5Data, 'ex5'); }

(function () {
    function buildAll() {
        buildMC('ex1-container', ex1Data, 'ex1');
        buildMC('ex2-container', ex2Data, 'ex2');
        buildMC('ex3-container', ex3Data, 'ex3');
        buildLueckentext('ex4-container', ex4Data, 'ex4');
        buildMC('ex5-container', ex5Data, 'ex5');
    }
    if (document.readyState !== 'loading') { buildAll(); }
    else { document.addEventListener('DOMContentLoaded', buildAll); }
})();
