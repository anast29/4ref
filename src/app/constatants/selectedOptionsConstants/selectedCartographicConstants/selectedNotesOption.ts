import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_NOTES: Array<TSelectParams> = [
  {
    title: "Ноти:",
    key: "name",
    placeholder: "Віночок Соломії Крушельницької",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип нот:",
    key: "typeOfNotes",
    placeholder: "поезії і муз. твори",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Принадлежність:",
    key: "copyright",
    placeholder: " Біл. меморіал. музей С. Крушельницької",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Бібліогр.: с. 109–127. ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Видавництво:",
    key: "publisher",
    placeholder: "Варта",
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
    placeholder: "56",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
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
