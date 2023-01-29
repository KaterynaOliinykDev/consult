import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../../models/user/user.model';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'username', 'email','userId'];
  public dataSource: MatTableDataSource<User>;
  selection = new SelectionModel<User>(true, []);
  users: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService:UserService, public router: Router) {
    this.userService.getAll().subscribe((result)=>{
      this.users = result;
      this.dataSource = new MatTableDataSource(this.users);
   });
   this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeUser(userId:any) {
    if(confirm("Are you sure?")){
      this.userService.deleteUser(userId).subscribe(result => {
        window.location.reload();
        this.router.navigate(['/dashboard/admin']);
      });
    }
  }

}


