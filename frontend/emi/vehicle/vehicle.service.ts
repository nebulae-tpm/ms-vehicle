import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import { GatewayService } from '../../../api/gateway.service';
import {
  getHelloWorld,
  VehicleHelloWorldSubscription
} from './gql/vehicle';

@Injectable()
export class VehicleService {
  constructor(private gateway: GatewayService) {}
}
