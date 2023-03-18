import { Injectable } from '@angular/core';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

@Injectable({
  providedIn: 'root',
})
export class FfmpegService {
  public isReady = false;
  private ffmpeg;

  constructor() {
    this.ffmpeg = createFFmpeg({ log: true });
  }

  async init() {
    if (this.isReady) {
      return;
    }

    await this.ffmpeg.load();

    this.isReady = true;
  }

  async getScreenshots(file: File) {
    const data = await fetchFile(file);
    this.ffmpeg.FS('writeFile', file.name, data);
  }
}
