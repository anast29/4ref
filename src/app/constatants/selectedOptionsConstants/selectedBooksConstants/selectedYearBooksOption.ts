import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

export const SELECTED_YEAR_BOOK: Array<TSelectParams> = [
  {
    title: "Щорічник:",
    key: "bookName",
    placeholder: "Наукова поезія ХХ століття",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип щорічника:",
    key: "typeOfWork",
    placeholder: "монографія",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Відповідальний:",
    key: "articleEditor",
    placeholder: "Л. М. Стельма",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Принадлежність:",
    key: "copyright",
    placeholder: "Держ. ком. статистики України, Упр. статистики населення",
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
    title: "Сторінки:",
    key: "pages",
    placeholder: "67",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    maxLength: 4,
    inputType: "number",
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
