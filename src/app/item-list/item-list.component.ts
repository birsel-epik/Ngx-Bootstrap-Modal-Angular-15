import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItemAddComponent } from '../item-add/item-add.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  providers: [BsModalService],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemList = ['Book', 'Pen'];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModalWithComponent() {
    const initialState = {
      list: [{ tag: 'Count', value: this.itemList.length }],
    };
    this.modalRef = this.modalService.show(ItemAddComponent, {
      initialState,
    });
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.event.subscribe((res) => {
      this.itemList.push(res.data);
    });
  }
}
