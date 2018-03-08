import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }
  @Input() showTatus: number = 0
  @Input() label: string = "Evaziar Lixeira"

  @Output() emitDelete = new EventEmitter()
  ngOnInit() {
  }

  delete(){
    this.emitDelete.emit()
  }

}
