let nbProduit = document.querySelector('.nbProduit');
let boutonAdd = document.querySelectorAll('.add');
let produitPanier = document.querySelector('.produitModal');
let totalModal = document.querySelector('#total');


let produits = [];
let prix = [];
let total = 0;

boutonAdd.forEach(e => {
    e.addEventListener('click', () => {
        let nb = parseInt(nbProduit.textContent);
        nbProduit.textContent = nb + 1;
        total += parseInt(e.dataset.price);
        let newDiv = document.createElement('div');
        newDiv.classList.add('produit');
        newDiv.innerHTML = `<p>${e.dataset.name}</p><p>${e.dataset.price}€</p>`;
        produitPanier.appendChild(newDiv);
        produits.push(e.dataset.name);
        prix.push(e.dataset.price);

           /* enregistre le produit dans le local storage  */
        localStorage.setItem('produits', JSON.stringify(produits));
        localStorage.setItem('prix', JSON.stringify(prix));
        totalModal.textContent = total + '€';
    });

});

/*  affiche les produits du local storage dans le panier  */

let produitsLocalStorage = JSON.parse(localStorage.getItem('produits'));
let prixLocalStorage = JSON.parse(localStorage.getItem('prix'));

produitsLocalStorage.forEach(e => {
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('produit');
    prixLocalStorage.forEach(e => {
      
    });
    newDiv.innerHTML = `<p>${e}</p><p class="tarif"></p>`;
    produitPanier.appendChild(newDiv);
    produits.push(e);

});

let tarif = document.querySelectorAll('.tarif');

prixLocalStorage.forEach(e => {
    total += parseInt(e);
    totalModal.textContent = total + '€';
    tarif.textContent = e + '€';
    prix.push(e);
});

let paiement = document.querySelector('.paiement');
paiement.addEventListener('click', () => {
    localStorage.clear();
    nbProduit.textContent = 0;
    totalModal.textContent = 0 + '€';
    produitPanier.innerHTML = '';
});

nbProduit.textContent = produitsLocalStorage.length;