import { Component, OnInit, Input , OnDestroy} from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {

  @Input() astronaut: string;

  subscription: Subscription;
  announced: boolean;
  confirmed: boolean;

  mission = 'No Mission Announced';

  constructor(private missionService: MissionService) {
    this.subscription = this.missionService.missionAnnounced$.subscribe(

      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  ngOnInit() {

  }
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
