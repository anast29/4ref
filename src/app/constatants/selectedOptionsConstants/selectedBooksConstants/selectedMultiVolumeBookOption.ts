import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Багатотомне видання</option>
export const SELECTED_MULTI_VOLUME_BOOK: Array<TSelectParams> = [
  {
    title: "Назва роботи:",
    key: "bookName",
    placeholder: "Наукова поезія ХХ століття",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Назва тому:",
    key: "volumeName",
    placeholder: "монографія",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
  },
  {
    title: "За редакцією:",
    key: "articleEditor",
    placeholder: "Яснопольского Л.Н.",
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
    title: "Номер тому:",
    key: "volumeNum",
    placeholder: "3",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "number",
  },
  {
    title: "Видавництво:",
    key: "publisher",
    placeholder: "ВМО",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
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
    inputType: "number",
  },
];
