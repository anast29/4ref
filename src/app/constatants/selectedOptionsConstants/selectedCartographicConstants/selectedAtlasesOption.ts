import { Validators } from "@angular/forms";
import { TSelectParams } from "src/app/models/Models";

export const SELECTED_ATLASES: Array<TSelectParams> = [
  {
    title: "Назва атласу:",
    key: "name",
    placeholder: "Анатомія пам’яті",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Додаткова назва:",
    key: "additionalName",
    placeholder:
      "атлас схем і рисунків провідних шляхів і структур нервової системи, що беруть участь у процесах пам’яті ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Тип атласу:",
    key: "typeOfCard",
    placeholder: "посіб. для студ. та лікарів",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Укладачі:",
    key: "editors",
    placeholder: "О. Л. Дроздов, Л. А. Дзяк, В. О. Козлов, В. Д. Маковецький",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "2-ге вид., розшир. та допов.",
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
    placeholder: "Київ",
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
