import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Encapsular el código y permitir que el DOM encuentre nuestra nueva clase
    }

    // Cuando el componente se carga en el DOM hace lo que le indiquemos
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <bigger>
            <product-card

                            img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"

                alt="Imagen de tres figuras de Zelda"
                title="The Legend of Zelda amiibo"
                description="Potencia tu juego con los amiibo de la colección The Legend of Zelda."
                txtbutton="¡Completa tu colección! ▶"
            ></product-card>
            <product-card
                img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
                alt="Imagen de la mega promoción"
                title="Megapromoción 12+2"
                description="2 meses adicionales al comprar cualquier suscripción de 12 meses."
                txtbutton="Ver más detalles ▶"
            ></product-card>
            <product-card
                img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r"
                alt="Imagen de un control"
                title="Mando de Nintendo 64"
                description="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: ¡con un mando inalámbrico de tamaño completo de Nintendo 64!"
                txtbutton="Comprar ▶"
            ></product-card>
            </bigger>
         
        `;
    }
}

customElements.define('app-container', AppContainer);