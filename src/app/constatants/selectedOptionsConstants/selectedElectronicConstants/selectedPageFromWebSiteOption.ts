import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

export const SELECTED_PAGE_FROM_WEBSITE: Array<TSelectParams> = [
  {
    title: "Назва веб-сайту:",
    key: "nameOfWebsite",
    placeholder: "Національні бібліотека України ім. В.І. Вернадського",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Сторінка сайту:",
    key: "pageOfWebsite",
    placeholder: "В Ильчевском МТП презентовали проект перевалочного комплекта",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "URL:",
    key: "url",
    placeholder: "https://example.com",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:http://|https://|ftp://).+"),
    ],
    inputType: "url",
  },
  {
    title: "Місто:",
    key: "city",
    placeholder: "Одеса",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
  },
  {
    title: "Дата звернення:",
    key: "date",
    placeholder: "",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "date",
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
