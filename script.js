const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = './recibo.json';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const recibo = request.response;
  populateHeader(recibo);
  showHeroes(recibo);
}

function populateHeader(jsonObj) {

  const recibo1 = document.createElement('h1');
  recibo1.textContent = 'Recibo';
  header.appendChild(recibo1);

  const rayitas = document.createElement('p');
  rayitas.textContent = '---------------------------------';
  header.appendChild(rayitas);

  const pedido1 = document.createElement('h2');
  pedido1.textContent = 'Pedido:  ';
  header.appendChild(pedido1);

  const pedidoid = document.createElement('h3');
  pedidoid.textContent = 'ID:  ' + jsonObj.Recibo.Pedido['ID'];
  header.appendChild(pedidoid);

  const pedidodetalles = document.createElement('h3');
  pedidodetalles.textContent = 'Detalles:  ' + jsonObj.Recibo.Pedido['Detalles'];
  header.appendChild(pedidodetalles);

  const pedidofecha = document.createElement('h3');
  pedidofecha.textContent = 'Fecha del pedido:  ' + jsonObj.Recibo.Pedido['Fecha del pedido'];
  header.appendChild(pedidofecha);

  const rayitas2 = document.createElement('p');
  rayitas2.textContent = '---------------------------------';
  header.appendChild(rayitas2);

  const socio1 = document.createElement('h2');
  socio1.textContent = 'Socio:';
  header.appendChild(socio1);

  const socioid = document.createElement('h3');
  socioid.textContent = 'ID:  ' + jsonObj.Recibo.Socio['ID'];
  header.appendChild(socioid);

  const socionom = document.createElement('h3');
  socionom.textContent = 'Nombre:  ' + jsonObj.Recibo.Socio['Nombre'];
  header.appendChild(socionom);

  const socioap = document.createElement('h3');
  socioap.textContent = 'Apellidos:  ' + jsonObj.Recibo.Socio['Apellidos'];
  header.appendChild(socioap);

  const sociodomi = document.createElement('h3');
  sociodomi.textContent = 'Domicilio:  ' + jsonObj.Recibo.Socio['Domicilio'];
  header.appendChild(sociodomi);
  
  const socioem = document.createElement('h3');
  socioem.textContent = 'Email:  ' + jsonObj.Recibo.Socio['email'];
  header.appendChild(socioem);

  const sociotelf = document.createElement('h3');
  sociotelf.textContent = 'Telf:  ' + jsonObj.Recibo.Socio['telefono'];
  header.appendChild(sociotelf);

  const rayitas3 = document.createElement('p');
  rayitas3.textContent = '---------------------------------';
  header.appendChild(rayitas3);

  const articulo1 = document.createElement('h2');
  articulo1.textContent = 'Árticulo:';
  header.appendChild(articulo1);

  const articuloid = document.createElement('h3');
  articuloid.textContent = 'ID:  ' + jsonObj.Recibo.Árticulo['ID Árticulo'];
  header.appendChild(articuloid);

  const articulonom = document.createElement('h3');
  articulonom.textContent = 'Nombre:  ' + jsonObj.Recibo.Árticulo['Nombre'];
  header.appendChild(articulonom);

  const articulodes = document.createElement('h3');
  articulodes.textContent = 'Descripción:  ' + jsonObj.Recibo.Árticulo['Apellidos'];
  header.appendChild(articulodes);

  const articuloma = document.createElement('h3');
  articuloma.textContent = 'Material:  ' + jsonObj.Recibo.Árticulo['Material'];
  header.appendChild(articuloma);
  
  const articuloco = document.createElement('h3');
  articuloco.textContent = 'Color:  ' + jsonObj.Recibo.Árticulo['Color'];
  header.appendChild(articuloco);

  const articulopre = document.createElement('h3');
  articulopre.textContent = 'Precio:  ' + jsonObj.Recibo.Árticulo['Precio'];
  header.appendChild(articulopre);
}


request.responseType = 'json';

request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const superHeroesText = request.response; // cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
