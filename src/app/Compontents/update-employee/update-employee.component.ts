import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Entity/employees';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/Service/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee!:Employees;
  constructor(private route:ActivatedRoute,private router:Router,private employeeservice:EmployeesService) { }
  
  ngOnInit(): void {
    this.employee=new Employees();
    this.id=this.route.snapshot.params['id'];
    this.employeeservice.getEmployee(this.id)
    .subscribe(data=>{
      console.log(data);
      this.employee=data;
    },
    error=>console.log(error));
  }
  updateEmployee(){
    this.employeeservice.updateEmployee(this.id,this.employee)
    .subscribe(data=>{
      console.log(data);
      this.employee=new Employees();
      this.gotoList();
    },
    error=>console.log(error));
  }
  gotoList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.updateEmployee();
  }
}
