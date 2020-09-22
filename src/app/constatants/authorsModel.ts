import { TAuthorsModel } from "../models/Models";
import { FormGroup, Validators } from "@angular/forms";

export const AUTHORS_MODEL: Array<TAuthorsModel> = [
  {
    title: "Ім'я:",
    key: "name",
    placeholder: "Іван",
    validators: Validators.required,
  },
  {
    title: "Прізвище:",
    key: "lastName",
    placeholder: "Іванов",
    validators: Validators.required,
  },
  {
    title: "По-батькові:",
    key: "patronymic",
    placeholder: "Іванович",
  },
];
