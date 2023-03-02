(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A','J','Q', 'K'];
    
    let puntosJugador = 0,
        puntosComputadora = 0;
    
    //Referencias del HTML
    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo = document.querySelector("#btnNuevo");
    
    const puntosHTML = document.querySelectorAll("small"),
          divCartasJugador = document.getElementById("jugador-cartas"),
          divCartasComputadora = document.getElementById("computadora-cartas");
    
    const inicializarJuego = () => deck = crearDeck();
    const crearDeck = () => {
    
        deck = [];
        for( let i = 2; i < 10; i++  ) {
    
            for(let tipo of tipos) {
                deck.push(`${i}${tipo}`);
            }
    
        }
    
        for(let tipo of tipos) {
            for(let esp of especiales) {
                deck.push(`${esp}${tipo}`)
            }
        }
        return _.shuffle(deck);
    }
    
    const pedirCarta = () => {
    
        if(deck.length === 0)
            throw 'No hay cartas en la baraja';
        
        return deck.pop();
    
    }
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        return ((isNaN(valor)) ?
                (valor === 'A') ? 10 : 11
                : parseInt(valor));
    }
    
    // Eventos
    btnPedir.addEventListener('click', () => {
    
        entregarCarta(divCartasJugador, puntosHTML[0]);
        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
        else if(puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    })
    
    const entregarCarta = (divContenedor, smallPuntos) => {
        const carta = pedirCarta();
        
        if(divContenedor.getAttribute("id") === "jugador-cartas"){
            puntosJugador +=  valorCarta(carta);
            smallPuntos.innerText = puntosJugador;
        }  
        else {
            puntosComputadora +=  valorCarta(carta);
            smallPuntos.innerText = puntosComputadora;
        } 
    
        
        // <img class="carta" src="assets/cartas/10C.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divContenedor.append(imgCarta);
    }
    
    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
    
        do {
            entregarCarta(divCartasComputadora, puntosHTML[1]);
            if(puntosMinimos > 21)
                break;
        }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
        setTimeout(() => {
            if(puntosComputadora === puntosMinimos){
                alert('Nadie Gana');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana')
            } else {
                alert('Computadora gana');
            }
        }, 10 );
    
    }
    
    btnNuevo.addEventListener('click', () => {
        reiniciarJuego();
        inicializarJuego();
    });
    
    const reiniciarJuego = () => {
        console.clear();
        btnPedir.disabled = btnDetener.disabled = false;
        puntosJugador = puntosComputadora = 0;
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        divCartasJugador.innerHTML = ""; 
        divCartasComputadora.innerHTML = "";
        deck = crearDeck();
    }

})();
