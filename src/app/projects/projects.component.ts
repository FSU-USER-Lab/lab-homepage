import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  current_projects = [
    {
      title: 'Automating Software Traceability Link Recovery and Maintenance using Word Embeddings within a Neural Network', 
      date: 'Feb 2020 - Present', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Elit ut aliquam purus sit amet luctus.In eu mi bibendum neque egestas congue quisque.Nisi vitae suscipit tellus mauris a diam maecenas sed.Leo duis ut diam quam nulla porttitor massa id neque.Nec feugiat nisl pretium fusce id velit ut.Volutpat diam ut venenatis tellus in.Nisl rhoncus mattis rhoncus urna neque.Diam vulputate ut pharetra sit amet aliquam id diam.'
    },
    {
      title: 'UROP Project #2', 
      date: "2020", 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Elit ut aliquam purus sit amet luctus.In eu mi bibendum neque egestas congue quisque.Nisi vitae suscipit tellus mauris a diam maecenas sed.Leo duis ut diam quam nulla porttitor massa id neque.Nec feugiat nisl pretium fusce id velit ut.Volutpat diam ut venenatis tellus in.Nisl rhoncus mattis rhoncus urna neque.Diam vulputate ut pharetra sit amet aliquam id diam.'
    },
    
  ];

}
