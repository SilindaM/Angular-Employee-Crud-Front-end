import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employees } from '../Entity/employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrel="http://localhost:8080/SpringMvcTodo/api/v1/employees";
  constructor(private http:HttpClient) { }

  //Get EmployeeById
  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrel}/${id}`);
  }
  //Create an Employee
  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrel}`,employee);
  }
  //Update an Employee
  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrel}/${id}`,value);
  }
  //Delete an Employee
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrel}/${id}`,{responseType:'text'});
  }
  //Get all employees
  getEmployeeList():Observable<any>{
    return this.http.get(`${this.baseUrel}`);
  }
}
