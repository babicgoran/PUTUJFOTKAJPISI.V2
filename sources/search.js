// SEARCH DESTINATIONS

var INPUT = document.querySelector('.searchbar__input')
var LIST = document.querySelector('.js-search-list')

var destinations = [
  { city: 'SANTORINI', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/santorini/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/santorini.jpg' },
  { city: 'IZLETI SRBIJA', country: 'SRBIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/srbija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/golubac.jpg' },
  { city: 'TAJLAND', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/tajland.jpg' },
  { city: 'KAPADOKIJA', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/kapadokija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/kapadokija.jpg' },
  { city: 'LISABON', country: 'PORTUGAL', url: 'https://www.putujfotkajpisi.rs/destinacije/portugal/lisabon/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/lisabon.jpg' },
  { city: 'LEFKADA', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/lefkada/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/lefkada.jpg' },
  { city: 'VALENSIJA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/spanija/valensija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/valensija.jpg' },
  { city: 'MOSKVA', country: 'RUSIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/rusija/moskva/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/moskva.jpg' },
  { city: 'KOH PHANGAN', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/koh_phangan/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-phangan.jpg' },
  { city: 'KRUMLOV', country: 'ČEŠKA REPUBLIKA', url: 'https://www.putujfotkajpisi.rs/destinacije/ceska/krumlov/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/krumlov.jpg' },
  { city: 'PRAG', country: 'ČEŠKA REPUBLIKA', url: 'https://www.putujfotkajpisi.rs/destinacije/ceska/prag/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/prag.jpg' },
  { city: 'PARIZ', country: 'FRANCUSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/francuska/pariz/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/pariz.jpg' },
  { city: 'IOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/ios/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/ios.jpeg' },
  { city: 'KOUFONISI', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/koufonisi/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koufonisi.jpg' },
  { city: 'MIKONOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/mikonos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/mikonos.jpg' },
  { city: 'NAKSOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/naksos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/naksos.jpg' },
  { city: 'PAROS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/paros/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/paros.jpg' },
  { city: 'RODOS', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/rodos/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/rodos.jpg' },
  { city: 'PORTOFINO', country: 'ITALIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/italija/portofino/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/portofino.jpg' },
  { city: 'BERLIN', country: 'NEMAČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/nemacka/berlin/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/berlin.jpg' },
  { city: 'PORTO', country: 'PORTUGAL', url: 'https://www.putujfotkajpisi.rs/destinacije/portugal/porto/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/porto.jpg' },
  { city: 'BANGKOK', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/bangkok/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/bangkok.jpg' },
  { city: 'KOH LANTA', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/koh_lanta/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-lanta.jpg' },
  { city: 'KOH SAMUI', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/koh_samui/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/koh-samui.jpg' },
  { city: 'KRABI', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/krabi/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/krabi.jpg' },
  { city: 'PHUKET ', country: 'TAJLAND', url: 'https://www.putujfotkajpisi.rs/destinacije/tajland/phuket/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/phuket.jpg' },
  { city: 'TUNIS GRAD', country: 'TUNIS', url: 'https://www.putujfotkajpisi.rs/destinacije/tunis/grad_tunis/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/tunis.jpg' },
  { city: 'ISTANBUL', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/istanbul/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/istanbul.jpg' },
  { city: 'OLUDENIZ', country: 'TURSKA', url: 'https://www.putujfotkajpisi.rs/destinacije/turska/oludeniz/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/oludeniz.jpg' },
  { city: 'FUERTEVENTURA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/spanija/fuerteventura/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/fuerteventura.jpg' },
  { city: 'MADRID', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/spanija/madrid/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/madrid.jpg' },
  { city: 'SEGOVIJA', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/spanija/segovija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/segovija.jpg' },
  { city: 'DUBAI', country: 'UAE', url: 'https://www.putujfotkajpisi.rs/destinacije/uae/dubai/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/dubai.jpg' },
  { city: 'KARLOVE VARI', country: 'ČEŠKA REPUBLIKA', url: 'https://www.putujfotkajpisi.rs/destinacije/ceska/karlove_vari/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/karlove-vari.jpg' },
  { city: 'MALTA', country: 'MALTA', url: 'https://www.putujfotkajpisi.rs/destinacije/malta/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/malta.jpeg' },
  { city: 'KEFALONIJA', country: 'GRČKA', url: 'https://www.putujfotkajpisi.rs/destinacije/grcka/kefalonija/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/kefalonija.jpeg' },
  { city: 'TOLEDO', country: 'ŠPANIJA', url: 'https://www.putujfotkajpisi.rs/destinacije/spanija/toledo/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/toledo.jpeg' },
  { city: 'SINTRA', country: 'PORTUGAL', url: 'https://www.putujfotkajpisi.rs/destinacije/portugal/sintra/index.html', photo: 'https://www.putujfotkajpisi.rs/images/destinations/sintra.jpeg' },

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

