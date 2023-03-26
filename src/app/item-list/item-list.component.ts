import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItemAddComponent } from '../item-add/item-add.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemList = ['Book', 'Pen'];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModalWithComponenet() {
    this.bsModalRef = this.modalService.show(ItemAddComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
