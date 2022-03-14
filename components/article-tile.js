class ArticleTile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
              p {
                color: #f05a28;
                text-align: center;
              }
              img {
                display: block;
                margin: auto;
              }
              .code-snippet {
                height: 900px;
              }
            </style>

            <h1>Custom Elements</h1>
            <img src="https://res.cloudinary.com/elazar93/image/upload/v1647271495/carbon_34_mgis03.png" class="code-snippet"/>
            <h2>New custom element</h2>
            <p>Description of new custom element</p>
            <slot></slot>
            <slot name="article-tile-slot"></slot>
        `
    }
}

customElements.define('article-tile', ArticleTile)
