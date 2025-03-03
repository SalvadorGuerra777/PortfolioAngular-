import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  projects = [
    {
      name: "Proyecto 1",
      description: "Una aplicación web futurista",
      image: "/assets/project1.jpg",
      link: "https://proyecto1.com",
    },
    {
      name: "Proyecto 2",
      description: "Sistema de gestión avanzado",
      image: "/assets/project2.jpg",
      link: "https://proyecto2.com",
    },
    {
      name: "Proyecto 3",
      description: "Plataforma de IA innovadora",
      image: "/assets/project3.jpg",
      link: "https://proyecto3.com",
    },
  ]
}

