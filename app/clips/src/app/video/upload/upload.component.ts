import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { last, switchMap } from 'rxjs/operators';
import { ClipService } from 'src/app/services/clip.service';
import { FfmpegService } from 'src/app/services/ffmpeg.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnDestroy {
  public isDragover = false;
  public file: File | null = null;
  public nextStep = false;
  public showAlert = false;
  public alertColor = 'blue';
  public alertMsg = 'Please wait! Your clip is being uploaded!';
  public inSubmission = false;
  public percentage = 0;
  public showPercentage = false;
  public user: firebase.User | null = null;
  public task?: AngularFireUploadTask;
  public screenshots: string[] = [];
  public selectedScreenshot = '';

  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });

  uploadForm = new FormGroup({
    title: this.title,
  });

  constructor(
    private storage: AngularFireStorage,
    private auth: AngularFireAuth,
    private clipsService: ClipService,
    private router: Router,
    public ffmpegService: FfmpegService
  ) {
    auth.user.subscribe((user) => (this.user = user));
    this.ffmpegService.init();
  }

  ngOnDestroy(): void {
    this.task?.cancel();
  }

  async storeFile($event: Event) {
    if (this.ffmpegService.isRunning) {
      return;
    }

    this.isDragover = false;

    this.file = ($event as DragEvent).dataTransfer
      ? ($event as DragEvent).dataTransfer?.files.item(0) ?? null
      : ($event.target as HTMLInputElement).files?.item(0) ?? null;

    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    this.screenshots = await this.ffmpegService.getScreenshots(this.file);

    this.selectedScreenshot = this.selectedScreenshot[0];

    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
    this.nextStep = true;
  }

  uploadFile() {
    this.uploadForm.disable();

    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Your clip is being uploaded!';
    this.inSubmission = true;
    this.showPercentage = true;

    const clipFileName = uuid();
    const clipPath = `clips/${clipFileName}.mp4`;

    this.task = this.storage.upload(clipPath, this.file);
    const clipRef = this.storage.ref(clipPath);

    this.task.percentageChanges().subscribe((progress) => {
      this.percentage = (progress as number) / 100;
    });

    this.task
      .snapshotChanges()
      .pipe(
        last(),
        switchMap(() => clipRef.getDownloadURL())
      )
      .subscribe({
        next: async (url) => {
          const clip = {
            uid: this.user?.uid as string,
            displayName: this.user?.displayName as string,
            title: this.title.value,
            fileName: `${clipFileName}.mp4`,
            url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          };

          const clipDocRef = await this.clipsService.createClip(clip);

          console.log(clip);

          this.alertColor = 'green';
          this.alertMsg =
            'Success! Your clip is now ready to share with the world!';
          this.showPercentage = false;

          setTimeout(() => {
            this.router.navigate(['clip', clipDocRef.id]);
          }, 1000);
        },
        error: (error) => {
          this.uploadForm.enable();

          this.alertColor = 'red';
          this.alertMsg = 'Upload failed! Please try again later!';
          this.inSubmission = true;
          this.showPercentage = false;
        },
      });
  }
}
