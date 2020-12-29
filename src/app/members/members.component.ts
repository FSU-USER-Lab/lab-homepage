import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  current_students = [
    'Ciera',
    'McInnes-Taylor, Marlan',
    'Moran, Jack',
    'Murdjeff, Alexa'

  ];

  former_students = [
    'Dulay, Haley',
    'Feanny, Nick',
    'G., Diego',
    'Hosfeld, Luis',
    'Parmer, Samuel',
    'Taylor, Quinton'
  ];
}
