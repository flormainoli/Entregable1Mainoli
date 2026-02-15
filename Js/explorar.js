const cafes = [
  {
    nombre: "cuervo café",
    link: "https://www.cuervocafe.com/",
    img: ["cuervo1.png", "cuervo2.png", "cuervo3.png"],
    descripcion: "Cafetería de especialidad con granos de Colombia y Brasil. Se destacan con su creatividad de combinar granos con distintos sabores y texturas. Tiene opciones de desayuno, brunch y helado. Es muy concurrido, por lo que puede haber una espera, totalmente valiosa",
    platodestcado: "Chipa",
    tipocafe: "Moccaccino",
    ubi: "Juramento 1284",
    linkubi: "https://maps.app.goo.gl/8q83wLNLDbXKyTno7",
    menu:"https://cuervocafe.com/menu-espanol/",
    instagram:"cuervocafe",
    linkinstagram:"https://www.instagram.com/cuervocafe/",
    estrellas:"4.4",
},
  {
    nombre: "gorrión café",
     link: " https://gorrionbakery.com/",
    img: ["gorrion1.png", "gorrion2.png", "gorrion3.png"],
    descripcion: "Cafetería de especialidad y panadería artesanal, con varias sucursales en Buenos Aires. Ofrece pastelería casera y opciones para desayunos, brunch y almuerzos. Con opciones veganas y sin TACC.<br>Tiene un ambiente cálido y moderno. Es pet friendly y una excelente opción para trabajar tipo coffee office (buen Wi-Fi y tranquilidad).",
    platodestcado: "Avocado Toast",
    tipocafe: "Latte nutella",
    ubi: "Virrey Arredondo 2424",
    linkubi: "https://share.google/5VjRJC5fe4MDtLkwF",
    menu:"",
    instagram:"gorrion",
    linkinstagram:"https://www.instagram.com/gorrion.ar/?hl=es",
    estrellas:"4.6",
  },
  {
    nombre: "pocho café",
    link: "",
    img: ["pocho1.png", "pocho2.png", "pocho3.png"],
    descripcion:"Cafetería de especialidad, con los cafes típicos y variedad de Syrups. Se destaca por su propuesta original de sándwiches de chipa y croissants con rellenos abundantes y variados. Ofrece opciones para cualquier momento del día. Tiene un ambiente acogedor, con excelente luz natural, ideal para trabajar, es pet friendly. Cuenta con opciones veganas  y tragos.",
    platodestcado: "Sandwich de Chipa",
    tipocafe: "Macchiato",
    ubi: "11 de septiembre 1888 2490",
    linkubi: "https://maps.app.goo.gl/JjhT8SikQSTR6h11A",
    menu:"menu.fu.do/pochocafe/qr-menu",
    instagram:"pochocafe",
    linkinstagram:"https://www.instagram.com/pochocafe/",
    estrellas:"4.9",
},
{
    nombre: "úsina cafetera",
    link: "https://www.usinacafetera.com.ar/",
    img: ["usina1.png", "usina2.png", "usina3.png"],
    descripcion: "Cafetería de especialidad que trabaja con una combinación propia de Cafe orgánico, elaborado con granos del Caribe, logrando una experiencia unica.<br> Además, cuentan con opciones de almuerzos y de desayunos varios y opciones veganas y sin TACC. Tiene un espacio amplio y tranquilo, ideal para trabajar o relajar.",
    platodestcado: "Carrot Cake",
    tipocafe: "Cafe Magic",
    ubi: "Echeverria 2930",
    linkubi: "https://maps.app.goo.gl/hY6gLhZJ8Ur9K1Lw7",
    menu:"https://menu.fu.do/usinacafetera/qr-menu?fbclid=PAZXh0bgNhZW0CMTEAAacIve3O0VysRwSgs7-plD30Qw8pfZLC6NUQ9CZAya1LBT9z7i9CFBwN-4Z8VA_aem_qPGgKZhZTPaG72ZefReNlA",
    instagram:"usinacafetera",
    linkinstagram:"https://www.instagram.com/usinacafetera/",
    estrellas:"4.1", 
},
{
    nombre: "pulso speciality coffe",
    link: "https://www.pulso.cafe/",
    img: ["pulso1.png", "pulso2.png", "pulso3.png"],
    descripcion:"Cafetería de especialidad ubicada en la esquina de Blanco Encalada. Ofrece gran variedad de cafés, infusiones y jugos, además de opciones dulces y saladas para distintas comidas del día. <br>Cuenta con espacio interior y exterior, wifi y un entorno cómodo y relajado para trabajar. Con precios super accesibles. ",
    platodestcado: "Tostones Salados",
    tipocafe: "Latte Saborizado",
    ubi: "Blanco encalada 1992",
    linkubi:"https://maps.app.goo.gl/431Zu3pe5Gn39pBn9",
    menu:"https://drive.google.com/file/d/1l80OAoIkirXJhILRWaGVzbfdP3Md1rAu/view",
    instagram:"pulsocafe",
    linkinstagram:"https://www.instagram.com/_pulsocafe/",
    estrellas:"4.8", 
},
{
    nombre: "deniks bakery",
    link: "https://deniksbakery.com/tienda/",
    img: ["denkis1.png", "denkis2.png", "denkis3.png"],
    descripcion:"Cafetería de especialidad que ofrece cafe calsico ya que se destaca por su chocolatería y pastelería profesional, creativa y de calidad. Tiene varias opciones de meriendas, brunch y mas acotadas para el almuerzo con panadería y ensaladas. frescas. El establecimiento es pequeño y se llena con facilidad, por lo que se recomienda ir temprano, especialmente para la merienda",
    platodestcado: "Tortas petits",
    tipocafe: "Latte Doble",
    ubi: "Migueletes 1717",
    linkubi:"https://maps.app.goo.gl/M4qNskgotLXUtsCX7",
    menu:"https://deniksbakery.com/carta-deniks/",
    instagram:"deniksbakery",
    linkinstagram:"https://www.instagram.com/deniksbakery/",
    estrellas:"4.4", 
},
{
    nombre: "maru botana café",
    link: "https://deniksbakery.com/tienda/",
    img: ["marub1.png", "marub2.png", "marub3.png"],
    descripcion:"Cafetería creada por la reconocida chef Maru Botana, tiene 3 locales en Belgrano. Su propuesta gira en torno a tortas abundantes clasicas, frutales y chocolatosas. Sin embargo también cuenta con opciones para  el desayuno, pasteleria artesanal y vegana. Los locales son pequeños y se llenan rápido. Disponen de mesas en el interior y al aire libre, donde se aceptan mascotas. ",
    platodestcado: "Tortas Clasicas",
    tipocafe: "Cafe con leche",
    ubi: ["Echeverría 3230", "11 de Septiembre de 1888 1772", "11 de Septiembre de 1888 982"],
    linkubi:["https://maps.app.goo.gl/M4qNskgotLXUtsCX7","https://maps.app.goo.gl/1MjcyugBStwPHyL38","https://maps.app.goo.gl/Qq64QS2mxFdPhRTm9"],
    menu:"https://deniksbakery.com/carta-deniks/",
    instagram:"marubotanadulceysalado",
    linkinstagram:"https://www.instagram.com/marubotanadulceysalado/",
    estrellas:"4.4", 
},
{
    nombre: "stumpy coffee point",
    link: "https://stumpycoffee.com/",
    img: ["stumpy1.png", "stumpy2.png", "stumpy3.png"],
    descripcion:"Cafetería de especialidad con dos sucursales en Belgrano. Trabaja con granos de Brasil y Colombia, con una gran variedad de cafe con creativas opciones para combinarlos. Estos se pueden acompañar con amplia variedad de pastelería y panadería dulce y salada, además de una amplia carta para almorzar.<br>Tiene un ambiente tranquilo y cálido, con mesas adentro y afuera. Es pet friendly y muy elegido para trabajar. ",
    platodestcado: "Cookie de Pistacho",
    tipocafe: "Moka",
    ubi: ["Echeverría 1568", "Mendoza 2020"],
    linkubi:["https://maps.app.goo.gl/hpVcaf3i7tsxJ52U7","https://maps.app.goo.gl/99v6ygfwaGnn84VA6  "],
    menu:"https://www.google.com/maps/place/Stumpy+coffee+point+belgrano/@-34.5574793,-58.4502826,17z/data=!4m7!3m6!1s0x95bcb5190eb3df2f:0xc27a2acf11e3dd93!8m2!3d-34.5582304!4d-58.4477077!10e9!16s%2Fg%2F11sdyf0gcb?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
    instagram:"stumpycoffeepoint",
    linkinstagram:"https://www.instagram.com/stumpycoffeepoint/",
    estrellas:"4.3", 
},
{
    nombre: "co-pain",
    link: "https://copain.com.ar/",
    img: ["co-pain1.png", "co-pain2.png", "co-pain3.png"],
    descripcion:"Cafetería de especialidad reconocida por su panadería y pastelería francesa. Ofrece desayunos, brunch y almuerzos con ingredientes de calidad. Con muy linda estética, mesas en el interior y al aire libre. Ideal para coffee work. Cuenta con opciones vegetarianas y sin TACC, y precios accesibles. ",
    tipocafe: "Vainilla Latte",
    platodestcado:"Croissants rellenos",
    ubi: "Migueletes 1672",
    linkubi:" https://maps.app.goo.gl/o3EreNnzTsHv3YJg8",
    menu:"https://drive.google.com/file/d/1gWMYl4u78MNnj9hkXvCCwOcNlFTbIT40/view",
    instagram:"copain",
    linkinstagram:"https://www.instagram.com/copain/",
    estrellas:"4.3", 
},
]
const contenedor = document.getElementById("contenedor-cafes");

function vizualizarCafes(lista) {
  contenedor.innerHTML = "";
  lista.forEach((cafes, index) => {
    contenedor.innerHTML += `<div class="col">
                <div class="card">
                  <div id="carousel-${index}"  class="carousel slide carousel-card" data-bs-ride="carousel"data-bs-interval="3000" >
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="../img/${cafes.img[0]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                         <img src="../img/${cafes.img[1]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                        <img src="../img/${cafes.img[2]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                    </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                   <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${cafes.nombre}</h5>
                  <p class="card-text fs-6 text-justify">${cafes.descripcion}</p>
                  <div class="row">
                    <h6 class="col"><i class="bi bi-fork-knife color-black m-2"></i>${cafes.platodestcado}</h6>
                  </div>
                  <div class="row">
                    <h6 class="col"><i class="bi bi-cup-hot-fill m-2"></i>${cafes.tipocafe}</h6>
                  </div>
                  <div class="row">
                    <a class="card-text col" href="${cafes.menu}"><i class="bi bi-map m-2"></i>Menu</a>
                    <a class="card-text col" href="${cafes.linkinstagram}"><i class="bi bi-instagram m-2"></i>${cafes.instagram}</a>
                  </div>
                  <div class="row">
                    <a class="card-text col" href="${cafes.linkubi}"><i class="bi bi-geo-alt-fill m-2"></i>${cafes.ubi}</a>
                    <p class="card-text col"><i class="bi bi-star-fill m-2"></i>${cafes.estrellas}</p>
                  </div>
                </div>
              </div>
            </div>`;
      
  });
}
vizualizarCafes(cafes);
const buscador = document.querySelector("#searchbar");

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const cafesFiltrados = cafes.filter(cafe =>cafe.nombre.toLowerCase().includes(texto)
  );
 vizualizarCafes(cafesFiltrados);
});


