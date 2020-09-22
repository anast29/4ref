import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Книга</option>
export const SELECTED_REMOTE_ELECTRONIC_RESOURCE: Array<TSelectParams> = [
  {
    title: "Електроний ресурс:",
    key: "elecResource",
    placeholder: "Технологічне обладнання галузі",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Джерело",
    key: "resource",
    placeholder: "Голос України: електрон. версія газ. 2017. № 68 (6573). 13 квіт.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "URL:",
    key: "url",
    placeholder: "https://example.com",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
        Validators.required,
        Validators.pattern("(?:http://|https://|ftp://).+")
    ],
    inputType: "url"
  },
  {
    title: "Місто:",
    key: "city",
    placeholder: "Одеса",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
  },
  {
    title: "Дата звернення:",
    key: "date",
    placeholder: "",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "date"
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
