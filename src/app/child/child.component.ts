import { Component, OnInit, Input ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('_id') p_id;
  @Input('_name') p_name;
  @Input('_cost') p_cost;

  @Output() sendData:EventEmitter <any> = new EventEmitter();
  
    constructor() {}

  ngOnInit() {
    
  }
  public clickMe(){
    this.sendData.emit(this.p_id+"..."+this.p_name+"..."+this.p_cost);
  }

}
