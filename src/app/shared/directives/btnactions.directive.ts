import { Directive } from '@angular/core';

@Directive({
  selector: '[appBtnactions]'
})
export class BtnactionsDirective {

  
  constructor() { }
  updateState(item){
     console.log(item)
  }
}
