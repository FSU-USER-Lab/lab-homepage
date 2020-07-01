import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  imports: uiModules,
  exports: uiModules
})
export class AppUiModule { }