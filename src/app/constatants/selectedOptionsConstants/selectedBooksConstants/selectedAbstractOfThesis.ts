import { TSelectParams } from "../../../models/Models";
import { Validators } from "@angular/forms";

// This model for first value in the select component
// <option>Книга</option>
export const SELECTED_THESIS_BOOK: Array<TSelectParams> = [
  {
    title: "Ім'я:",
    key: "name",
    placeholder: "Іван",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: true,
    validators: Validators.required,
  },{
    title: "Прізвище:",
    key: "lastName",
    placeholder: "Іванов",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: true,
    validators: Validators.required,
  },{
    title: "По-батькові:",
    key: "patronymic",
    placeholder: "Іванович",
    className: "col-lg-4 col-sm-4 col-md-4",
    required: false,
  },
  {
    title: "Назва роботи:",
    key: "workName",
    placeholder: "Удосконалення технології виробництва комбікормів для коней",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Науковий ступінь:",
    key: "degree",
    placeholder: "канд. техн. наук",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Науковий керівник:",
    key: "scienceCouch",
    placeholder: "Б.В. Єгоров",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Шифр:",
    key: "cipher",
    placeholder: "12.18.02",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
  {
    title: "Видавництво:",
    key: "publisher",
    placeholder: "ОНАХТ",
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
    title: "Дата захисту:",
    key: "dateOfProtect",
    placeholder: "",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "date"
  },{
    title: "Рік:",
    key: "year",
    placeholder: "2006",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    validators: Validators.pattern("(?:17|18|19|20)[0-9]{2}"),
    inputType: "number"
  },
];
