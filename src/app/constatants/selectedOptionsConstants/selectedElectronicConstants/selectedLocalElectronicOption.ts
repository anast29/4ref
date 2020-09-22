import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Книга</option>
export const SELECTED_LOCAL_ELECTRONIC_RESOURCE: Array<TSelectParams> = [
  {
    title: "Електроний ресурс:",
    key: "elecResource",
    placeholder: "Технологічне обладнання галузі",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип ресурсу:",
    key: "typeOfResource",
    placeholder: "конспект лекцій",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип доступу:",
    key: "typeOfAccess",
    placeholder: "1 електрон. опт. диск (CD-R)",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Принадлежність:",
    key: "copyrigth",
    placeholder: "Одес. нац. акад. харч. технологій",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
  },
  {
    title: "Місто:",
    key: "city",
    placeholder: "Одеса",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
  },
  {
    title: "Рік:",
    key: "year",
    placeholder: "2006",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    validators: Validators.pattern("(?:17|18|19|20)[0-9]{2}"),
    inputType: "number"
  },
];
