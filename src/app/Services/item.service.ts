import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from "../Models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  formData: Item = new Item();
  operation: string = "New";
  baseURl: string = "https://localhost:7118/api/";
  itemList:Item[]=[];

  constructor(public http: HttpClient) { }

  GetItems = () =>
    this.http.get(`${this.baseURl}Items/GetItems`).subscribe(res => this.itemList = res as Item[]);
  GetOneItem = (id: number) =>
    this.http.get(`${this.baseURl}Items/GetOneItem?id=${id}`);
  DeleteItem = (itemId: number) =>
    this.http.get(`${this.baseURl}Items/DeleteItem?itemId=${itemId}`);
  SaveItem = () =>
    this.http.post(`${this.baseURl}Items/SaveItem`, this.formData);

  
}



