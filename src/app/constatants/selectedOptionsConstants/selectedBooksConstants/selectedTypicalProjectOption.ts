import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

export const SELECTED_TYPICAL_PROJECT: Array<TSelectParams> = [
  {
    title: "Назва проекту:",
    key: "nameOfProject",
    placeholder: "Сховище вибухових матеріалів місткістю 420 тонн з цегли ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип проекту:",
    key: "typeOfProject",
    placeholder: "Типовий проект 705–3–3888 ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Затверджений:",
    key: "approved",
    placeholder: "М-вом пром-сті України 13.11.93",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Принадлежність:",
    key: "copyright",
    placeholder: 'ВАТ "Укргіпроруда"',
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  }, 
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: 'кресл.',
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false
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
    title: "Чинний:",
    key: "date",
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
    inputType: "number"
  },
];
