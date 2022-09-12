import { Component, OnInit } from '@angular/core';
import { ItemService } from "../Services/item.service";
import { Item } from "../Models/item.model";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  closeResult: string="";
  itemId:number = 0;
  constructor(public service:ItemService,private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.service.GetItems();
  }


  DeleteItem = (id:number) => {
      this.service.DeleteItem(id).subscribe((res:any)=>{
        this.service.GetItems();
      }
      );
  }

 
  open(content:any,Id:number=0) {
    this.itemId=Id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }




}
