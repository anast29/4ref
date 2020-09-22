import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormArray, AbstractControl } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

@Component({
  selector: "app-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() selectModel: Array<TSelectParams>;
  @Input() form: FormGroup;

  get authors(): AbstractControl[] {
    return (this.form.controls.authors as FormArray)?.controls;
  }

  constructor() {}

  ngOnInit() {
  }
}
