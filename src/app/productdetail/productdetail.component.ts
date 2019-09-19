import { Component, OnInit } from '@angular/core';
import { GodamwaleERP} from '../GODAMWALEERP';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
GodamwaleERP =GodamwaleERP;
  constructor() { }

  ngOnInit() {
  }

}
