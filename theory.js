// ============================================
// THEORIE — BAC kompakt: Bahnwärter Thiel (Gerhart Hauptmann)
// Limba și literatura germană maternă · Claudia Toth
// Conținut în germană; note de strategie scurte în RO.
// Surse: materialele Claudiei (BAC Deutsch/Naturalismus/Bahnwärter Thiel/) — Inhalt, Charakterisierungen,
//        Interpretation, Epoche; Zitate aus Hauptmanns Text (gemeinfrei).
// ============================================

const theoryHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Hauptmanns <em>Bahnwärter Thiel</em> ist DIE Novelle fürs BAC zum Thema Naturalismus. Lerne nicht jeden Satz — verstehe <strong>den Konflikt</strong> (Pflicht gegen Trieb), <strong>die Figuren</strong> (Minna gegen Lene) und <strong>die Symbole</strong> (die Maschine, die Natur). Und merke dir: die <strong>Natur spiegelt Thiels Seele</strong> — und die <strong>Maschine bringt Unheil</strong>. Öffne mai jos secțiune cu secțiune. 🚂</div>
        </div>
    </div>

    <!-- 0: BAC auf einen Blick -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🆘 BAC auf einen Blick (die SOS-Seite)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="sos-box">
                <h4>Bahnwärter Thiel — das Wichtigste in 1 Minute</h4>
                <div class="sos-row"><div class="sos-k">Autor</div><div class="sos-v">Gerhart Hauptmann (1862–1946) — Nobelpreis 1912; Hauptvertreter des Naturalismus</div></div>
                <div class="sos-row"><div class="sos-k">Werk / Jahr</div><div class="sos-v">Bahnwärter Thiel — geschrieben 1887, Erstdruck <strong>1888</strong>; Untertitel <em>„Novellistische Studie"</em></div></div>
                <div class="sos-row"><div class="sos-k">Epoche</div><div class="sos-v"><strong>Naturalismus</strong> (mit impressionistischen &amp; symbolistischen Zügen → „Übergang")</div></div>
                <div class="sos-row"><div class="sos-k">Gattung</div><div class="sos-v"><strong>Novelle</strong> („novellistische Studie")</div></div>
                <div class="sos-row"><div class="sos-k">Hauptfigur</div><div class="sos-v">Thiel — Bahnwärter, herkulisch, fromm, still</div></div>
                <div class="sos-row"><div class="sos-k">Schauplatz</div><div class="sos-v">Kolonie Schön-Schornstein bei Erkner; Wärterhäuschen im Kiefernforst (bei Berlin)</div></div>
                <div class="sos-row"><div class="sos-k">Zeit</div><div class="sos-v">1880er Jahre — Industrialisierung, einfaches Milieu</div></div>
                <div class="sos-row"><div class="sos-k">Themen</div><div class="sos-v">Determinismus (Milieu &amp; Trieb) · Pflicht vs. Trieb · Mensch gegen Maschine · Natur als Seelenspiegel · Religion/Totenkult · Schuld &amp; Wahnsinn</div></div>
                <div class="sos-row"><div class="sos-k">Symbole</div><div class="sos-v">die Eisenbahn / „die Maschine" · die Kiefernheide · das Wärterhäuschen · Minna (Lichtgestalt) · Farben (rot/schwarz)</div></div>
                <div class="sos-row"><div class="sos-k">Ende</div><div class="sos-v">Tobias wird vom Zug überfahren und stirbt. Thiel verfällt dem Wahnsinn, erschlägt Lene und das gemeinsame Kind; er wird auf den Schienen gefunden und in die Irrenanstalt eingewiesen.</div></div>
            </div>
            <div class="strategie">Pagina de memorat pe de rost. Autor – Jahr (1888) – Epoche (Naturalismus) – Gattung (Novelle) trebuie să iasă automat în Einleitung.</div>
        </div>
    </div>

    <!-- 1: Die Geschichte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📜 Die Geschichte (Inhalt &amp; Aufbau)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <h4>Teil 1 — Zwei Frauen, ein Doppelleben</h4>
                <p>Der fromme, „herkulische" Bahnwärter <strong>Thiel</strong> lebt in der Kolonie Schön-Schornstein und versieht seinen Dienst in einem einsamen Wärterhäuschen im Kiefernforst. Seine erste Frau <strong>Minna</strong>, mit der ihn eine <strong>innige, geistige Liebe</strong> verbindet, stirbt bei der Geburt des Sohnes <strong>Tobias</strong>. Um Tobias zu versorgen, heiratet Thiel die grobe, sinnliche Kuhmagd <strong>Lene</strong> — nicht aus Liebe, sondern weil er sie braucht; ihrer <strong>sexuellen Macht</strong> fühlt er sich „machtlos ausgeliefert". In der Wärterbude hält er heimlich einen <strong>Totenkult</strong> für Minna ab und gerät dabei in Trance, bis er die Tote zu sehen glaubt.</p>
            </div>
            <div class="theory-box">
                <h4>Teil 2 — Eskalation: der Acker</h4>
                <p>Lene misshandelt den schwächlichen Tobias; Thiel <strong>sieht es, kann aber nicht eingreifen</strong> und verdrängt seine Wut. In den einsamen Nachtdiensten häufen sich <strong>Angstanfälle und Wahnvorstellungen</strong> — die Natur spiegelt seinen Seelenzustand. Thiel bekommt einen <strong>Kartoffelacker</strong> neben der Bude geschenkt; Lene begleitet ihn mit den Kindern, um ihn zu bestellen. Thiel warnt sie, Tobias von den Gleisen fernzuhalten.</p>
            </div>
            <div class="theory-box">
                <h4>Teil 3 — Die Katastrophe</h4>
                <p>Genau das Gefürchtete geschieht: <strong>Tobias gerät unter den Zug</strong> und wird tödlich verletzt. Thiel bricht zusammen; im Wahn fleht er die tote Minna an und verspricht, Lene zu töten. Tobias stirbt. In der Nacht <strong>erschlägt Thiel Lene und das gemeinsame Kleinkind</strong>. Man findet ihn am nächsten Tag an der Unglücksstelle und weist ihn in die <strong>psychiatrische Anstalt</strong> ein.</p>
            </div>
            <div class="theory-box">
                <h4>Aufbau</h4>
                <p><strong>Drei Teile</strong>, chronologisch-linear, mit deutlicher <strong>Steigerung</strong> und vielen <strong>Vorausdeutungen</strong> auf die Katastrophe. Ruhe (Natur, Idylle) und Gewalt (Maschine, Mord) sind kontrastreich verschränkt.</p>
            </div>
            <div class="bac-wissen">Dreiteilung + Steigerung bis zur Katastrophe = răspuns clasic la „Aufbau". Reține contrastul Ruhe ↔ Gewalt și mulțimea de Vorausdeutungen.</div>
        </div>
    </div>

    <!-- 2: Die Figuren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 Die Figuren verstehen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">

            <div class="theory-box">
                <h4>👤 Thiel — der Protagonist (Antiheld)</h4>
                <p><em>Ein sensibler und zugleich grober Mann, dessen gespaltene Seele am Ende zerbricht — eher Getriebener als Täter.</em></p>
                <div class="merkmale">
                    <span class="chip plus">pflichtbewusst</span><span class="chip plus">fromm</span><span class="chip plus">fürsorglicher Vater</span><span class="chip plus">treu (Minna)</span>
                    <span class="chip minus">willensschwach</span><span class="chip minus">triebgesteuert</span><span class="chip minus">verdrängend</span><span class="chip minus">realitätsverlierend</span>
                </div>
                <p>Äußerlich von „<strong>herkulischer Gestalt</strong>", ordentlich und gepflegt; seine Arbeit verrichtet er „<strong>mechanisch</strong>" und routiniert. Er ist religiös, mit einem <strong>Hang zur Mystik</strong>. Innerlich aber ist er <strong>gespalten</strong>: geistige Treue zu Minna ↔ sexuelle Hörigkeit zu Lene. Mit der Zeit verliert er die Kraft, Tobias zu schützen, und gleitet in Wahnvorstellungen.</p>
                <div class="bac-wissen">Thiel ist <strong>nicht einfach „böse"</strong>: Sein Mord ist Folge von <strong>Trieb, Milieu und Krankheit</strong> (Realitätsverlust) — typisch naturalistischer <strong>Determinismus</strong>. Tragische Figur.</div>
            </div>

            <div class="theory-box">
                <h4>👤 Minna &amp; Lene — die Gegenspielerinnen</h4>
                <p><strong>Minna</strong> (1. Frau): zart, vergeistigt; mit ihr verbindet Thiel eine <strong>geistige Liebe</strong>. Nach ihrem Tod wird sie zur <strong>idealisierten Lichtgestalt</strong>, die ihm in Visionen erscheint — sie verkörpert Seele, Erinnerung, das „Heilige".</p>
                <p><strong>Lene</strong> (2. Frau, Kuhmagd): robust, herrisch, eine „<strong>dominante Furie</strong>"; eine tüchtige Haushälterin, aber <strong>brutal</strong> zu Tobias. Sie verkörpert <strong>Körper, Trieb und Naturgewalt</strong>; an ihre sexuelle Anziehung ist Thiel hilflos gebunden.</p>
                <div class="bac-wissen">Minna ↔ Lene = <strong>Geist ↔ Trieb</strong>, Vergangenheit ↔ Gegenwart, Seele ↔ Körper. Dieser Gegensatz ist die Achse von Thiels innerer Spaltung.</div>
            </div>

            <div class="theory-box">
                <h4>👤 Tobias &amp; das Kind</h4>
                <p><strong>Tobias</strong>: Minnas schwächlicher, „entwicklungsgestörter" Sohn — von Lene misshandelt, von Thiel innig geliebt. Wenn der Junge sagt, er wolle „Bahnmeister" werden, strahlt Thiel „<strong>von innerer Glückseligkeit</strong>". Tobias wird <strong>vom Zug getötet</strong> → das unschuldige Opfer der Maschine.</p>
                <p><strong>Das Kleinkind</strong> (Lenes Sohn): Frucht der Trieb-Ehe; Thiel tötet es im Wahn zusammen mit Lene.</p>
            </div>

            <div class="theory-box">
                <h4>🔗 Figurenkonstellation</h4>
                <div class="konstell">
                    <div class="konstell-center">THIEL (gespalten)</div>
                    <div class="konstell-card"><div class="kf">Minna †</div><div class="kb">1. Frau · Geist, Erinnerung, Totenkult 🕯️</div></div>
                    <div class="konstell-card"><div class="kf">Lene</div><div class="kb">2. Frau · Trieb, Macht, Gewalt 🔥</div></div>
                    <div class="konstell-card"><div class="kf">Tobias</div><div class="kb">Minnas Sohn · innig geliebt 💚 — Opfer des Zuges</div></div>
                    <div class="konstell-card"><div class="kf">Lene ⚔ Tobias</div><div class="kb">Misshandlung 💢</div></div>
                    <div class="konstell-card"><div class="kf">die Maschine / der Zug</div><div class="kb">Schicksal &amp; zerstörende Gewalt 🚂</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Themen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 Die wichtigsten Themen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>1. Determinismus: Milieu &amp; Trieb</h4>
                <p>Grundgedanke des Naturalismus: Der Mensch ist von <strong>Vererbung, Milieu und Trieben bestimmt</strong>. Thiel ist seinem <strong>Sexualtrieb</strong> zu Lene „machtlos ausgeliefert" und kann dem inneren Druck nicht entkommen — sein Handeln ist nicht frei, sondern <strong>verursacht</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>2. Pflicht vs. Trieb — die gespaltene Seele</h4>
                <p>Thiel führt ein <strong>Doppelleben</strong>: geistige Treue zur toten Minna gegen die körperliche Hörigkeit zu Lene. Diese <strong>Spaltung</strong>, die er jahrelang verdrängt, bricht nach Tobias' Tod als <strong>Wahnsinn</strong> auf.</p>
            </div>
            <div class="theory-box">
                <h4>3. Mensch gegen Maschine (Natur vs. Technik)</h4>
                <p>Die <strong>Eisenbahn</strong> zerreißt die heilige Stille des Waldes: „Lautlos und feierlich vollzog sich das erhabene Schauspiel" — dann „zerriss die Stille. Ein rasendes Tosen und Toben". Der Zug erscheint als <strong>Ungetüm</strong> mit roten „Glotzaugen", das den Regen „in Blutstropfen" verwandelt. Die <strong>Maschine bringt Unheil</strong> — sie tötet Tobias.</p>
            </div>
            <div class="theory-box">
                <h4>4. Natur als Spiegel der Seele</h4>
                <p>Thiels verdrängtes Innenleben zeigt sich in <strong>Naturbildern</strong>: nach Tobias' Misshandlung glüht der Sonnenuntergang in „purpurner" Wut und „Verwesungslicht"; in der Angstnacht tobt ein Gewitter; im Glück mit Tobias spannt sich der Himmel als „makellos blaue Kristallschale". Die Natur wird zum <strong>offenbarenden Spiegel</strong> (impressionistisch).</p>
            </div>
            <div class="theory-box">
                <h4>5. Religion, Totenkult &amp; Schuld</h4>
                <p>Thiels Frömmigkeit kippt in einen privaten <strong>Totenkult</strong> für Minna (Mystik, Trance, Visionen). Die <strong>Schuldfrage</strong> bleibt ambivalent: Thiel ist Mörder, doch Trieb, Milieu und Geisteskrankheit machen ihn zugleich zum <strong>Opfer determinierender Kräfte</strong>.</p>
            </div>
            <div class="strategie">La BAC: cuplează fiecare temă cu O scenă + UN Zitat. „Erklären Sie mit Textbeispielen" = exact asta cere.</div>
        </div>
    </div>

    <!-- 4: Symbole -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎭 Symbole &amp; Motive leicht erklärt</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <table class="theory-table">
                    <thead><tr><th>Symbol / Motiv</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">die Eisenbahn / „die Maschine"</td><td>zentrales Symbol: <strong>Technik, Schicksal, brutale (dämonische) Gewalt</strong>; „Glotzaugen", „Blutregen", Ungetüm. Sie zerstört die Naturidylle und tötet Tobias.</td></tr>
                        <tr><td class="nomen">die Kiefernheide / der Wald</td><td>die <strong>Natur</strong> — schön, „heilig", aber auch Raum des <strong>Unbewussten</strong>; Stimmungs- und Seelenraum.</td></tr>
                        <tr><td class="nomen">das Wärterhäuschen</td><td>Thiels <strong>Innenwelt</strong>: geheiligter Erinnerungsraum für Minna (Totenkult) — und doch dringt Lene/der Trieb ein.</td></tr>
                        <tr><td class="nomen">Minna</td><td><strong>Lichtgestalt</strong> der Seele und Erinnerung; erscheint in Visionen — das Gegenbild zur sinnlichen Lene.</td></tr>
                        <tr><td class="nomen">Farben &amp; Licht (rot/schwarz/purpur)</td><td>impressionistische <strong>Spiegelung der Psyche</strong>: Purpur = Wut, „Verwesungslicht" = Tod/Verzweiflung, blauer Himmel = Glück.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="strategie">Simbolul-vedetă e MAȘINA (om vs. tehnică). Al doilea pilon e „Natur als Spiegel der Seele" — exemplifică mereu cu o scenă de peisaj.</div>
        </div>
    </div>

    <!-- 5: Aufbau & Erzähltechnik -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏗️ Aufbau und Erzähltechnik</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>Erzählweise &amp; Mittel</h4>
                <ul>
                    <li><strong>Er-Erzähler</strong> mit naturalistischer <strong>Detailgenauigkeit</strong> (Milieu, Körper, Soziales).</li>
                    <li><strong>Impressionistische Stimmungs- und Naturbilder</strong>: Farben, Licht und Klang machen Thiels Seelenzustand sichtbar („Natur als Spiegel der Seele").</li>
                    <li><strong>Symbolistik &amp; Vorausdeutung:</strong> die Maschine, Minna, die Gewitter kündigen die Katastrophe an.</li>
                    <li><strong>Kontrasttechnik:</strong> Ruhe/„heil'ge Schweigen" ↔ Lärm/„Tosen und Toben"; Geist (Minna) ↔ Trieb (Lene).</li>
                    <li><strong>Steigerung</strong> in drei Teilen bis zum Wahnsinn und Mord.</li>
                </ul>
            </div>
            <div class="bac-wissen">Tocmai amestecul de stiluri (Naturalismus + Impressionismus + Symbolismus) face din „Bahnwärter Thiel" o operă de <strong>Übergang</strong> — bun de menționat la Epoche/Erzähltechnik.</div>
        </div>
    </div>

    <!-- 6: Sprache & Stil -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>✒️ Sprache und Stil</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Stilmittel (mit Belegen)</h4>
                <table class="theory-table">
                    <thead><tr><th>Merkmal</th><th>Beleg / Funktion</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">Detailrealismus</td><td>genaue Milieu- und Körperschilderung („herkulische Gestalt", Routine „mechanisch")</td></tr>
                        <tr><td class="nomen">Personifikation der Maschine</td><td>der Zug als Ungetüm mit „Glotzaugen" — Technik als dämonische Kraft</td></tr>
                        <tr><td class="nomen">Farb- &amp; Lichtmetaphorik</td><td>Purpur, „Verwesungslicht", „Blutregen", blaue „Kristallschale" — Seele im Naturbild</td></tr>
                        <tr><td class="nomen">Kontrast (ruhig ↔ grell)</td><td>„erhabene Schauspiel" / „heil'ge Schweigen" ↔ „rasendes Tosen und Toben"</td></tr>
                        <tr><td class="nomen">Vorausdeutung / Symbol</td><td>Gewitter, Maschine, Visionen kündigen Tobias' Tod und den Wahnsinn an</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="bac-wissen">Naturalismus will die Wirklichkeit „wissenschaftlich" genau abbilden („novellistische Studie"). Hauptmann geht aber weiter: Stimmung und Symbol öffnen das Innenleben — fast schon Psychologie der Moderne.</div>
        </div>
    </div>

    <!-- 7: Interpretation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 Interpretation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="theory-box">
                <h4>Der zentrale Konflikt</h4>
                <p><strong>Pflicht gegen Trieb.</strong> Thiels verdrängte Spaltung zwischen der vergeistigten Minna und der sinnlichen Lene zerbricht nach dem Tod des Kindes in Wahnsinn und Mord. Der Mensch erscheint <strong>ohnmächtig</strong> gegenüber Trieb, Milieu und Technik.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselpunkte</h4>
                <ul>
                    <li><strong>Warum Naturalismus:</strong> Determinismus (Milieu, Vererbung, Trieb), einfaches Milieu, „wissenschaftlich" genaue „Studie", der Mensch den Naturgesetzen unterworfen.</li>
                    <li><strong>Warum „Übergang":</strong> Impressionismus (Sinneseindrücke, Stimmung) und Symbolismus (Maschine, Minna) sowie die Darstellung des <strong>Unbewussten</strong> sprengen den reinen Naturalismus.</li>
                    <li><strong>Mensch &amp; Maschine:</strong> die Technik als zerstörerische Gegenmacht zur „heiligen" Natur — Kritik an der Industrialisierung.</li>
                    <li><strong>Schuldfrage:</strong> Thiel ist Täter <em>und</em> Opfer — der Determinismus relativiert seine Schuld.</li>
                </ul>
            </div>
            <div class="bac-wissen">Cele mai probabile subiecte: „Mensch und Maschine / Natur und Technik", „Thiels gespaltene Persönlichkeit (Minna vs. Lene)" și „Naturalismus-Merkmale + Grenzen (Übergang)".</div>
        </div>
    </div>
`;

// ============================================
// BAC-TRAINING (Prüfungsfragen + Musterantwort) + SCHREIBVORLAGEN
// ============================================
const trainingHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Citește întrebarea, <strong>gândește singur</strong> răspunsul — apoi compară cu Musterantwort. Schreibvorlagen-urile de jos îți dau structura gata pentru fiecare subiect.</div>
        </div>
    </div>

    <h4 style="color:#065f46; margin:14px 0 8px;">🎯 Häufige Prüfungsfragen mit Musterantworten</h4>

    <div class="theory-box">
        <p><strong>1. Worum geht es in „Bahnwärter Thiel"? (Inhaltswiedergabe)</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m1')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m1">In Gerhart Hauptmanns Novelle <em>Bahnwärter Thiel</em> (1888) verliert der fromme Bahnwärter Thiel seine geliebte erste Frau Minna und heiratet aus Vernunft die grobe Kuhmagd Lene, der er sexuell hörig ist. Lene misshandelt seinen Sohn Tobias; Thiel verdrängt seine Wut und verfällt in Wahnvorstellungen. Als Tobias vom Zug überfahren wird und stirbt, tötet Thiel im Wahn Lene und das gemeinsame Kind und wird in eine Irrenanstalt eingewiesen.</div>
    </div>

    <div class="theory-box">
        <p><strong>2. Welcher Epoche gehört das Werk an — und woran erkennt man das?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m2')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m2">Dem <strong>Naturalismus</strong>. Merkmale: <strong>Determinismus</strong> (Milieu, Vererbung, Trieb), ein einfaches, soziales Milieu, eine „wissenschaftlich" genaue „<strong>novellistische Studie</strong>" und detailgenaue Wirklichkeitsschilderung. Zugleich zeigt das Werk <strong>impressionistische und symbolistische</strong> Züge (Stimmungsbilder, Symbole, das Unbewusste) → es gilt als <strong>Übergangswerk</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>3. Charakterisieren Sie Thiel.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m3')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m3">Thiel ist äußerlich von „<strong>herkulischer Gestalt</strong>", ordentlich, fromm und ein <strong>fürsorglicher Vater</strong>, der seine Arbeit „mechanisch" verrichtet. Innerlich ist er <strong>gespalten</strong>: geistige Treue zur toten Minna gegen die sexuelle Hörigkeit zu Lene. Er ist <strong>willens- und widerstandsschwach</strong>, verdrängt seine Gefühle und verliert schließlich den Bezug zur Realität — eine <strong>tragische Figur</strong>, deren Mord aus Trieb, Milieu und Krankheit erwächst.</div>
    </div>

    <div class="theory-box">
        <p><strong>4. Vergleichen Sie Minna und Lene.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m4')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m4"><strong>Minna</strong> (1. Frau) verkörpert <strong>Geist, Seele und Erinnerung</strong>; nach ihrem Tod wird sie zur idealisierten Lichtgestalt. <strong>Lene</strong> (2. Frau, Kuhmagd) verkörpert <strong>Körper, Trieb und Naturgewalt</strong> — grob, herrisch und brutal zu Tobias. Der Gegensatz <strong>Geist ↔ Trieb</strong> ist die Achse von Thiels innerer Spaltung.</div>
    </div>

    <div class="theory-box">
        <p><strong>5. Welche Bedeutung hat die Eisenbahn / „die Maschine"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m5')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m5">Die Eisenbahn ist das <strong>zentrale Symbol</strong>: Sie steht für <strong>Technik, Schicksal und zerstörerische Gewalt</strong>. Sie zerreißt die „heilige" Stille der Natur — „dann zerriss die Stille. Ein rasendes Tosen und Toben" — und erscheint als <strong>Ungetüm</strong> mit roten „Glotzaugen", das den Regen „in Blutstropfen" verwandelt. Am Ende tötet sie Tobias: <strong>die Technik bringt dem Menschen Unheil</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>6. Erklären Sie „Natur als Spiegel der Seele".</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m6')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m6">Thiels verdrängtes Innenleben wird in <strong>Naturbildern</strong> sichtbar gemacht. Nach der Misshandlung von Tobias glüht der Sonnenuntergang „purpurn" (seine Wut) im „Verwesungslicht" (Todes- und Mordahnung); in der Angstnacht tobt ein <strong>Gewitter</strong>; im Glück mit Tobias spannt sich der Himmel als „makellos blaue Kristallschale". Die Natur wird so zum <strong>offenbarenden Spiegel</strong> der Psyche (impressionistisch).</div>
    </div>

    <div class="theory-box">
        <p><strong>7. Inwiefern ist Thiel schuldig?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m7')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m7">Thiel begeht einen <strong>Doppelmord</strong> und ist insofern Täter. Doch der Naturalismus relativiert die Schuld: Sein Handeln folgt aus <strong>Trieb</strong> (sexuelle Hörigkeit), <strong>Milieu</strong> (Armut, Einsamkeit, Überforderung) und einer <strong>Geisteskrankheit</strong> (Realitätsverlust). Er ist <strong>Täter und Opfer</strong> zugleich — Ausdruck des deterministischen Menschenbildes.</div>
    </div>

    <div class="theory-box">
        <p><strong>8. Charakterisieren Sie die Erzählweise.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m8')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m8"><strong>Er-Erzähler</strong> mit naturalistischer <strong>Detailgenauigkeit</strong>, verbunden mit <strong>impressionistischen Stimmungsbildern</strong> (Farbe, Licht, Klang) und <strong>symbolistischer Vorausdeutung</strong>. Typisch sind die <strong>Kontrasttechnik</strong> (Ruhe ↔ Lärm, Geist ↔ Trieb) und die <strong>Steigerung</strong> in drei Teilen bis zur Katastrophe.</div>
    </div>

    <div class="theory-box">
        <p><strong>9. Welche Funktion hat der Totenkult um Minna?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m9')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m9">Thiels Frömmigkeit kippt in einen privaten <strong>Totenkult</strong>: Im Wärterhäuschen hält er Zeremonien für die tote Minna ab und gerät in <strong>Trance</strong>, bis er sie zu sehen glaubt. Der Kult zeigt seine <strong>Realitätsflucht</strong> und seinen inneren Konflikt — die geistige Welt Minnas dient ihm als Gegenpol zur triebhaften Gegenwart mit Lene und bereitet den <strong>Realitätsverlust</strong> vor.</div>
    </div>

    <div class="theory-box">
        <p><strong>10. Deuten Sie den Schluss der Novelle.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m10')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m10">Nach Tobias' Tod bricht Thiels verdrängte <strong>Spaltung</strong> als Wahnsinn auf: Er tötet Lene und das Kind und wird auf den Schienen — am Ort der Katastrophe — gefunden und in die Anstalt eingewiesen. Der Schluss zeigt den Menschen als <strong>ohnmächtiges Opfer</strong> von Trieb, Milieu und Maschine. Eine „Lösung" oder Erlösung gibt es nicht — typisch für den <strong>pessimistischen Determinismus</strong> des Naturalismus.</div>
    </div>

    <h4 style="color:#065f46; margin:22px 0 8px;">✍️ Schreibvorlagen — Struktur für jedes Subiect</h4>

    <div class="vorlage">
        <h5>A) Charakterisierung (Subiect II) — Einleitung / Hauptteil / Schluss</h5>
        <div class="teil">Einleitung:</div>
        <p class="redemittel">„In Gerhart Hauptmanns Novelle <em>Bahnwärter Thiel</em> (1888), einem Hauptwerk des Naturalismus, spielt die Figur des/der … eine zentrale Rolle."</p>
        <div class="teil">Hauptteil (Redemittel):</div>
        <ul>
            <li class="redemittel">„Äußerlich / sozial wird … als … dargestellt."</li>
            <li class="redemittel">„Charakterlich zeichnet sich … durch … aus. Ein Beleg: ‚…'."</li>
            <li class="redemittel">„Im Laufe der Handlung entwickelt sich … von … zu …"</li>
            <li class="redemittel">„In den Beziehungen zu … zeigt sich …"</li>
        </ul>
        <div class="teil">Schluss:</div>
        <p class="redemittel">„Zusammenfassend dient die Figur Hauptmann dazu, … zu zeigen — eine tragische Figur, weil …"</p>
    </div>

    <div class="vorlage">
        <h5>B) Interpretation (Textstelle / Thema)</h5>
        <p class="redemittel">Einleitung: Werk/Autor/Jahr/Epoche + Einordnung der Stelle + Deutungshypothese.</p>
        <p class="redemittel">Hauptteil: „Auffällig ist das Symbol des/der …" · „Die Natur spiegelt hier Thiels Seelenzustand, indem …" · „Der Kontrast von Ruhe und Lärm zeigt …" · „Vor dem Hintergrund des Naturalismus bedeutet dies …"</p>
        <p class="redemittel">Schluss: „Die Analyse bestätigt, dass …"</p>
    </div>

    <div class="vorlage">
        <h5>C) Meinung / Stellungnahme (z. B. „Ist Thiel schuldig?")</h5>
        <p class="redemittel">„Einerseits … andererseits …" · „Dafür spricht …, dagegen lässt sich einwenden …" · <strong>immer mit Textbeleg!</strong></p>
        <p class="redemittel">Schluss: „Abschließend vertrete ich die Auffassung, dass … — denn im Naturalismus ist der Mensch von Trieb und Milieu bestimmt."</p>
    </div>

    <div class="strategie">La Subiect II structura aduce 5 puncte: Einleitung (Werk/Autor/Jahr) · Hauptteil cu Textbelege · Schluss cu părere proprie. Citează scena/contextul la fiecare Zitat!</div>
`;

// ============================================
// Toggle Musterantwort
// ============================================
function toggleMuster(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
}

// ============================================
// INJECTARE
// ============================================
(function () {
    function injectTheory() {
        const t = document.getElementById('theory-container');
        if (t) t.innerHTML = theoryHTML;
        const tr = document.getElementById('training-container');
        if (tr) tr.innerHTML = trainingHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();
