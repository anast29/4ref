import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

/** @selected <option>Каталоги</option>*/
export const SELECTED_CTALOGS_ITEM: Array<TSelectParams> = [
  {
    title: "Назва каталогу:",
    key: "catalogName",
    placeholder: "Пам’ятки історії та мистецтва Львівської області ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип каталогу:",
    key: "typeOfCatalog",
    placeholder: "каталог-довідник",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Текст парал.: укр., рос, англ.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Видавництво:",
    key: "publisher",
    placeholder: "Новий час",
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
    inputType: "number",
  },
];
