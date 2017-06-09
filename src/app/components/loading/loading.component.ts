import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() text: string;
  @Input() ready: boolean;
}
