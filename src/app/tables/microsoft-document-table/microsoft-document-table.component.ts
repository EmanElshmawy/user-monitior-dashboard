import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { FilterService } from '../../services/filter.service';
export interface PeriodicElement {
  name: string;
  position: number;
  time: number;
  DOB: Date;
  Date: Date;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    time: 1.0079,
    DOB: new Date(2020, 11, 24),
    Date: new Date(2020, 15, 24),
  },
  {
    position: 2,
    name: 'Helium',
    time: 4.0026,
    DOB: new Date(2021, 18, 24),
    Date: new Date(2021, 11, 24),
  },
  {
    position: 3,
    name: 'Lithium',
    time: 6.941,
    DOB: new Date(2020, 6, 12),
    Date: new Date(2020, 12, 15),
  },
  {
    position: 4,
    name: 'Beryllium',
    time: 9.0122,
    DOB: new Date(2021, 7, 6),
    Date: new Date(2021, 10, 6),
  },
  {
    position: 5,
    name: 'Boron',
    time: 10.811,
    DOB: new Date(2020, 5, 9),
    Date: new Date(2020, 5, 9),
  },
  {
    position: 6,
    name: 'Carbon',
    time: 12.0107,
    DOB: new Date(2021, 7, 14),
    Date: new Date(2021, 7, 14),
  },
  {
    position: 7,
    name: 'Nitrogen',
    time: 14.0067,
    DOB: new Date(1998, 11, 18),
    Date: new Date(2019, 11, 18),
  },
  {
    position: 8,
    name: 'Oxygen',
    time: 15.9994,
    DOB: new Date(2021, 2, 24),
    Date: new Date(2021, 2, 24),
  },
  {
    position: 9,
    name: 'Fluorine',
    time: 18.9984,
    DOB: new Date(2019, 4, 29),
    Date: new Date(2019, 4, 29),
  },
  {
    position: 10,
    name: 'Neon',
    time: 20.1797,
    DOB: new Date(2021, 5, 30),
    Date: new Date(2021, 5, 30),
  },
];
@Component({
  selector: 'app-microsoft-document-table',
  templateUrl: './microsoft-document-table.component.html',
  styleUrls: ['./microsoft-document-table.component.scss'],
})
export class MicrosoftDocumentTableComponent implements OnInit {
  data;
  displayedColumns: string[] = ['position', 'name', 'time', 'DOB', 'Date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  pipe: DatePipe;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get fromDate() {
    return this.data.fromDate;
  }
  get toDate() {
    return this.data.toDate;
  }

  constructor(private filterService: FilterService) {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.Date >= this.fromDate && data.Date <= this.toDate;
      }
      return true;
    };
  }
  ngOnInit() {
    this.filterService.currentData.subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.applyFilter();
    });
  }

  applyFilter() {
    this.dataSource.filter = '' + Math.random();
  }
}
