class ShadowArticleTile extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.root.innerHTML = `
            <style>
                h1 {
                    margin-top: 200px;
                }
                img {
                    display: block;
                    margin: auto;
                    height: 700px;
                }
            </style>

            <h1>Shadow DOM Custom element</h1>
            <p>Description of new custom element that has Shadow DOM</p>
            <img src="https://res.cloudinary.com/elazar93/image/upload/v1647272084/carbon_37_o2qdsq.png" />
            <slot></slot>
            <slot name="article-tile-slot"></slot>
        `
    }
}

customElements.define('shadow-article-tile', ShadowArticleTile)
