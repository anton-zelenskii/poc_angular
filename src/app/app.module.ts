import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtlasStateService } from './BLoC/altas-state.service';
import { AtlasFormComponent } from './components/atlas-form/atlas-form.component';
import { AtlasStatusComponent } from './components/atlas-status/atlas-status.component';

@NgModule({
  declarations: [AppComponent, AtlasFormComponent, AtlasStatusComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [AtlasStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
