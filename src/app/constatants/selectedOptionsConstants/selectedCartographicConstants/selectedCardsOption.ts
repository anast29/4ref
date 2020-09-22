import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_CARDS: Array<TSelectParams> = [
  {
    title: "Назва карти:",
    key: "name",
    placeholder: "Українські Карпати",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Додаткова назва:",
    key: "additionalName",
    placeholder: "Долина",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Тип карти:",
    key: "typeOfCard",
    placeholder: "карта для туристів ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Принадлежність:",
    key: "copyright",
    placeholder: "Голов. упр. геодезії, картографії та кадастру при Каб. Міністрів України.",
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
    title: "Кількість:",
    key: "count",
    placeholder: "5000",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "number"
  },
  {
    title: "Номер карти:",
    key: "number",
    placeholder: "1 к. : іл.",
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
