import { OnInit, Input, Output, Directive } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[btnactions]'
})
export class ActionsComponent implements OnInit {

  @Input() routePath: string

  @Output() emitState1 = new EventEmitter()
  @Output() emitState2 = new EventEmitter()
  @Output() emitState3 = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  updateState1(state){
    console.log(state)
      this.emitState1.emit(state)
  }
  updateState2(state){
    console.log(state)
      this.emitState2.emit(state)
  }
  updateState3(state){
    console.log(state)
      this.emitState3.emit(state)
  }
}
