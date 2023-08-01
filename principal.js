const movies = [
    { title:"Infierno en La Tormenta", imagenURL:'/img/d93ea7bbf688fb5e441efa7fd90a7dc9.jpg' },
    { title:"Vertigo ", imagenURL:'/img/7229357879758b56228019409869c883.jpg'},
    { title:"Soy Leyenda", imagenURL:'/img/b12b4552fe9acb4b6c6d956deeabf38d.jpg'  },
    { title:"Contratiempo ", imagenURL:'/img/eb1b8ec2c6bb57efdf7f25fff74bd875.jpg'},
    { title:"Spiderman Un Nuevo Universo", imagenURL:'/niños/827c0c94ca77d672a3ff125703ab689c.jpg'},
    { title:"Luca", imagenURL:'/niños/c5587d1b1918c670fe924e9e99b6b679.jpg'},
    { title:"Zootopia ", imagenURL:'/niños/87ec82e0ae96237fd4ad7f65aa7e0016.jpg'},
    { title:"Moana", imagenURL:'niños/78f02e6a0ae0e2e86316224de52cd8df.jpg' },
    { title:"Avatar El Camino Del Agua  ", imagenURL:'/cienciaf/20353e9c2f7dd444eae9cf9a14c38740.jpg'},
    { title:"Tron El Legado ", imagenURL:'/cienciaf/9e9a7d14bc8afb71fe083a008c717928.jpg'},
    { title:"Life ", imagenURL:'/cienciaf/9026324f734f748c0205ea95ff2308f6.jpg'},
    { title:"INCEPTION", imagenURL:'cienciaf/f895e61ec92a95198c11ecfb7701b6bc.jpg'},
    { title:"Yo despues de ti  ", imagenURL:'romance/9d11ab85db6f4111be05b0e14bf32465.jpg'},
    { title:"El Diario de Noha  ", imagenURL:'/romance/70bf85721872c3c3d6edb9334398fbee.jpg'},
    { title:"Lalaland ", imagenURL:'/romance/493e2c1109f2e72f745eb7880d75e7fe.jpg'},
    { title:"Orgullo y Prejuicio  ", imagenURL:'/romance/44b048e190695dc53e87dcce109862d1.jpg'},
    { title:"Lion ", imagenURL:'/drama/052e17761fb8a4546a1b826487e8230f.jpg'},
    { title:"En el corazón del mar  ", imagenURL:'/drama/205b5b8456e25e85c45b901da9351bfa.jpg'},
    { title:"El arte de vivir bajo la lluvia", imagenURL:'/drama/cbd0d18d94c9164f17ee2f68b8dd493d.jpg'},
    { title:"Criadas y Señoras  ", imagenURL:'/drama/e4abe6814ba60927066a1d3de21699cf.jpg'},
];

function displayMovies(filter = '') {
    const movieListElement = document.getElementById('movieList');
    movieListElement.innerHTML = '';
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
    filteredMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <img id="miImagen" src="${movie.imagenURL}" alt="Mi imagen">
    `;
    movieListElement.appendChild(movieElement);
    });

}
document.addEventListener('DOMContentLoaded', () => {
    displayMovies();
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    displayMovies(searchTerm);
    });
});

