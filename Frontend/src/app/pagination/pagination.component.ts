import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() collection!: any;
  @Input() page: number = 1;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.page);
  }
}
