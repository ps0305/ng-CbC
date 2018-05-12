import { Component, OnInit, Input ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('_id') product_id;
  @Input('_name') product_name;
  @Input('_cost') product_cost;
  @Output() sendData:EventEmitter <any> = new EventEmitter();
  
    constructor() {
      
     }

  ngOnInit() {
    
  }
  public clickMe(){
    this.sendData.emit(this.product_id+"..."+this.product_name+"..."+this.product_cost);
  }

}
