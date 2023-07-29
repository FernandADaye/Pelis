

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



peli.insert(1);
peli.insert(2);
peli.insert(3);
peli.insert(4);
peli.insert(5);
peli.insert(6);
peli.insert(7);
peli.insert(8);
peli.insert(9);
peli.insert(10);
peli.insert(11);
peli.insert(12);
peli.insert(13);
peli.insert(16);
peli.insert(17);
peli.insert(18);
peli.insert(19);
peli.insert(20);
peli.imprimir();
console.log(peli);
console.log(peli.root.izquierda);
console.log(peli.root.derecha);

const seleccionarGenero = document.querySelector('form')
formulario.addEventListener('submit',(event)=>{
    event.preventDefault()
    contenido.innerHTML="";
}
)

