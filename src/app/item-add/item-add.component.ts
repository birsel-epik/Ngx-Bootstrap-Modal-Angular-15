import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
})
export class ItemAddComponent implements OnInit {
  itemForm;
  numberOfItems = 0;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public modalRef: BsModalRef) {}

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      name: '',
    });
    console.log(this.list);
  }

  saveToList(form) {
    if (form.value) {
      this.triggerEvent(form.value.name);
      this.modalRef.hide();
    }
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item, res: 200 });
  }

  close() {
    this.modalRef.hide();
  }
}
