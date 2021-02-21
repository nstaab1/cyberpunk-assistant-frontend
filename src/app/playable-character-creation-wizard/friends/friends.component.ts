import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FRIEND_RELATIONSHIPS } from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() friends: FormArray;
  friendRelationships = FRIEND_RELATIONSHIPS;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public addFriend(): void {
    this.friends.push(
      this.fb.group({
        name: '',
        relationshipToYou: '',
      })
    );
  }
}
