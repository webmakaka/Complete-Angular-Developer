import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  // providers: [ModalService],
})
export class SharedModule {}
