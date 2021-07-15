import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Entity/employees';
import { EmployeesService } from 'src/app/Service/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!:number;
  employee!:Employees;
  
  constructor(private employeeservice:EmployeesService,private route:ActivatedRoute,private router:Router) { }
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
  listEmployees(){
    this.router.navigate(['employees']);
  }

}
