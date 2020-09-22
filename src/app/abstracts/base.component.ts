import { TRANSLATIONS_LETTERS, LOWERCASE, UPPERCASE } from "../constatants";
import {
  TSignValue,
  TAuthorsModelSelected,
  TSelectSignsParams,
} from "../models/Models";

export abstract class BaseComponent {
  constructor() {}

  /**@generate transliteration for references
   * @params value as a string whish is created reference
   * compsre letters by array of constants TRANSLATIONS_LETTERS
   * and return transliteration values
   */
  public getTransliteration(value: string): string {
    let result = "";
    let curentSymbol = "";
    let currentValue: string;
    let transLetter: string;
    for (let i = 0, li = value.length; i < li; i++) {
      currentValue = value[i];
      transLetter = TRANSLATIONS_LETTERS[currentValue];
      if (transLetter) {
        result += transLetter;
        curentSymbol = transLetter;
      } else {
        result += currentValue;
        curentSymbol = currentValue;
      }
    }
    return result;
  }

  /**@generate authors value
   * @params authors as TAuthorsModelSelected[]
   * @params (nullable) reverse as boolean neccessary for bibliography
   * convert authors array to special string
   * @example lastName: Ivanov, name: Ivan, patronymic: Ivanovich
   * @result Ivanov I.I.
   * patronymic isn't required value for author info
   */
  public getAuthors(
    authors: TAuthorsModelSelected[],
    reverse?: boolean
  ): string {
    let authorStr = [];
    let currentAuthor;
    let currentName: string;
    let currentLastName: string;
    let currentPatronymic: string;
    for (let i = 0, li = authors.length; i < li; i++) {
      const { name, lastName, patronymic } = authors[i];
      currentLastName = this.formateStr(lastName);
      currentName = this.formateFirstLetter(name);
      currentPatronymic = patronymic ? this.formateFirstLetter(patronymic) : "";
      currentAuthor = reverse
        ? `${currentName} ${currentPatronymic} ${currentLastName}`
        : `${currentLastName} ${currentName} ${currentPatronymic}`;
      authorStr.push(currentAuthor);
    }
    return authorStr.join(", ");
  }

  /**@add authors to reference */
  public addAuthorsToRefer(
    authors: TAuthorsModelSelected[],
    mainPart: string,
    selectedSigns: TSelectSignsParams,
    isMoreThanFourAuthors: boolean,
    bibliography?: boolean
  ): string {
    if (!authors) return `${mainPart}`;
    const authorsCount = bibliography ? authors.slice(0,1) : authors;
    const authorStr = this.getAuthors(authorsCount);
    const authorReverseStr = this.getAuthors(authors, true);

    const authorSign = bibliography
      ? selectedSigns.biblAuthor
      : selectedSigns.authors;
    const biblPart = bibliography ? ` / ${authorReverseStr}` : ``;

    return isMoreThanFourAuthors
      ? `${mainPart} / ${bibliography ? authorReverseStr : authorStr}${authorSign}`
      : `${authorStr} ${mainPart}${biblPart}`;
  }

  public addAuthorsToBookRefer(
    authors: TAuthorsModelSelected[],
    mainPart: string,
    selectedSigns: TSelectSignsParams,
    isMoreThanFourAuthors: boolean
  ): string {
    if (!authors) return `${mainPart}. `;
    const authorStr = this.getAuthors(authors);

    return isMoreThanFourAuthors
      ? `${mainPart} / ${authorStr}${selectedSigns.authors}`
      : `${authorStr} ${mainPart}. `;
  }

  /**@generate value for single author and add full name if fullName = true */
  public getAuthorsStr(
    name: string,
    lastName: string,
    patronymic: string,
    fullName?: boolean
  ): string {
    let currentName: string;
    let currentLastName: string;
    let currentPatronymic: string;

    currentLastName = this.formateStr(lastName);
    currentName = fullName
      ? this.formateStr(name)
      : this.formateFirstLetter(name);
    currentPatronymic = fullName
      ? this.formateStr(patronymic)
      : this.formateFirstLetter(patronymic);

    return `${currentLastName} ${currentName} ${currentPatronymic}`;
  }

  public formateStr(value: string): string {
    if (!value) return "";
    return (
      value.trim().charAt(0).toUpperCase() +
      value.trim().substr(1).toLowerCase()
    );
  }

  public formateFirstLetter(value: string): string {
    if (!value) return "";
    const firstletter = value.trim().charAt(0).toUpperCase();
    return `${firstletter}.`;
  }

  public editerDate(value: any): string {
    const date = new Date(value);
    const day = +date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month =
      +date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const dateStr = day + "." + month + "." + date.getFullYear();
    return dateStr;
  }

  public getFirstLetter(typeOfCase: string, value: string,) {
    switch(typeOfCase) {
      case UPPERCASE: 
        return value.charAt(0).toUpperCase();
      case LOWERCASE: 
        return value.charAt(0).toLowerCase();
      default: 
        return value.charAt(0);
    }
  }

  public transformValue(
    value: string,
    typeOfCase?: string,
    sign?: TSignValue
  ) {
    if (!value) return '';
    const firstLetter = this.getFirstLetter(typeOfCase, value);
    const firstSign = sign?.firstSign || "";
    const lastSign = sign?.lastSign || "";

    value = firstLetter + this.sliceDot(value);

    return sign ? firstSign + value + lastSign : value;
  }

  public sliceDot(value: string): string {
    return value.trim().charAt(value.length - 1) === "."
      ? value.slice(1, -1)
      : value.slice(1);
  }

  public translateToUppercase(name: string): string {
    return this.transformValue(name, UPPERCASE);
  }

  public translateToLowercase(name: string): string {
    return this.transformValue(name, LOWERCASE);
  }

  public getYearValue(year: string): string {
    return this.transformValue(year, LOWERCASE, {
      firstSign: ", ",
    });
  }

  public getPagesValue(pages: string, sign: TSignValue): string {
    return this.transformValue(pages, LOWERCASE, sign);
  }

  public getExtensionValue(value: string, typeOfCase: string): string {
    return this.transformValue(value, typeOfCase, {
      firstSign: ": ",
    });
  }

  public getEditorValue(articleEditor: string, sign: TSignValue): string {
    return this.transformValue(articleEditor, UPPERCASE, sign);
  }

  public getElectronicCityValue(city: string, year: string) {
    if (!city && !year) return '';
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    return city && year ? ` ${cityStr}${yearStr}.` : ` ${cityStr}${year}.`;
  }

  public getVolumeValue(
    volumeNum: string,
    volumeName: string,
    sign: string
  ): string {
    const volumeNumStr = `${sign}${volumeNum}`;
    return volumeName ? this.transformValue(volumeName, UPPERCASE, {
      firstSign: `${volumeNumStr}: `,
      lastSign: ". ",
    }) : `${volumeNumStr}. `;
  }

  public getUrlValue(url: string): string {
    return `<a href="${url}">${url}</a>`;
  }
}
