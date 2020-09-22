import { TDropdownOptions } from "src/app/models/Models";
import {
  BOOK_ITEM,
  SERIES_RESOURSE_ITEM,
  SCIENCE_WORKS_ITEM,
  MULTI_VOLUME_BOOKS_ITEM,
  LEGIS_DOCUMENT_ITEM,
  STANDART_DESCRIPTION_ITEM,
  PART_OF_BOOK_ITEM,
  LANGUAGE_UA,
  LANGUAGE_EN,
  LANGUAGE_RU,
  NONE_AUTHORS,
  SINGLE_AUTHOR,
  TWO_AUTHORS,
  THREE_AUTHORS,
  MORE_AUTHORS,
  THESIS_ITEM,
  ABSTRACT_THESIS_ITEM,
  PAPER_ITEM,
  ELECTRONIC_ITEM,
  PAPER_FROM_MAGAZINE_ITEM,
  PAPER_FROM_BOOK_ITEM,
  PAPER_FROM_VOLUME_ITEM,
  PAPER_FROM_NEWSPAPER_ITEM,
  PAPER_FROM_SCIENCE_WORKS_ITEM,
  LOCAL_ELECTRONIC_ITEM,
  REMOTE_ELECTRONIC_ITEM,
  WEBSITE_ITEM,
  PAGE_FROM_WEBSITE_ITEM,
  INTERNET_PORTAL_ITEM,
  YEARBOOKS_ITEM,
  TYPICAL_PROJECT_ITEM,
  CATALOGS_ITEM,
  PRICE_LIST_ITEM,
  RULES_AND_REGULATIONS_ITEM,
  CARTOGRAPHIC_EDITIONS_ITEM,
  POSTCARD_ITEM,
  INTERVIEW_ITEM,
  CARDS_ITEM,
  ATLASES_ITEM,
  MUSIC_ITEM,
  CONSTRUCTION_RULES_ITEM,
  SANITARY_RULES_ITEM,
} from "src/app/constatants";

export const DROPDOWN_AUTHORS_OPTIONS: Array<TDropdownOptions> = [
  { value: NONE_AUTHORS, title: "немає автора" },
  { value: SINGLE_AUTHOR, title: "1" },
  { value: TWO_AUTHORS, title: "2" },
  { value: THREE_AUTHORS, title: "3" },
  { value: MORE_AUTHORS, title: "4 і більше" },
];
export const DROPDOWN_LANGUAGES_OPTIONS: Array<TDropdownOptions> = [
  { value: LANGUAGE_UA, title: "UA" },
  { value: LANGUAGE_EN, title: "EN" },
  { value: LANGUAGE_RU, title: "RU" },
];

export const DROPDOWN_BOOKS_OPTIONS: Array<TDropdownOptions> = [
  { value: BOOK_ITEM, title: "Книга" },
  { value: SERIES_RESOURSE_ITEM, title: "Серіальний ресурс" },
  { value: SCIENCE_WORKS_ITEM, title: "Збірник наук. праць і мат-в кон-цій" },
  { value: MULTI_VOLUME_BOOKS_ITEM, title: "Багатотомне видання" },
  { value: LEGIS_DOCUMENT_ITEM, title: "Законодавчий документ" },
  { value: ABSTRACT_THESIS_ITEM, title: "Автореферат дисертації" },
  { value: THESIS_ITEM, title: "Дисертація" },
  { value: STANDART_DESCRIPTION_ITEM, title: "Опис стандартів" },
  { value: YEARBOOKS_ITEM, title: "Щорічники" },
  { value: PAPER_ITEM, title: "Стаття" },
  { value: PART_OF_BOOK_ITEM, title: "Глава, розділ книги" },
  { value: ELECTRONIC_ITEM, title: "Електронне джерело" },
  { value: TYPICAL_PROJECT_ITEM, title: "Типовий проект" },
  { value: CATALOGS_ITEM, title: "Каталоги" },
  { value: PRICE_LIST_ITEM, title: "Прейскурант" },
  { value: RULES_AND_REGULATIONS_ITEM, title: "Правила та норми" },
  { value: CARTOGRAPHIC_EDITIONS_ITEM, title: "Картографічні видання" },
  { value: POSTCARD_ITEM, title: "Листівка" },
  { value: INTERVIEW_ITEM, title: "Бесіда, інтерв'ю" },
];

export const DROPDOWN_PAPERS_OPTIONS: Array<TDropdownOptions> = [
  { value: PAPER_FROM_MAGAZINE_ITEM, title: "Стаття з журналу" },
  { value: PAPER_FROM_BOOK_ITEM, title: "Стаття з книги" },
  { value: PAPER_FROM_VOLUME_ITEM, title: "Стаття з окремого тому видання" },
  { value: PAPER_FROM_NEWSPAPER_ITEM, title: "Стаття з газети" },
  { value: PAPER_FROM_SCIENCE_WORKS_ITEM, title: "Стаття з наукових праць" },
];

export const DROPDOWN_ELECTRONIS_RESOURCE_OPTIONS: Array<TDropdownOptions> = [
  {
    value: LOCAL_ELECTRONIC_ITEM,
    title: "Електронний ресурс локального доступу",
  },
  {
    value: REMOTE_ELECTRONIC_ITEM,
    title: "Електронний ресурс віддаленого доступу",
  },
  { value: WEBSITE_ITEM, title: "Веб-сайт" },
  { value: PAGE_FROM_WEBSITE_ITEM, title: "Сторінка з веб-сайту" },
  { value: INTERNET_PORTAL_ITEM, title: "Інтернет портал" },
];

export const DROPDOWN_RULES_OPTIONS: Array<TDropdownOptions> = [
  { value: CONSTRUCTION_RULES_ITEM, title: "Будівельні норми і правила" },
  { value: SANITARY_RULES_ITEM, title: "Санітарні правила і норми" },
];

export const DROPDOWN_CARDS_OPTIONS: Array<TDropdownOptions> = [
  { value: CARDS_ITEM, title: "Картографічні видання" },
  { value: ATLASES_ITEM, title: "Атласи" },
  { value: MUSIC_ITEM, title: "Ноти" },
];
