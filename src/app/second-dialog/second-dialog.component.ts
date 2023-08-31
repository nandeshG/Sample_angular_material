import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.css']
})
export class SecondDialogComponent {
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<SecondDialogComponent>,@Inject(MAT_DIALOG_DATA)private emp:Employee){}

  form = this.fb.group({
    empName:[this.emp.empName, Validators.required],
    age:[this.emp.age,Validators.required],
    comapany:[this.emp.company,Validators.required]
  });

  close(){
    this.dialogRef.close()
  }

  open(){
    this.dialogRef.close(this.form.value);
  }
}

export function dialogTwo(dialog:MatDialog,empDetail:Employee){

  const config = new MatDialogConfig()

  config.disableClose = true;
  config.autoFocus = true;
  config.data = {
    ...empDetail
  }
  const dialogRef = dialog.open(SecondDialogComponent,config);

  return dialogRef.afterClosed();
}