class LebElement extends HTMLElement{
       connectedCallback (){
           this.innerHTML = "Caleb Was Here";
       }

}

customElements.define("x-leb", LebElement);


class CenterElement extends HTMLElement{
       connectedCallback(){
           this.innerHTML = `<div style="text-align: center">${this.innerHTML}</div>`;
       }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
       connectedCallback(){
           this.innerHTML = new Date().getFullYear();
       }

}

customElements.define("x-fullyear", YearElement);


class LabElement extends HTMLElement{
       connectedCallback(){
           this.innerHTML = `<div style = "text-shadow: blue 2px 2px">${this.inner.HTML}</div>`;
       }

}

customElements.define("x-lab5", LabElement);