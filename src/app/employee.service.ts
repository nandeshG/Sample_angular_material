import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  subject = new Subject<Employee>()
}
