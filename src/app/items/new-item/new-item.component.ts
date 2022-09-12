import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../Models/item.model';
import { ItemService } from '../../Services/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Input()
  itemId: number = 0;
  

  
  constructor(public service: ItemService) { }

  ngOnInit(): void {
    if (this.itemId == 0) {
      this.service.operation = "New";
    } else {
      this.service.operation = "Edit";
      this.GetItem();
    }
  }
  GetItem = () => {
    this.service.GetOneItem(this.itemId).subscribe((res: any) => this.service.formData = res as Item);
  }
  onSubmit=(f:NgForm)=>
    this.service.SaveItem().subscribe(res=>{ this.service.GetItems();});
    
    
}
