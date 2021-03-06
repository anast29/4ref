import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

export const SELECTED_INTERVIEW: Array<TSelectParams> = [
  {
    title: "Ім'я респондента:",
    key: "name",
    placeholder: "Іван",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Прізвище респондента:",
    key: "lastName",
    placeholder: "Іванов",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: true,
    validators: Validators.required,
  },
  {
    title: "По-батькові респондента:",
    key: "patronymic",
    placeholder: "Іванович",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: false,
  },
  {
    title: "Назва:",
    key: "bookName",
    placeholder: "Зарубежный опыт в украинскую практик",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Тип бесіди/інтерв'ю",
    key: "typeOfInterview",
    placeholder: "беседа с ректором ОНАПТ, д-ром техн. наук  Б. В. Егоровым",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Інтерв'юер:",
    key: "interviewer",
    placeholder: "вела А. Деружинская ",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Видання:",
    key: "publish",
    placeholder: "Мир продуктов",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Випуск:",
    key: "numOfPublish",
    placeholder: "1",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "number",
  },
  {
    title: "Сторінки:",
    key: "pages",
    placeholder: "10-15",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:[0-9]{1,4}|[0-9]{1,4}-[0-9]{1,4})"),
    ],
  },
  {
    title: "Рік:",
    key: "year",
    placeholder: "2006",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: [
      Validators.required,
      Validators.pattern("(?:17|18|19|20)[0-9]{2}"),
    ],
    inputType: "number",
  },
];
