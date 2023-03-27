import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  providers: [BsModalService],
  declarations: [],
})
export class AppModule {}
