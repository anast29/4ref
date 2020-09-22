import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_SANITARY_RULES: Array<TSelectParams> = [
  {
    title: "Назва стандурту:",
    key: "nameOfStandart",
    placeholder:
      "Гігієнічні вимоги до води питної, призначеної для споживання людиною",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип стандурту:",
    key: "typeOfStandart",
    placeholder: "Державні санітарні норми та правила.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Шифр стандарту:",
    key: "cypher",
    placeholder: "ДСанПіН 2.2.4–171–10",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Затверджений:",
    key: "approved",
    placeholder: "наказом М-вом охорони здоров'я України",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Дата затвердження:",
    key: "date",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "date",
  },
  {
    title: "Місто:",
    key: "city",
    placeholder: "Одеса",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Сторінки:",
    key: "pages",
    placeholder: "10-15",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:[0-9]{1,4}|[0-9]{1,4}-[0-9]{1,4})"),
    ],
  },
  {
    title: "Рік:",
    key: "year",
    placeholder: "2006",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    validators: Validators.pattern("(?:17|18|19|20)[0-9]{2}"),
    inputType: "number",
  },
];
