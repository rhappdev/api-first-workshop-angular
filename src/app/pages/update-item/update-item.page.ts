import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import {Item} from '../../rest/model/item';
import {ModelError} from '../../rest/model/error';
@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: Item;
  edit_item_form: FormGroup;
  hasError: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
         this.itemService.getItemById(data.id).subscribe((item: Item) => {
        if (!item) {
          this.goBack();
        } else {
          this.item = item;
          this.edit_item_form = this.formBuilder.group({
            name: new FormControl(this.item.name, Validators.required),
            description: new FormControl(this.item.description, Validators.required)
          });
        }
      }, this.handleError);
      });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  handleError(e: ModelError) {
    this.hasError = true;
  }

  updateItem(value) {
    const newValues = {
      id: this.item.id,
      name: value.name,
      description: value.description
    };
    this.itemService.updateItem(newValues).subscribe((res) => {
      this.goBack();
    });
  }

}
