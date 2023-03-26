import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
})
export class ItemAddComponent implements OnInit {
  itemForm;
  numberOfItems = 0;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      name: '',
    });
    console.log(this.list);
  }

  saveToList(form) {
    if (form.value) {
      this.triggerEvent(form.value.name);
      this.bsModalRef.hide();
    }
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item, res: 200 });
  }
}
