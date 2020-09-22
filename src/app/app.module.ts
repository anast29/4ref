import { NgxMaskModule } from "ngx-mask";
import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StorageServiceModule } from "angular-webstorage-service";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ViewerComponent } from "./components/viewer/viewer.component";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./containers/home/home.component";
import { AboutComponent } from "./containers/about/about.component";
import { BibliographyComponent } from "./containers/bibliography/bibliography.component";
import { ReferencesComponent } from "./containers/references/references.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    BibliographyComponent,
    ReferencesComponent,
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    DragDropModule,
    ClipboardModule,
    MatSortModule,
    MatTooltipModule,
    MatSnackBarModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [ViewerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
