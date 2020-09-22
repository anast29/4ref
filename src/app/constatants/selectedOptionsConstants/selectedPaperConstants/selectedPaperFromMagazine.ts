import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_PAPER_FROM_MAGAZINE: Array<TSelectParams> = [
  {
    title: "Назва статті:",
    key: "paperName",
    placeholder: "Технологія отримання залізовмісного комплексу",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Назва журнала:",
    key: "magazineName",
    placeholder: "Харч. наука і технологія",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Том журнала:",
    key: "volumeOfMagazine",
    placeholder: "3",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    inputType: "number",
  },
  {
    title: "Випуск/номер:",
    key: "partOfMagazine",
    placeholder: "5",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "number",
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
