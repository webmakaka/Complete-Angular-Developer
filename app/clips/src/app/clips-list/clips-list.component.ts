import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.css'],
})
export class ClipsListComponent implements OnInit, OnDestroy {
  constructor(public clipsService: ClipService) {
    this.clipsService.getClips();
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

    if (bottomOfWindow) {
      this.clipsService.getClips();
    }
  };
}
