import { TSelectParams } from "src/app/models/Models";
import { Validators } from "@angular/forms";

export const ADDITIONAL_BOOK_OPTIONS: Array<TSelectParams> = [
  {
    title: "Укладачі:",
    key: "created",
    placeholder: "Л. Л. Лобоцька, Г. Б. Пчелянська",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder:
      "Текст болг. чи (Препринт / НАН України, Ін-т пробл. безпеки АЕС ; 06–1)",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
];

export const ADDITIONAL_MULTI_VOLUME_OPTIONS: Array<TSelectParams> = [

  {
    title: "Опис тому:",
    key: "volumeName",
    placeholder: "Бібліогр.: с. 143–144 (14 назв)",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
  },
];

export const ADDITIONAL_STANDARTS_OPTIONS: Array<TSelectParams> = [
  {
    title: "Чинний:",
    key: "date",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: true,
    validators: Validators.required,
    inputType: "date",
  },
  {
    title: "Тип стандарту:",
    key: "typeOfStandart",
    placeholder: "Національний стандарт України",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
];

export const ADDITIONAL_THESIS_OPTIONS: Array<TSelectParams> = [
  {
    title: "Дата затвердження:",
    key: "dateApprove",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
    inputType: "date",
  },
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Бібліогр.: с. 32–38 (21 назв).",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
];

export const ADDITIONAL_NOTATES_OPTIONS: Array<TSelectParams> = [
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Бібліогр.: 7 назв.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
];

export const ADDITIONAL_ELECTRONIC_OPTIONS: Array<TSelectParams> = [
  {
    title: "Нотатки:",
    key: "notates",
    placeholder: "Бібліогр.: 7 назв.",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
  {
    title: "Укладачі:",
    key: "created",
    placeholder: "Л. Л. Лобоцька, Г. Б. Пчелянська",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  },
];

export const EDITOR_OPTION: Array<TSelectParams> = [
  {
    title: "За редакцією:",
    key: "articleEditor",
    placeholder: "Л.Н. Яснопольского",
    className: "col-lg-6 col-sm-6 col-md-6",
    required: false,
  }
];
