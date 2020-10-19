import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Книга</option>
export const SELECTED_BOOK: Array<TSelectParams> = [
  {
    title: "Назва роботи:",
    key: "bookName",
    placeholder: "Наукова поезія XX століття",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип роботи:",
    key: "typeOfWork",
    placeholder: "монографія",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "За редакцією:",
    key: "articleEditor",
    placeholder: "Яснопольского Л.Н.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Видавництво:",
    key: "publisher",
    placeholder: "ВМО",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
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
