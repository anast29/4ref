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
  SIGNS_FOR_UA,
  SIGNS_FOR_EN,
  SIGNS_FOR_RU,
  THESIS_ITEM,
  ABSTRACT_THESIS_ITEM,
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
} from "src/app/constatants";
import {
  SELECTED_BOOK,
  SELECTED_SERIES_RESOURCE,
  SELECTED_SCIENCE_WORKS,
  SELECTED_MULTI_VOLUME_BOOK,
  SELECTED_LEGIS_DOCUMENT,
  SELECTED_STANDART_DESCRIPTION,
  SELECTED_PART_OF_BOOK,
  SELECTED_THESIS_BOOK,
  SELECTED_PAPER_FROM_MAGAZINE,
  SELECTED_PAPER_FROM_BOOK,
  SELECTED_PAPER_FROM_VOLUME,
  SELECTED_PAPER_FROM_NEWSPAPER,
  SELECTED_PAPER_FROM_SCIENCE_WORKS,
  SELECTED_LOCAL_ELECTRONIC_RESOURCE,
  SELECTED_REMOTE_ELECTRONIC_RESOURCE,
  SELECTED_WEBSITE_RESOURCE,
  SELECTED_PAGE_FROM_WEBSITE,
  SELECTED_INTERNET_PORTAL,
} from "../../../constatants/selectedOptionsConstants";
import { TSelectedKeys, TSelectedLanguageKeys } from "src/app/models/Models";

export const SELECTED_BOOKS_KEYS: TSelectedKeys = {
  [BOOK_ITEM]: SELECTED_BOOK,
  [SERIES_RESOURSE_ITEM]: SELECTED_SERIES_RESOURCE,
  [SCIENCE_WORKS_ITEM]: SELECTED_SCIENCE_WORKS,
  [MULTI_VOLUME_BOOKS_ITEM]: SELECTED_MULTI_VOLUME_BOOK,
  [LEGIS_DOCUMENT_ITEM]: SELECTED_LEGIS_DOCUMENT,
  [STANDART_DESCRIPTION_ITEM]: SELECTED_STANDART_DESCRIPTION,
  [PART_OF_BOOK_ITEM]: SELECTED_PART_OF_BOOK,
  [THESIS_ITEM]: SELECTED_THESIS_BOOK,
  [ABSTRACT_THESIS_ITEM]: SELECTED_THESIS_BOOK,
}

export const SELECTED_PAPER_KEYS: TSelectedKeys = {
  [PAPER_FROM_MAGAZINE_ITEM]: SELECTED_PAPER_FROM_MAGAZINE,
  [PAPER_FROM_BOOK_ITEM]: SELECTED_PAPER_FROM_BOOK,
  [PAPER_FROM_VOLUME_ITEM]: SELECTED_PAPER_FROM_VOLUME,
  [PAPER_FROM_NEWSPAPER_ITEM]: SELECTED_PAPER_FROM_NEWSPAPER,
  [PAPER_FROM_SCIENCE_WORKS_ITEM]: SELECTED_PAPER_FROM_SCIENCE_WORKS
}

export const SELECTED_ELECTRONIC_KEYS: TSelectedKeys = {
  [LOCAL_ELECTRONIC_ITEM]: SELECTED_LOCAL_ELECTRONIC_RESOURCE,
  [REMOTE_ELECTRONIC_ITEM]: SELECTED_REMOTE_ELECTRONIC_RESOURCE,
  [WEBSITE_ITEM]: SELECTED_WEBSITE_RESOURCE,
  [PAGE_FROM_WEBSITE_ITEM]: SELECTED_PAGE_FROM_WEBSITE,
  [INTERNET_PORTAL_ITEM]: SELECTED_INTERNET_PORTAL
}

export const SELECTED_LANGUAGES_KEYS: TSelectedLanguageKeys = {
  [LANGUAGE_UA]: SIGNS_FOR_UA,
  [LANGUAGE_EN]: SIGNS_FOR_EN,
  [LANGUAGE_RU]: SIGNS_FOR_RU,
}