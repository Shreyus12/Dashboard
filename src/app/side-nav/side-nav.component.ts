import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

}

//Barra
const root = document.querySelector(".root");
const bar = document.createElement("div");
bar.classList.add("bar");

if (root) {
  root.append(bar);
}

//Icons
const toggle = document.createElement("i");
toggle.classList.add("fas", "fa-align-left", "toggle");

if (bar) {
  bar.append(toggle);
}

toggle.addEventListener("click", expand);

//Tools
const links = [
  { nombre: "Dashboard", icon: "fas fa-home" },
  { nombre: "Calendar", icon: "fas fa-calendar" },
  { nombre: "Clients", icon: "fas fa-users" },
  { nombre: "Calls", icon: "fas fa-phone-alt" },
  { nombre: "Settings", icon: "fas fa-cogs" }
];
const lista = document.createElement("ul");
lista.className = "tools";

links.forEach((item) => {
  lista.innerHTML += `
    <li>
    <i class="${item.icon}"></i>
    <div class="nombre">${item.nombre}</div>
    </li>`;
});

if (bar) {
  bar.append(lista);
}

const listanombres = document.querySelectorAll(".tools li div");

function expand() {
  listanombres.forEach((element) => {
    element.classList.toggle("show");
  });

  if (bar && bar.classList.contains("barexpanded")) {
    bar.classList.remove("barexpanded");
  } else if (bar) {
    bar.classList.add("barexpanded");
  }
}
