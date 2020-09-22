// selectedPartOfBook
import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Книга</option>
export const SELECTED_PART_OF_BOOK: Array<TSelectParams> = [
  {
    title: "Назва роботи:",
    key: "bookName",
    placeholder: "Публічне управляння сільськими територіями України",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Глава/розділ:",
    key: "nameOfPart",
    placeholder: "Основи управління сільськими територіями",
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
    placeholder: "А.П. Савкова",
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
    title: "Рік:",
    key: "year",
    placeholder: "2006",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    validators: Validators.pattern("(?:17|18|19|20)[0-9]{2}"),
    inputType: "number",
  },
  {
    title: "Розділ:",
    key: "partOfBook",
    placeholder: "2",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    inputType: "number"
  },
  {
    title: "Сторінки:",
    key: "pages",
    placeholder: "10-15",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:[0-9]{1,4}|[0-9]{1,4}-[0-9]{1,4})")
    ]
  },
];
