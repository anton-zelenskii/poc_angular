import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AtlasStateService } from 'src/app/BLoC/altas-state.service';

@Component({
  selector: 'app-atlas-form',
  templateUrl: './atlas-form.component.html',
})
export class AtlasFormComponent {
  control = new FormControl('');
  atlasStateService: AtlasStateService;

  constructor(atlasStateService: AtlasStateService) {
    this.atlasStateService = atlasStateService;
  }

  handleFormSubmitted() {
    this.atlasStateService.setStatus('Saving...');
  }
}
