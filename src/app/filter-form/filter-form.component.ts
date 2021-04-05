import { Component, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from '../services/filter.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {
  @Output() filteredSubmitEvent = new EventEmitter<any>();
  pipe: DatePipe;

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  constructor(private filterService: FilterService) {
  }
  submitFilter() {
    this.filterService.FilterFunc(this.filterForm.value);
  }
  ngOnInit() {
    this.filterService.currentData.subscribe();
  }
}
