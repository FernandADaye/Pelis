

// creacion de TreeBinary(Hacer la definicion del Nodo)
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.izquierda=null;
        this.derecha=null
    }
}

// definir TreeBinary 
class Arbol{
    constructor(){
        this.root=null;
    }
    // Metodo para agregar nodo
    insert (valor) {
    const nuevoNodo=new Nodo(valor);
    if(!this.root){
        this.root=nuevoNodo;
        }else{
            this.insertNode(this.root,nuevoNodo);
        }
    }
    // si no hay nada en la izquierda agragar dato, lo mismo para la derecha 
    insertNode(Nodo, nuevoNodo){
        if(nuevoNodo.valor < Nodo.valor){
            if(!Nodo.izquierda){
                Nodo.izquierda=nuevoNodo;
            } else {
                this.insertNode(Nodo.izquierda,nuevoNodo);
                }
            } else {
                if (!Nodo.derecha) {
                    Nodo.derecha=nuevoNodo;
                } else {
                    this.insertNode(Nodo.derecha,nuevoNodo); 
                    // checale aqui que no cuadra algo 
                    }
            }
    }
// Metodo para imprimir los datos en orden
imprimir (){
    this.imprimirNodo(this.root);
}
imprimirNodo(Nodo){
    if (Nodo){
        this.imprimirNodo(Nodo.izquierda);
        console.log(Nodo.valor);
        this.imprimirNodo(Nodo.derecha);
        }
    }
}
const peli = new Arbol();

// suspenso
var infierno=[
    { id: 1, nombre:"Infierno en La Tormenta", descripcion: "balablablab" }
]
var vertigo=[
    { id: 1, nombre:"Vertigo ", descripcion: "balablablab"}
]
var leyenda=[
    { id: 1, nombre:"Soy Leyenda", descripcion: "balablablab"}
]
var muerte=[
    { id: 1, nombre:"Contratiempo", descripcion: "balablablab"}
]
//niños
var spider=[
    { id: 2, nombre:"Spiderman Un Nuevo Universo", descripcion: "balablablab"}
]
var lucas=[
    { id: 2, nombre:"Luca", descripcion: "balablablab"}
]
var zoo=[
    { id: 2, nombre:"Zootopia", descripcion: "balablablab"}
]
var moana=[
    { id: 2, nombre:"Moana", descripcion: "balablablab"}
] 
// ciencia ficcion 
var agua=[
    { id: 3, nombre:"Avatar El Camino Del Agua ", descripcion: "balablablab"}
]
var tron=[
    { id: 3, nombre:"Tron El Legado ", descripcion: "balablablab"}
]
var alien =[
    { id: 3, nombre:"LIFE", descripcion: "balablablab"}
]
var raro=[
    { id: 3, nombre:"INCEPTION", descripcion: "balablablab"}
]
// romance 
var antesDe=[
    { id: 4, nombre:"Me Before You ", descripcion: "balablablab"}
]
var diarioNoa=[
    { id: 4, nombre:"The Notebook ", descripcion: "balablablab"}
]
var lala =[
    { id: 4, nombre:"LALALAND", descripcion: "balablablab"}
]
var srDarsi=[
    { id: 4, nombre:"Orgullo y Prejuicio", descripcion: "balablablab"}
]
// drama
var lion=[
    { id: 5, nombre:"Lion ", descripcion: "balablablab"}
]
var ballena=[
    { id: 5, nombre:"En El Corázon Del Mar ", descripcion: "balablablab"}
]
var perro =[
    { id: 5, nombre:"El Arte De Vivir Bajo La Lluvia", descripcion: "balablablab"}
]
var historiasCruzadas=[
    { id: 5, nombre:" Criadas Y Señoras", descripcion: "balablablab"}
]


// suspenso
peli.insert(infierno);
peli.insert(vertigo);
peli.insert(leyenda);
peli.insert(muerte);
// niños
peli.insert(spider);
peli.insert(lucas);
peli.insert(zoo);
peli.insert(moana);
// ciencia ficcion 
peli.insert(agua);
peli.insert(tron);
peli.insert(alien);
peli.insert(raro);
// romance
peli.insert(antesDe);
peli.insert(diarioNoa);
peli.insert(lala);
peli.insert(srDarsi);
// drama 
peli.insert(lion);
peli.insert(ballena);
peli.insert(perro);
peli.insert(historiasCruzadas);
peli.imprimir();
console.log(peli);
console.log(peli.root.izquierda);
console.log(peli.root.derecha);
// enseñar que es que cosa 
const pelicula = peli.insert()

const id= peli.insert
const contenido = document.querySelector('#contenido')
const seleccionarGenero= document.querySelector ('form')
const validarGeneroRomance = document.querySelector("#bottRomance")
const validarGeneroSuspenso = document.querySelector("#bottSuspenso")
const validarGeneroDrama = document.querySelector("#bottDrama")
const validarGeneroNinios = document.querySelector("#bottNinos")
const validarGeneroCienciaFiccion = document.querySelector("#bottCienciaFiccion")

