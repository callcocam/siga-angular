import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() label: string = "Ativar"
  @Input() showTatus: number = 0
  @Input() classBtn: string = "success"
  @Input() icone: string = "fa fa-check"
  @Input() value: any = 1
  @Input() showBtnActions: boolean = true
  constructor() { }

  @Output() emitStatus = new EventEmitter()
  ngOnInit() {
  }

  updateState(item){
    this.emitStatus.emit(item)
  }
}
