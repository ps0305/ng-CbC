import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('_id') product_id;
  @Input('_name') product_name;
  @Input('_cost') product_cost;

  constructor() { }

  ngOnInit() {
  }
  public clickMe(){
    alert(this.product_id+"..."+this.product_name+"..."+this.product_cost);
  }

}
