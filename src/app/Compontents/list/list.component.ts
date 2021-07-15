import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Service/employees.service';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/Entity/employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees!:Observable<Employees[]>;
  constructor(private employeeservice:EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }
  //returns the list of employeees
  reloadData(){
    this.employees=this.employeeservice.getEmployeeList();
  }
  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id)
    .subscribe(data=>{
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error));
  }
  //load details of a certain employee
  employeeDetails(id:number){
    this.router.navigate(['details',id]);
  }
}
