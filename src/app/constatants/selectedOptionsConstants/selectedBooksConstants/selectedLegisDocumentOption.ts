import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Законодавчий документ</option>
export const SELECTED_LEGIS_DOCUMENT: Array<TSelectParams> = [
  {
    title: "Назва документу:",
    key: "nameOfLaw",
    placeholder: "Конституція України",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Джерело:",
    key: "documentOfLaw",
    placeholder: "Відомство Верховної Ради",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Закон:",
    key: "law",
    placeholder: "Закон від 28.06.1996 № 254к/96-ВР",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Видавництво:",
    key: "publisherOfLaw",
    placeholder: "Мін-во Юстиції України",
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
    inputType: "number",
  },
];
