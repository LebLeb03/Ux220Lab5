class LebElement extends HTMLElement{
       connectedCallback (){
           this.innerHTML = "Caleb Was Here";
       }

}

customElement.define("x-Leb", LebElement);


class CenterElement extends HTMLElement{
       connectedCallback(){
           this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
       }
}

customElement.define("x-center", CenterElement);

class YearElement extends HTMLElement{
       connectedCallback(){
           this.innerHTML = new Date().getFullYear();
       }

}

customElement.define("x-fullyear", YearElement);