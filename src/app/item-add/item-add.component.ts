import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
})
export class ItemAddComponent implements OnInit {
  itemForm;
  numberOfItems = 0;

  constructor(private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      name: '',
    });
  }

  ngOnInit() {}

  saveToList(itemForm) {
    console.log(itemForm.value);
  }
}
