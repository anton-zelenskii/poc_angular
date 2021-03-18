import { Component } from '@angular/core';
import { AtlasStateService } from 'src/app/BLoC/altas-state.service';

@Component({
  selector: 'app-atlas-status',
  templateUrl: './atlas-status.component.html',
})
export class AtlasStatusComponent {
  status: String;

  constructor(private atlasStateService: AtlasStateService) {
    this.atlasStateService.getStatusObservable().subscribe((status) => {
      this.status = status;
    });
  }
}
