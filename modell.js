// ============================================
// MODELL-PRÜFUNG — Bahnwärter Thiel (BAC germană maternă)
// Claudia Toth · Subiect I + II + III rezolvate complet
// „Versuch zuerst selbst → dann aufdecken". Galben = zu merken. 🏅 = warum 10p.
// Reutilizează toggleMuster() din theory.js.
// Subiect I: Detlev von Liliencron „Tod in Ähren" — text verificat verbatim (gemeinfrei).
// ============================================

const modellHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Aici ai o <strong>probă BAC completă</strong> (Subiect I + II + III), rezolvată integral. <strong>Încearcă fiecare cerință singur</strong> — apoi dezvăluie Musterlösung și compară. Ce e <span class="merken">galben</span> merită memorat (Zitate &amp; Redemittel). Caseta 🏅 îți arată DE CE ia punctajul maxim.</div>
        </div>
    </div>
    <div class="strategie">Subiect II (eseul pe operă) se învață și se adaptează — el aduce nota. La Subiect I textul e necunoscut la examen → memorezi METODA. La III memorezi tiparul scrisorii.</div>

    <!-- ================= SUBIECT I ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📄 Subiect I — Textinterpretation</h4></div>
    <p>Lesen Sie das Gedicht und bearbeiten Sie die Aufgaben.</p>
    <div class="gedicht">
        <span class="titel">Detlev von Liliencron: Tod in Ähren</span>
        <div class="strophe">Im Weizenfeld, in Korn und Mohn,<br>Liegt ein Soldat, unaufgefunden,<br>Zwei Tage schon, zwei Nächte schon,<br>Mit schweren Wunden, unverbunden.</div>
        <div class="strophe">Durstüberquält und fieberwild,<br>Im Todeskampf den Kopf erhoben.<br>Ein letzter Traum, ein letztes Bild;<br>Sein brechend Auge schlägt nach oben.</div>
        <div class="strophe">Die Sense sirrt im Ährenfeld,<br>Er sieht sein Dorf im Arbeitsfrieden,<br>Ade, Ade, du Heimatwelt –<br>Und beugt das Haupt und ist verschieden.</div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 1:</strong> Interpretieren Sie das Gedicht, indem Sie auf die äußere Form und auf die sprachliche Gestaltung eingehen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1a')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1a">
        <p><strong>Einleitung:</strong> Das Gedicht <em>„Tod in Ähren"</em> von Detlev von Liliencron, einem Dichter der <span class="merken">Übergangszeit (Impressionismus/Naturalismus)</span>, schildert das <span class="merken">einsame Sterben eines Soldaten</span> auf einem sommerlichen Feld.</p>
        <p><strong>Äußere Form:</strong> Drei <span class="merken">Strophen mit je vier Versen</span> und durchgehendem <span class="merken">Kreuzreim (abab)</span>. Die regelmäßige, ruhige Form steht im Kontrast zum grausamen Inhalt.</p>
        <p><strong>Sprachliche Gestaltung:</strong></p>
        <ul>
            <li>Der <span class="merken">Kontrast (Antithese)</span> zwischen der schönen, friedlichen Natur („Weizenfeld, in Korn und Mohn") und dem qualvollen Sterben prägt das ganze Gedicht.</li>
            <li>Die <span class="merken">Anapher „Zwei Tage schon, zwei Nächte schon"</span> betont die lange Einsamkeit und das Verlassensein des Verwundeten.</li>
            <li>Die Häufung „<span class="merken">Durstüberquält und fieberwild</span>" macht die körperliche Qual sinnlich erfahrbar.</li>
            <li>Die <span class="merken">Personifikation/Lautmalerei „Die Sense sirrt"</span> verweist doppeldeutig auf die Erntearbeit <em>und</em> auf den Tod (Sense = Sensenmann) — die Natur/das Leben geht <strong>gleichgültig weiter</strong>.</li>
            <li>Der <span class="merken">Abschiedsruf „Ade, Ade, du Heimatwelt"</span> und das ruhige Ende „und beugt das Haupt und ist verschieden" geben dem Tod eine leise, fast feierliche Würde.</li>
        </ul>
        <p><strong>Schluss:</strong> Liliencron stellt den Tod als <strong>einsam und anonym</strong> dar, während die Natur unbeteiligt fortlebt — ein eindringliches Bild für die Gleichgültigkeit der Welt gegenüber dem Leid des Einzelnen.</p>
        <div class="warum"><ul>
            <li>Einleitung mit Autor, Werk und Epoche ✔</li>
            <li>äußere Form (Strophen, Verse, Reim) benannt ✔</li>
            <li>mindestens 4 sprachliche Mittel <strong>mit Beleg</strong> erklärt (Antithese, Anapher, Personifikation, Abschiedsruf) ✔</li>
            <li>Schluss mit Deutung (einsamer Tod / gleichgültige Natur) ✔</li>
        </ul></div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 2:</strong> Welche Wirkung hat der Kontrast zwischen der friedlichen Natur und dem einsamen Sterben? Wie wichtig ist es Ihrer Meinung nach, dass kein Mensch im Leid allein gelassen wird? Belegen Sie Ihre Meinung mit mindestens zwei Beispielen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1b')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1b">
        <p>Der Kontrast verstärkt das <strong>Mitleid</strong> des Lesers: Gerade weil die Natur so schön und friedlich ist, wirkt das einsame, unbemerkte Sterben des Soldaten umso <strong>erschütternder</strong>. Die Welt nimmt von seinem Leid keine Notiz.</p>
        <p><span class="merken">Meiner Meinung nach</span> ist es sehr wichtig, dass niemand im Leid allein gelassen wird. <strong>Erstens</strong> braucht der Mensch in Not Trost und Hilfe — schon die bloße Anwesenheit eines anderen lindert Angst und Schmerz. <strong>Zweitens</strong> zeigt sich an unserem Umgang mit Schwachen und Kranken die <strong>Menschlichkeit</strong> einer Gesellschaft; auch Hauptmanns Thiel zerbricht nicht zuletzt an seiner <strong>Einsamkeit</strong>.</p>
        <p><span class="merken">Abschließend lässt sich festhalten</span>, dass Mitgefühl und Zuwendung gerade dort am wichtigsten sind, wo ein Mensch hilflos ist.</p>
        <div class="warum"><ul>
            <li>Wirkung des Kontrasts aus dem Text erklärt ✔</li>
            <li>klare eigene Position ✔</li>
            <li><strong>zwei</strong> Argumente mit Beispielen (erstens / zweitens) ✔</li>
            <li>Redemittel der Meinungsäußerung ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT II ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📝 Subiect II — Literarischer Aufsatz</h4></div>
    <p><strong>Aufgabe:</strong> Charakterisieren Sie die Figur Thiel aus Gerhart Hauptmanns Novelle <em>Bahnwärter Thiel</em>. Gehen Sie auf Wesen, Charakter (mind. fünf Aspekte), Entwicklung und Beziehungen ein.</p>
    <button class="muster-btn" onclick="toggleMuster('s2')">🔓 Muster-Aufsatz aufdecken</button>
    <div class="muster-antwort" id="s2">
        <p><strong>Einleitung:</strong> In Gerhart Hauptmanns Novelle <span class="merken">„Bahnwärter Thiel" (1888), einem Hauptwerk des Naturalismus</span>, ist Thiel die Hauptfigur. Er verkörpert einen einfachen Mann, dessen gespaltene Seele am Ende im Wahnsinn zerbricht.</p>
        <p><strong>Wesen &amp; soziale Stellung:</strong> Thiel ist seit zehn Jahren <span class="merken">Bahnwärter</span> in der Kolonie Schön-Schornstein, ein Mann aus einfachem Milieu. Äußerlich ist er von „<span class="merken">herkulischer Gestalt</span>", stark, ordentlich und gepflegt.</p>
        <p><strong>Charakter:</strong> Thiel ist <span class="merken">pflichtbewusst, fromm und ordentlich</span> — seine Arbeit verrichtet er „<span class="merken">mechanisch</span>". Er ist ein <span class="merken">fürsorglicher Vater</span>: Sagt Tobias, er wolle „Bahnmeister" werden, strahlt Thiel „<span class="merken">von innerer Glückseligkeit</span>". Zugleich ist er <span class="merken">phlegmatisch, willensschwach und triebgesteuert</span>: Der sinnlichen Lene ist er „machtlos ausgeliefert".</p>
        <p><strong>Entwicklung:</strong> Thiel lebt ein <strong>Doppelleben</strong> zwischen der geistig geliebten, toten Minna und der körperlich begehrten Lene. Diese verdrängte <strong>Spaltung</strong> und seine Unfähigkeit, Tobias zu schützen, treiben ihn in <strong>Wahnvorstellungen</strong>. Nach Tobias' Tod durch den Zug verliert er den Verstand und <strong>tötet Lene und das Kind</strong>.</p>
        <p><strong>Beziehungen:</strong> Zu <strong>Minna</strong> empfindet er eine vergeistigte Liebe (Totenkult); an <strong>Lene</strong> bindet ihn der Trieb; <strong>Tobias</strong> liebt er über alles; die <strong>Maschine</strong> wird zur schicksalhaften Gegenmacht.</p>
        <p><strong>Schluss:</strong> <span class="merken">Zusammenfassend lässt sich sagen</span>, dass Thiel <strong>Täter und Opfer zugleich</strong> ist: Sein Mord erwächst aus Trieb, Milieu und Krankheit. Er ist eine <strong>tragische Figur</strong> — der Mensch, ohnmächtig gegenüber den determinierenden Kräften des Naturalismus.</p>
        <div class="warum"><ul>
            <li>Einleitung: Werk, Autor, <strong>Jahr</strong> und Epoche ✔</li>
            <li>Wesen + <strong>mehr als fünf</strong> Eigenschaften ✔</li>
            <li>jede Aussage <strong>mit Textbeleg / Zitat</strong> ✔</li>
            <li>Entwicklung und Beziehungen behandelt ✔</li>
            <li>Schluss mit Deutung (Täter und Opfer, tragische Figur) ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT III ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">✉️ Subiect III — Bewerbungsbrief</h4></div>
    <p><strong>Aufgabe:</strong> Sie heißen Ioana Marin und bewerben sich auf eine Anzeige des <em>Eisenbahnmuseums</em> in Temeswar um einen Ferienjob als Aushilfe. Schreiben Sie einen vollständigen Bewerbungsbrief.</p>
    <button class="muster-btn" onclick="toggleMuster('s3')">🔓 Muster-Bewerbung aufdecken</button>
    <div class="muster-antwort" id="s3">
        <p style="color:#5A5147;">Ioana Marin<br>Str. Gării 7<br>300173 Temeswar</p>
        <p style="color:#5A5147;">Eisenbahnmuseum Temeswar<br>z. Hd. Herrn Weber<br>Bd. Take Ionescu 46<br>300124 Temeswar</p>
        <p style="color:#5A5147;">Temeswar, den 21. Juni 2026</p>
        <p><span class="merken"><strong>Betreff: Bewerbung um einen Ferienjob als Aushilfe in Ihrem Eisenbahnmuseum</strong></span></p>
        <p><span class="merken">Sehr geehrter Herr Weber,</span></p>
        <p><span class="merken">mit großem Interesse habe ich Ihre Anzeige gelesen</span> und bewerbe mich hiermit um die Stelle als Aushilfe in den Sommerferien.</p>
        <p>Ich besuche die zwölfte Klasse und interessiere mich sehr für Geschichte und Technik. <span class="merken">Zu meinen Stärken gehören</span> Zuverlässigkeit, Freundlichkeit und Freude am Umgang mit Besuchern. Außerdem spreche ich gut Deutsch und Rumänisch.</p>
        <p>Gern möchte ich Ihre Besucherinnen und Besucher betreuen und bei Führungen helfen. <span class="merken">Über ein persönliches Vorstellungsgespräch würde ich mich sehr freuen.</span></p>
        <p><span class="merken">Mit freundlichen Grüßen</span><br>Ioana Marin</p>
        <p style="color:#5A5147; font-size:0.85rem;">Anlage: Lebenslauf</p>
        <div class="warum"><ul>
            <li>Absender, Empfänger, Ort + Datum ✔</li>
            <li><strong>Betreffzeile (2 P)</strong> und <strong>Anrede (2 P)</strong> korrekt ✔</li>
            <li>Einleitung (Bezug zur Anzeige) + Hauptteil (Stärken) + Schluss (Gespräch) ✔</li>
            <li>Grußformel, Unterschrift, Anlage ✔</li>
        </ul></div>
    </div>
`;

// ============================================
// INJECTARE
// ============================================
(function () {
    function inject() {
        const c = document.getElementById('modell-container');
        if (c) c.innerHTML = modellHTML;
    }
    if (document.readyState !== 'loading') { inject(); }
    else { document.addEventListener('DOMContentLoaded', inject); }
})();
