import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [NavigationComponent],
  exports : [NavigationComponent]
})
export class NavigationModule { }
