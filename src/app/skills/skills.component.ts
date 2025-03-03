import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skills = [
    { name: "JavaScript", icon: "assets/javascript-icon.png", level: 90 },
    { name: "Python", icon: "assets/python-icon.png", level: 85 },
    { name: "Java", icon: "assets/java-icon.png", level: 80 },
    { name: "Angular", icon: "assets/angular-icon.png", level: 85 },
    { name: "React", icon: "assets/react-icon.png", level: 80 },
    { name: "Node.js", icon: "assets/nodejs-icon.png", level: 75 },
    { name: "SQL", icon: "assets/sql-icon.png", level: 85 },
    { name: "Docker", icon: "assets/docker-icon.png", level: 70 },
  ]
}

