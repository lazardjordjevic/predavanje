class LazerButton extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <style>
            button {
              font-size: 16px;
            }
          </style>

          <button>lazer-button</button>
      `
  }
}

customElements.define('lazer-button', LazerButton)
