import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toBeFiltered:any='';
  title = 'ThirdApp-Pipes';
  employees:any[]=[
    {"employeeId":101,"employeeName":"Aakriti","gender":"Female","salary":30000,"doj":"23/Sep/2019"},
    {"employeeId":102,"employeeName":"Shubhangi","gender":"Female","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":103,"employeeName":"Uroosa","gender":"Female","salary":38000,"doj":"23/Sep/2019"},
    {"employeeId":104,"employeeName":"Dhairya","gender":"Female","salary":40000,"doj":"23/Sep/2019"},
    {"employeeId":105,"employeeName":"Karnika","gender":"Female","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":106,"employeeName":"Himanshu","gender":"Male","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":107,"employeeName":"Yash","gender":"Male","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":108,"employeeName":"Harmeet","gender":"Male","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":109,"employeeName":"Vikram","gender":"Male","salary":35000,"doj":"23/Sep/2019"},
    {"employeeId":110,"employeeName":"Chandan","gender":"Male","salary":35000,"doj":"23/Sep/2019"},
  ];

  a: number = 0.259;
  b: number = 1.3495;
}
