
function Carro(marca, modelo, anio, color, cantidad) {

    if (marca.length > 20 || marca == ""){
        alert("La marca de ede ser real y menos de 20 letras")
    }

    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.color = color
    this.cantidad = cantidad || 1

    this.getInfo = function(){
        return `${this.marca} ${this.modelo} (${this.anio}) - Color: ${this.color}`
    }

    this.aumentarCantidad = function(){
        this.cantidad += 1
    }

    this.disminuirCantidad = function(){
        if (this.cantidad > 1){
            this.cantidad -= 1
        }
    }

    this.vender = function(){
        this.cantidad -= 1
    }

    this.comprar = function(){
        this.cantidad += 1
    }
}

let listaCarros = [];

const form = document.getElementById('carForm');
const carsContainer = document.getElementById('carsContainer');

function renderCarList(listaArendizar) {
    carsContainer.innerHTML = '';
    
    if (listaArendizar.length === 0) {
        carsContainer.innerHTML = '<p class="no-cars">No hay carros en la lista</p>';
        return;
    }
    
    listaArendizar.forEach((carro, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        
        carCard.innerHTML = `
            <div class="car-details">
                <h3>${carro.marca} ${carro.modelo}</h3>
                <p>Año: ${carro.anio}</p>
                <p>Color: ${carro.color}</p>
                <p>Cantidad: </p>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
                    <span class="quantity-value">${carro.cantidad}</span>
                    <button class="quantity-btn increase-btn" data-index="${index}">+</button>
                </div>
            </div>
            <div class="car-actions">
                <button class="delete-btn" data-index="${index}">Eliminar</button>
            </div>
        `;
        
        

        carsContainer.appendChild(carCard);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'))
            eliminarCarro(index)
        })
    })

    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'))
            listaCarros[index].aumentarCantidad()
            renderCarList(listaCarros)
        })
    })

    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'))
            listaCarros[index].disminuirCantidad()
            renderCarList(listaCarros)
        })
    })
    
}

function agregarCarro(event) {
    event.preventDefault();
    
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = parseInt(document.getElementById('anio').value);
    const color = document.getElementById('color').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    
    const nuevoCarro = new Carro(marca, modelo, anio, color, cantidad);
    
    listaCarros.push(nuevoCarro);

    renderCarList(listaCarros);
    
    form.reset();
    document.getElementById('cantidad').value = 1;
}

function eliminarCarro(index) {
    listaCarros.splice(index, 1);
    renderCarList(listaCarros);
}

form.addEventListener('submit', agregarCarro);

listaCarros.push(new Carro('Toyota', 'corola', 2022, 'red'))
listaCarros.push(new Carro('Honda', 'Civic', 2022, 'black'))
listaCarros.push(new Carro('Chevrolet', 'Cruze', 2022, 'white'))




function buscarCarro(){
    busqueda = document.getElementById('searchInput').value

    if (busqueda == ''){
        renderCarList(listaCarros)
        return
    }

    
    resultadoBuscado = listaCarros.filter(carro => carro.marca == busqueda
    )
    
    
    renderCarList(resultadoBuscado)
}

function ultimosDeLaLista(){
    renderCarList(listaCarros.slice(-1))

}

document.getElementById('searchButton').addEventListener(
    'click', function(){
        buscarCarro()
    }
)

document.getElementById('searchInput').addEventListener(
    'keypress', function(event){
        if (event.key === 'Enter'){
            buscarCarro()
        }
    }
)

document.getElementById("searchAll").addEventListener(
    'click', function(){
        renderCarList(listaCarros)
    }
)

document.getElementById("searchUltimos").addEventListener(
    'click', function(){
        ultimosDeLaLista(listaCarros)
    }
)
if (listaCarros[0] instanceof Carro){
    
}

renderCarList(listaCarros);