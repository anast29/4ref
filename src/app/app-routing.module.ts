import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./containers/home/home.component";
import { AboutComponent } from "./containers/about/about.component";
import { ReferencesComponent } from "./containers/references/references.component";
import { BibliographyComponent } from "./containers/bibliography/bibliography.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "references",
    component: ReferencesComponent,
  },
  {
    path: "bibliography",
    component: BibliographyComponent,
  },
  { path: "about", component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
