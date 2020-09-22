import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_PAPER_FROM_BOOK: Array<TSelectParams> = [
  {
    title: "Назва роботи:",
    key: "bookName",
    placeholder: "Удосконалення технології виробництва комбікормів для коней",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Назва статті:",
    key: "paperName",
    placeholder: "Технологія отримання залізовмісного комплексу",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "За редакцією:",
    key: "articleEditor",
    placeholder: "Яснопольского Л.Н.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Автор(-и) книги:",
    key: "authorsOfBook",
    placeholder: "Л.Н. Яснопольского, А.Г. Власова ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Тип роботи:",
    key: "typeOfBook",
    placeholder: "монографія",
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
    placeholder: "10-15",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:[0-9]{1,4}|[0-9]{1,4}-[0-9]{1,4})")
    ],
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
