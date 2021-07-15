import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Compontents/list/list.component';
import { CreateComponent } from './Compontents/create/create.component';
import { UpdateEmployeeComponent } from './Compontents/update-employee/update-employee.component';
import { DetailsComponent } from './Compontents/details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employees',component:ListComponent},
  {path:'add',component:CreateComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'details/id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
