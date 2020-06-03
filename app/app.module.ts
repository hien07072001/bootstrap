import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PetComponent } from './pet/pet.component';
import { ColorPicketComponent } from './color-picket/color-picket.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PetComponent,
    ColorPicketComponent,
    FontSizeEditorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
