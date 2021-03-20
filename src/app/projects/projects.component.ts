import { Component, OnInit } from '@angular/core';
import current_projectsData from '../../assets/current_projects.json';
import past_projectsData from '../../assets/past_projects.json';

interface Project {
  name: String;
  date: String;
  content: String;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  current_projects: Project[] = current_projectsData;
  past_projects: Project[] = past_projectsData;

}
