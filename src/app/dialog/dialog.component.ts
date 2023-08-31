import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {

  constructor(private fb:FormBuilder,private empService:EmployeeService){}


  form = this.fb.group({
      empName:['', Validators.required],
      age:['',Validators.required],
      comapany:['',Validators.required]
    });
 
   addEmployee(name:string,age:string,comapny:string){
    let emp = {empName:name,age:parseInt(age),company:comapny}
    this.empService.subject.next(emp)
   }
}


