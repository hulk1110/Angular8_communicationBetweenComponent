import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {

  astronauts = ['nish', 'monty', 'pallavi'];
  history: string[] = [];
  missions = ['go for movie', 'go on date', 'go for trek'];
  nextMission = 0;
  constructor(private missonService: MissionService) {
    missonService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  ngOnInit() {
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missonService.announceMission(mission);
    this.history.push('Mission "${mission}" announed');
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
