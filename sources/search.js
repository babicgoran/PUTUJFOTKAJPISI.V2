// SEARCH DESTINATIONS

var INPUT = document.querySelector('.searchbar__input')
var LIST = document.querySelector('.js-search-list')

var destinations = [
  { city: 'KRUMLOV', country: 'ČEŠKA REPUBLIKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/ceska/krumlov/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/krumlov.jpg' },
  { city: 'PRAG', country: 'ČEŠKA REPUBLIKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/ceska/prag/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/prag.jpg' },
  { city: 'PARIZ', country: 'FRANCUSKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/francuska/pariz/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/pariz.jpg' },
  { city: 'KOUFONISI', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/koufonisi/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koufonisi.jpg' },
  { city: 'LEFKADA', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/lefkada/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/lefkada.jpg' },
  { city: 'MIKONOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/mikonos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/mikonos.jpg' },
  { city: 'NAKSOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/naksos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/naksos.jpg' },
  { city: 'PAROS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/paros/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/paros.jpg' },
  { city: 'RODOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/rodos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/rodos.jpg' },
  { city: 'SANTORINI', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/Destinacije/grcka/santorini/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/santorini.jpg' },
  { city: 'PORTOFINO', country: 'ITALIJA', url: 'https://www.putujfotkajpisi.rs/Destinacije/italija/portofino/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/portofino.jpg' },
  { city: 'BERLIN', country: 'NEMAČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/nemacka/berlin/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/berlin.jpg' },
  { city: 'LISABON', country: 'PORTUGAL', url: 'https://www.putujfotkajpisi.rs/Destinacije/portugal/lisabon/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/lisabon.jpg' },
  { city: 'PORTO', country: 'PORTUGAL', url: 'https://www.putujfotkajpisi.rs/Destinacije/portugal/porto/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/porto.jpg' },
  { city: 'MOSKVA', country: 'RUSIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/rusija/moskva/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/moskva.jpg' },
  { city: 'DEL. PEŠČARA', country: 'SRBIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/srbija/deliblatska_pescara/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/deliblatska-pescara.jpg' },
  { city: 'STARA PLANINA', country: 'SRBIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/srbija/stara_planina/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/stara-planina.jpg' },
  { city: 'TAJLAND SAVETI', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/tajland.jpg' },
  { city: 'BANGKOK', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Bangkok/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/bangkok.jpg' },
  { city: 'KOH LANTA', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Koh_Lanta/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-lanta.jpg' },
  { city: 'KOH PHANGAN', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Koh_Phangan/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-phangan.jpg' },
  { city: 'KOH SAMUI', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Koh_Samui/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-samui.jpg' },
  { city: 'KRABI', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Krabi/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/krabi.jpg' },
  { city: 'PHUKET ', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/Destinacije/Tajland/Phuket/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/phuket.jpg' },
  { city: 'TUNIS GRAD', country: 'TUNIS', url: 'https://www.putujfotkajpisi.rs/destinacije/tunis/grad_tunis/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/tunis.jpg' },
  { city: 'ISTANBUL', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/istanbul/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/istanbul.jpg' },
  { city: 'KAPADOKIJA', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/kapadokija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/kapadokija.jpg' },
  { city: 'OLUDENIZ', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/oludeniz/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/oludeniz.jpg' },
  { city: 'FUERTEVENTURA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/Destinacije/spanija/fuerteventura/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/fuerteventura.jpg' },
  { city: 'MADRID', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/Destinacije/spanija/madrid/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/madrid.jpg' },
  { city: 'SEGOVIJA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/Destinacije/spanija/segovija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/segovija.jpg' },
  { city: 'VALENSIJA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/Destinacije/spanija/valensija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/valensija.jpg' },
  { city: 'DUBAI', country: 'UAE', url: 'https://www.putujfotkajpisi.rs/destinacije/uae/dubai/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/dubai.jpg' },
]

function search(el) {
  var query = el.toUpperCase();
  var founded = destinations.filter(destination => (destination.city.slice(0, query.length) === query) || (destination.country.slice(0, query.length) === query));


  if (founded.length > 0) {
    write(founded);
  } else {
    write(destinations)
  }
}

function write(founded) {
  removeSearch();

  founded.map(destination => {
    const listItem = document.createElement('a');
    listItem.classList = 'item'
    listItem.href = destination.url
    const img = document.createElement('img');
    img.classList = 'item__photo'
    const title = document.createElement('h2');
    title.classList = 'item__title'

    img.src = destination.photo;
    title.textContent = destination.city;

    listItem.appendChild(img);
    listItem.appendChild(title);

    LIST.appendChild(listItem);
  })
}

function removeSearch() {
  while (LIST.firstChild) {
    LIST.removeChild(LIST.firstChild);
  }
}

INPUT.addEventListener('input', (e) => {
  const query = e.target.value;

  query.length === 0 ? write(destinations) : search(query);
})

