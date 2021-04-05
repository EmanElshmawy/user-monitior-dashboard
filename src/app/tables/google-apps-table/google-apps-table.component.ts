import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import {FilterService} from '../../services/filter.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  DOB: Date;
  created: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    DOB: new Date(2020, 11, 24),
    created: new Date(2020, 15, 24),
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    DOB: new Date(2021, 18, 24),
    created: new Date(2021, 11, 24),
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    DOB: new Date(2020, 6, 12),
    created: new Date(2020, 12, 15),
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    DOB: new Date(2021, 7, 6),
    created: new Date(2021, 10, 6),
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    DOB: new Date(2020, 5, 9),
    created: new Date(2020, 5, 9),
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    DOB: new Date(2021, 7, 14),
    created: new Date(2021, 7, 14),
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    DOB: new Date(1998, 11, 18),
    created: new Date(2019, 11, 18),
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    DOB: new Date(2021, 2, 24),
    created: new Date(2021, 2, 24),
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    DOB: new Date(2019, 4, 29),
    created: new Date(2019, 4, 29),
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    DOB: new Date(2021, 5, 30),
    created: new Date(2021, 5, 30),
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-google-apps-table',
  templateUrl: './google-apps-table.component.html',
  styleUrls: ['./google-apps-table.component.scss']
})
export class GoogleAppsTableComponent implements OnInit{
  data;
  displayedColumns: string[] = ['position', 'name', 'weight', 'DOB', 'founded'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  pipe: DatePipe;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get fromDate() {
    return  this.data.fromDate;
  }
  get toDate() {
    return this.data.toDate;
  }

  constructor( private filterService: FilterService) {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) => {

      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    };


  }
ngOnInit(){
  this.filterService.currentData.subscribe(
    (data) =>{
      this.data = data;
      console.log(this.data);
this.applyFilter();
    }
  )}

  applyFilter() {
    this.dataSource.filter = '' + Math.random();
  }
}
