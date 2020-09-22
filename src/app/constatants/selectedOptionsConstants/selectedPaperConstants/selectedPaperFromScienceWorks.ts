import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_PAPER_FROM_SCIENCE_WORKS: Array<TSelectParams> = [
  {
    title: "Наукова праця:",
    key: "magazineName",
    placeholder: "Наук. пр.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Назва статті:",
    key: "paperName",
    placeholder: "Застосування термомеханічних систем в харчових технологіях",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Принадлежність:",
    key: "copyrigth",
    placeholder: "Одес. нац. акад. харч. технологій ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
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
    placeholder: "3",
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
