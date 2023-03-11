import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
  declarations: [ManageComponent, UploadComponent],
  imports: [CommonModule, VideoRoutingModule, SharedModule],
})
export class VideoModule {}
