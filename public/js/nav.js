
// carrinho de compras

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="container-entete">
  
    <div class="logo">
      <a href="index.html"><img src="./images/logo.svg" alt="logo"></a>
    </div>  
  
    <div class="achete">
  
      <div class="chercher">
        <form action="/search" method="get">
        <input type="text" name="q" placeholder="Produit">
        <button type="submit"><strong>Chercher</strong> </button>
        </form>
      </div>
  
      <div class="col3">
        <button class="cart">
        <img src="./images/9.svg" alt="Login">
        </button>  
      </div>
  
      <div class="col3">
        <button class="cart">
        <img src="./images/car.svg" alt="Achats">
        <span class="cart-count"><strong>0</strong></span>
        </button>
      </div>
    </div>
  
    </div>  
  
    <div class="nav">
      <nav class="header_menu">
        <ul>
          <li ><a class="menu" href="index.html">Accueil</a>
            <ul>
              <li><a href="#">Alimentos</a></li>
              <li><a href="#">Roupas</a></li>
              <li><a href="#">Acessórios</a></li>
            </ul>
          </li>
          <li ><a class="menu" href="produits_liste.html">Produits</a>
            <ul class="submenu">
              <li><a href="#">Service</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </li>
          <li ><a class="menu" href="blog.html">Blog</a></li>
          <li ><a class="menu" href="contact.html">Contact</a></li>
          <li ><a class="menu" href="venue.html">Où nous trouver</a>
            <ul class="submenu">
              <li><a  href="#">Alimentos</a></li>
              <li><a  href="#">Roupas</a></li>
              <li><a  href="#">Acessórios</a></li>
            </ul>
          </li>
       </ul>
      </nav>
  
    </div>  
  `;

}


createNav();




// chercher

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = encodeURIComponent(form.querySelector('input').value);
  window.location.href = `/search?q=${query}`;
});

// login

const button = document.querySelector('a[href="/login"]');

button.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/login';
});


