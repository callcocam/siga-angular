import { Injectable } from '@angular/core';
declare var AdminLTE: any;
@Injectable()
export class SharedService {
  public AdminLTE = AdminLTE;
  public email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  public number = /^[0-9]*$/
  constructor() { 

  }

}
