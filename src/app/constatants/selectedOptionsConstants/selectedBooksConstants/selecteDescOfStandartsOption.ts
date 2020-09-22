import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Опис стандартів</option>
export const SELECTED_STANDART_DESCRIPTION: Array<TSelectParams> = [
  {
    title: "Стандарт:",
    key: "iso",
    placeholder: "ДСТУ 7152:2010",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Назва стандарту:",
    key: "name",
    placeholder: "Видання.Оформлення публікацій у журналах і збірниках",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
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
    inputType: "number",
  },
];
