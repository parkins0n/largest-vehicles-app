import { Component } from '@angular/core';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehicleInfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicle-info-app';
}