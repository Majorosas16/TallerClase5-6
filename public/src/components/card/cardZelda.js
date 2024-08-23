class Card extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'description', 'txtbutton'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) { //Importante para los valores dinamicos
    
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/card/card.css">
            <div class="bigger">
            <div class="product-card">
            
                <img src="${this.img}" alt="${this.alt}">
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <button >${this.txtbutton}</button>
            </div>
            </div>
        `;
    }
}

customElements.define('product-card', Card);
export default Card;