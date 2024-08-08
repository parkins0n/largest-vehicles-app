import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent {
  vehicleType: string = '';

  car = {
    name: 'Mercedes-Benz S-Class',
    length: 5.5,
    price: 100000,
    description: 'Найбільший автомобіль у світі.'
  };

  airplane = {
    name: 'Antonov An-225',
    wingspan: 88.4,
    completion: 0.95,
    description: 'Найбільший літак у світі.'
  };

  ship = {
    name: 'Seawise Giant',
    length: 458.45,
    price: 150000000,
    description: 'Найбільший корабель у світі.'
  };

  switchVehicle(type: string) {
    this.vehicleType = type;
  }
}