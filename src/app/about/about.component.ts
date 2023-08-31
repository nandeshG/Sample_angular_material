import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent} from '../dialog/dialog.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { dialogTwo } from '../second-dialog/second-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private dialog:MatDialog,private empService:EmployeeService){}


  employeeColumns = ['EmpName','age','company','Edit']

  empDetails:Employee[] = [
    {empName:'nandesh', age:24, company:'TCS'},
    {empName:'ram', age:25, company:'infosys'},
    {empName:'sham', age:26, company:'wipro'},
    {empName:'ravi', age:27, company:'cognizent'},
    {empName:'adam', age:28, company:'google'},
  ]

 // dataSource = new MatTableDataSource(this.empDetails)
  ngOnInit() {
    setTimeout(
      ()=>{
        this.empService.subject.subscribe(
          (val)=>{
            this.empDetails.push(val)
            console.log(this.empDetails);
          }
        )
      },2000
    )
  
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

  secondDilog(emp:Employee){
    dialogTwo(this.dialog,emp).subscribe(
      (val:Employee)=>{
        console.log(val);
      }
    )
  }
}

/*
cols = 3
rowHeight = '500px'
consructor(private responsive:BreakpointObserver){}

ngOnInIt(){
  this.responsive.observer([
    Breakpoints.TablePortrait,
    Breakpoints.TableLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.HandsetLandsape,
  ]).subscribe(
    result =>{
        this.cols = 3
        this.rowHeight = '500px'

        const breakPoints = result.breakpoints

        if(breakPoints[Breakpoints.TabletPortrait]){
          this.cols = 1
        }
        else  if(breakPoints[Breakpoints.HandsetPortrait]){
          this.cols = 1
          this.rowHeight = '480px'
        }
         else  if(breakPoints[Breakpoints.TabletLandscape]){
          this.cols = 1
        }
        else  if(breakPoints[Breakpoints.HandsetLandscape]){
          this.cols = 1
        }
    }
  )
}
*/