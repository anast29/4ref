import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

export const SELECTED_POSTCARD: Array<TSelectParams> = [
  {
    title: "Назва листівки:",
    key: "nameOfPostcard",
    placeholder: "З новим роком!",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип листіки:",
    key: "typeOfPostcard",
    placeholder: "Листівка",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Принадлежність:",
    key: "copyright",
    placeholder: "",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Текст укр., англ",
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
    title: "Аркуші:",
    key: "pages",
    placeholder: "1 арк.",
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
    inputType: "number"
  },
];
