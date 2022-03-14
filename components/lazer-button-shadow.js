class LazerButtonShadow extends HTMLElement {
  constructor() {
      super()
      this.root = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
      this.root.innerHTML = `
          <style>
            button {
              font-size: 16px;
            }
          </style>

          <button>lazer-button-shadow</button>
      `
  }
}

customElements.define('lazer-button-shadow', LazerButtonShadow)
