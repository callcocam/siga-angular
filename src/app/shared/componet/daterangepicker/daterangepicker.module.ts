import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';
import { DatepickerBtnComponent } from './datepicker-btn/datepicker-btn.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [DaterangePickerComponent, DatepickerBtnComponent],
    providers: [DaterangepickerConfig],
    exports: [DaterangePickerComponent,DatepickerBtnComponent]

})
export class Daterangepicker { }
