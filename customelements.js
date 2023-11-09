class LebElement extends HTMLElement{
        connectedCallback (){
            this.innerHTML = "Caleb Was Here";
        }

}

customElement.define("x-Leb, LebElement");