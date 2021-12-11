import Head from 'next/head';

import Header from '../components/Header/Header';
import RichText from '../components/RichText/RichText';
import BreadcrumbTitle from '../components/Title/BreadcrumbTitle';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Instrukcije - HES</title>
				<meta name="description" content="Mesto gde se najbrže prodaje i najjeftinije kupuje!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<BreadcrumbTitle title="Instrukcije" />
				<RichText>
					<p>
						30 artikla je maksimalan broj po prodavcu, nije uslov da imate 30 artikla kako bi učestvovali. Jedan kolaž
						može imati jedan artikal (npr. pantalone), a može imati i pantalone i majicu (koje mi u prodaji označavamo
						kao “komplet”) i oba komada moraju ići za jednu cenu. Iako su u drugom slučaju dva artikla na kolažu, mi to
						brojimo kao jedan, jer je sve na jednom kolažu. Tako da svaki prodavac može poslati 30 kolaža (a ukupan broj
						artikla može biti i npr 36).
					</p>
					<br></br>
					<p>
						Nije moguće na jednom kolažu imati npr. majicu a da piše dostupna S i M veličina. U tom slučaju biće
						neophodno da pravite zasebne kolaže za oba artikla osim ako ih ne prodajete u kompletu (koji smo prethodno
						pomenuli).
					</p>
					<br></br>
					<p>
						Kako bi sajt izgledao jednolično, a ponuda na njemu lepa za oko našim kupcima (što će rezultirati većoj
						prodaji), neophodno je da svi kolaži koji se na njemu nalaze budu pravljeni na isti način. Članica tima koja
						je zadužena za prijem kolaža prekontrolisaće sve kolaže koji pristignu i one koji ne budu pravljeni po ovim
						instrukcijama biće vraćeni, te je važno da ih u startu pravite kako treba da ne bi dodatno gubili vreme.
					</p>
					<br></br>
					<p>
						Ukoliko nemate vremena da sami pravite kolaže ili se ne snalazite najbolje u tome, uvodimo mogućnost da
						kolaže napravimo mi za Vas, a ta usluga se naplaćuje:
					</p>
					<br></br>
					<p>5 EUR za 15 kolaža</p>
					<p>10 EUR za 45 kolaža</p>
					<br></br>
					<p>Stvari koje želite da prodate ne moraju biti brendirane.</p>
					<br></br>
					<p>Svaki kolaž mora da ima:</p>
					<br></br>
					<ol>
						<li>brend (ako je stvar brendirana)</li>
						<li>model (haljina, majica, košulja…)*</li>
						<li>veličinu</li>
						<li>cenu (izraženu u EUR)</li>
						<li>stanje**</li>
						<li>HES broj</li>
					</ol>
					<br></br>
					<p>
						*neretko na slici majica izgleda kao haljina i obrnuto, a budući da preko slike ne možemo proceniti o kom
						modelu se radi, neophodno je da prodavac sam naglasi
					</p>
					<br></br>
					<p>
						**stanje artikla opisuje se isključivo u skladu sa našom legendom. Ukoliko je stvar “očuvana” nemojte
						dodavati prefiks (super/odlično očuvana itd). Dovoljno je da napišete samo tu reč, a kupci će u skladu sa
						legendom tačno znati kakvo stanje artikla mogu da očekuju.
					</p>
					<br></br>
					<p>
						U online prodaji slika je najvažnija, zato savetujemo svim prodavcima da se stave u poziciju kupca i kada
						fotografišu artikal zapitaju se da li bi ga oni kupili da ga vide u takvom stanju na slici. Zamislite da
						objavimo kolaž na kojem piše brend, veličina i cena, a nema slike. Kakva god da je cena niko ne bi poručio
						zato što ne vidi šta kupuje. Isto tako, ako slikate jednu sliku mutne kamere, a artikal je izgužvan i slika
						mračna, niko se neće odlučiti na kupovinu. Zapamtite, ako što Vi znate kako artikal izgleda uživo i kako
						stoji, kupac sa druge strane ekrana to nikako ne može znati, zato se potrudite da mu slikom bliže dočarate
						stvarno stanje i izgled. Garantujemo da će prodaja biti uspešna.
					</p>
					<br></br>
					<p>
						Da sumiramo: artikal slikate čist i ispeglan, na beloj pozadini i na dnevnom svetlu ukoliko Vam vreme
						dozvoli.
					</p>
					<br></br>
					<p>
						Aplikaciju za pravljenje kolaža možete izabrati sami (instagram Story NIJE opcija), a možete koristiti i
						Photo Grid, mi je koristimo, besplatna je. U našim highlights-ima na profilu možete pronaći upustvo kako da
						napravite kolaž tačno po našim instrukcijama. Kada je u pitanju tehnička strana kolaža, on mora biti u
						formatu kocke (nikako pravougaonik); background (tj. pozadina) kolaža mora biti bela; slova kojima pišete
						crna.
					</p>
					<br></br>
					<p>Svaki kolaž treba imati minimalno 2 slike (prednja i zadnja strana), a maksimalno 3 slike artikla.</p>
					<br></br>
					<p>
						<strong>BONUS SAVET</strong>
					</p>
					<br></br>
					<p>
						Kada kupovina na HES-u počne, već u prvim minutima broj prodatih artikla prelazi 100, budite svesni da kupci
						nemaju vremena da postavljaju dodatne upite (koja je dužina haljine, koji je materijal, koja je dužina
						gazišta itd.). Ukoliko Vam je stalo da Vaše učešće bude uspešno, potrudite se i pomozite kupcima da u što
						kraćem roku mogu da donesu odluku jer će na Vašem kolažu biti odgovoreno unapred na sva njihova pitanja.
						npr. Neko nosi S, ali ima veće grudi pa mu je bitna ta mera, neko je alergičan na veštačke materijale pa
						recimo ne bi kupovao sintetiku, neko je visok pa se boji da haljina neće biti prekratka, neko nosi 38 ali
						dužina gazišta varira od brenda pa je to presudan detalj za kupovinu… razmislite o tome kada pravite kolaže.
					</p>
					<br></br>
					<p>U nastavku teksta pronaći ćete posebne instrukcije za svaki HES.</p>
					<br></br>
					<p>
						Nedeljna prodaja (za učešće se uplaćuje kotizacija po <a>cenovniku</a>, prodaja traje 5 dana):
					</p>
					<br></br>
					<ul>
						<a>
							<li>ženski HES do 20 EUR</li>
						</a>
						<a>
							<li>dečiji HES do 20 EUR</li>
						</a>
					</ul>
					<br></br>
					<p>
						Mesečna prodaja (za učešće se NE uplaćuje kotizacija, već ostaje provizija po prodatom artiklu, prodaja
						traje mesec dana):
					</p>
					<br></br>
					<ul>
						<a>
							<li>ženski HES do 50 EUR</li>
						</a>
						<a>
							<li>dečiji HES do 100 EUR</li>
						</a>
						<a>
							<li>dečiji HES do 200 EUR</li>
						</a>
						<a>
							<li>dečiji HES do 300 EUR</li>
						</a>
					</ul>
					<br></br>
					<ul>
						<a>
							<li>dečija oprema do 200 EUR</li>
						</a>
					</ul>
					<br></br>
					<p>
						<strong>Ženski HES do 20EUR</strong>
					</p>
					<br></br>
					<p>
						U okviru ove prodaje možete se prijaviti i ponuditi i artikle do 10 EUR i kotizacija za to iznosi 10 EUR –
						30 artikla.
					</p>
					<br></br>
					<p>
						<strong>Dečiji HES do 20EUR</strong>
					</p>
					<br></br>
					<p>U okviru dečijeg HES-a do 20 EUR možete uplatiti kotizaciju od:</p>
					<br></br>
					<p>5 EUR i poslati 15 kolaža do 5 EUR vrednosti,</p>
					<p>10 EUR i poslati 30 kolaža do 10 EUR vrednosti,</p>
					<p>20 EUR i poslati 45 kolaža do 20E UR vrednosti.</p>
					<br></br>
					<p>
						Jedina dodatna stavka ovde odnosi se na veličinu dečije odeće. Svaki brend ima svoje veličine u
						centrimetima, pa će tako npr Zara odeća za uzrast od 9-12 meseci biti 80cm, dok je kod H&M-a dužina od 74cm
						namenjena za uzrast od 12 meseci. Zato je važno da napišete oba podatka (ako znate), a ako ne znate onda je
						važnija dužina u cm. Takođe, možete dopisati i napomenu npr. naznačeno za 2 godine ali može se nositi do 3,
						ili naznačeno do 2 godine, ali odgovara za manji uzrast.
					</p>
					<br></br>
					<p>
						<strong>MESEČNA PONUDA DO 50, 100, 200 I 300 EUR</strong>
					</p>
					<br></br>
					<p>
						Ukoliko želite da se Vaši artikli nađu u našoj mesečnoj ponudi, prijavite se nedelju dana pre nego što mesec
						počne (npr. poslednje nedelje jula za avgust). Svaki prodavac ima pravo da pošalje maksimalno 20 artikla u
						okviru svake od ovih ponuda. To znači da možete poslati npr. 2 artikla do 50 EUR, 20 artikla do 100 EUR i 1
						artikal do 300 EUR. Kotizaciju za mesečni HES ne uplaćujete unapred, već se za prva tri prodata artikla
						odbija naša provizija koja u nastavku sledi.
					</p>
					<br></br>
					<p>
						<strong>HES DO 50 EUR – provizija za prva tri prodata artikla</strong>
					</p>
					<br></br>
					<ol>
						<li>5 EUR od vrednosti proizvoda</li>
						<li>10 EUR od vrednosti proizvoda</li>
						<li>15 EUR od vrednosti proizvoda</li>
					</ol>
					<br></br>
					<p>
						<strong>HES DO 100 EUR – provizija za prva tri prodata artikla</strong>
					</p>
					<br></br>
					<ol>
						<li>10 EUR od vrednosti proizvoda</li>
						<li>15 EUR od vrednosti proizvoda</li>
						<li>20 EUR od vrednosti proizvoda</li>
					</ol>
					<br></br>
					<p>
						<strong>HES DO 200 EUR – provizija za prva tri prodata artikla</strong>
					</p>
					<br></br>
					<ol>
						<li>15 EUR od vrednosti proizvoda</li>
						<li>20 EUR od vrednosti proizvoda</li>
						<li>25 EUR od vrednosti proizvoda</li>
					</ol>
					<br></br>
					<p>
						<strong>HES DO 300 EUR – provizija za prva tri prodata artikla</strong>
					</p>
					<br></br>
					<ol>
						<li>20 EUR od vrednosti proizvoda</li>
						<li>25 EUR od vrednosti proizvoda</li>
						<li>30 EUR od vrednosti proizvoda</li>
					</ol>
					<br></br>
					<p>
						Gore navedene provizije NE DODAJU se na Vaše cene, već se odbijaju kao što su navedene u skladu sa time
						koliko artikla prodate. Provizija ostaje nama SAMO za prva tri prodata artikla (iako ste poslali 20 artikla
						na prodaju), sve što se dalje proda ide samo Vama.
					</p>
					<br></br>
					<p>
						Svi artikli koje ste ponudili u jednom mesecu na kraju istog se povlače iz prodaje. Tokom trajanja prodaje
						možete izabrati do 5 artikla kojima želite da umanjite cenu. Kada se mesec završi možete ponovo učestvovati
						u novom mesečnom HES-u ali sa drugim artiklima, ili ukoliko želite da isti ostanu na sajtu neophodno je
						korigovati cenu 10-15%. Ukoliko ipak želite da artikli ostanu i sledeći mesec po punim cenama, neophodno je
						uplatiti 10EUR za obnovu svih tih oglasa.
					</p>
					<br></br>
				</RichText>
				<RichText>
					<p>
						Dečija oprema do 100 EUR vrednosti ostaje u okviru mesečne ponude, dok oprema do 200EUR vrednosti za koju
						ste uplatili kotizaciju ostaje na našem sajtu 3 meseca.
					</p>
					<br></br>
					<br></br>
				</RichText>
			</main>

			<footer></footer>
		</div>
	);
}
