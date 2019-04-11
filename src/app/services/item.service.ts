import { Injectable } from '@angular/core';
import { DefaultService } from '../rest/api/default.service';
import { Item } from '../rest/model/item';
import { API_URL } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private todoAPI: DefaultService) {
    this.todoAPI.configuration.basePath = API_URL;
  }

  createItem(title, description): Observable<any> {
    const randomId = Math.random().toString(36).substr(2, 5);
    const newItem: Item = {
      id: randomId,
      name: title,
      description: description
    };
    return this.todoAPI.createItem(newItem);
  }

  getItems(): Observable<Item[]> {
    return this.todoAPI.getItems();
  }

  getItemById(id): Observable<Item> {
    return Observable.throw('Not Implemented');
  }

  updateItem(newValues) {
    return Observable.throw('Not Implemented');
  }
}
