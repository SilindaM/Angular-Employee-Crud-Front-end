import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Entity/employees';
import { EmployeesService } from 'src/app/Service/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employee:Employees=new Employees();
  submitted=false;

  constructor(private employeeservice:EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }
  newEmployee():void{
    this.submitted=false;
    this.employee=new Employees();
  }
  //Save employee
  save(){
    this.employeeservice.createEmployee(this.employee)
      .subscribe(data=>{
        console.log(data)
        this.employee=new Employees();
        this.gotoList();
      },
      error=>console.log(error));
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }
  //return the list
  gotoList(){
    this.router.navigate(['/employees']);
  }
}
