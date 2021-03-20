import { Component, OnInit } from '@angular/core';
import current_membersData from '../../assets/current_students.json';
import past_membersData from '../../assets/past_students.json';

interface CurrentMember {
  first_name: String;
  last_name: String;
  grade: String;
}

interface PastMember {
  first_name: String;
  last_name: String;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  current_students: CurrentMember[] = current_membersData;
  past_students: PastMember[] = past_membersData;

}
