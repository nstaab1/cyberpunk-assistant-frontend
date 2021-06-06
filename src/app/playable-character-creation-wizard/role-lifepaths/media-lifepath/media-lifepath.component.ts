import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MEDIA_DISTRIBUTIONS,
  MEDIA_ETHICS,
  MEDIA_STORY_TYPES,
  MEDIA_TYPES,
} from 'src/app/data/player-creators-data';

@Component({
  selector: 'app-media-lifepath',
  templateUrl: './media-lifepath.component.html',
  styleUrls: ['./media-lifepath.component.scss'],
})
export class MediaLifepathComponent implements OnInit {
  @Output() mediaChange = new EventEmitter<FormGroup>();
  mediaLifepath: FormGroup;

  mediaTypes = MEDIA_TYPES;
  mediaDistributions = MEDIA_DISTRIBUTIONS;
  mediaEthicsList = MEDIA_ETHICS;
  mediaStoryTypes = MEDIA_STORY_TYPES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mediaLifepath = this.fb.group({
      mediaType: ['', Validators.required],
      mediaDistribution: ['', Validators.required],
      mediaEthics: ['', Validators.required],
      mediaStoryType: ['', Validators.required],
    });

    this.mediaLifepath.valueChanges.subscribe(() => {
      this.mediaChange.emit(this.mediaLifepath);
    });
  }
}
