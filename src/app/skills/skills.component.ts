import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skills = [
    // Lenguajes de Programación
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85 },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 80 },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 75 },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 70 },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 70 },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },

    // Frameworks y Librerías
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", level: 85 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 75 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 75 },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 70 },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", level: 75 },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 75 },

    // Frontend
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", level: 80 },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 80 },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 85 },

    // Bases de Datos
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 75 },

    // DevOps y Herramientas
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85 },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", level: 80 },

    // QA y Testing
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", level: 80 },
    { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg", level: 75 },
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: 80 },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 85 },

  
    // Cloud
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 70 },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", level: 70 },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", level: 65 }
  ];
}
