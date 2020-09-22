import { Injectable } from "@angular/core";
import {
  BOOK_ITEM,
  SCIENCE_WORKS_ITEM,
  MULTI_VOLUME_BOOKS_ITEM,
  PART_OF_BOOK_ITEM,
  SERIES_RESOURSE_ITEM,
  LEGIS_DOCUMENT_ITEM,
  STANDART_DESCRIPTION_ITEM,
  THESIS_ITEM,
  ABSTRACT_THESIS_ITEM,
  PAPER_ITEM,
  ELECTRONIC_ITEM,
  YEARBOOKS_ITEM,
  TYPICAL_PROJECT_ITEM,
  PRICE_LIST_ITEM,
  POSTCARD_ITEM,
  INTERVIEW_ITEM,
  CATALOGS_ITEM,
  LOCAL_ELECTRONIC_ITEM,
  REMOTE_ELECTRONIC_ITEM,
  WEBSITE_ITEM,
  PAGE_FROM_WEBSITE_ITEM,
  INTERNET_PORTAL_ITEM,
  PAPER_FROM_MAGAZINE_ITEM,
  PAPER_FROM_VOLUME_ITEM,
  PAPER_FROM_SCIENCE_WORKS_ITEM,
  PAPER_FROM_BOOK_ITEM,
  PAPER_FROM_NEWSPAPER_ITEM,
  UPPERCASE,
  LOWERCASE,
  RULES_AND_REGULATIONS_ITEM,
  SANITARY_RULES_ITEM,
  CONSTRUCTION_RULES_ITEM,
  CARTOGRAPHIC_EDITIONS_ITEM,
  CARDS_ITEM,
  ATLASES_ITEM,
  MUSIC_ITEM,
} from "../constatants";
import {
  TCreatedTableItem,
  TSelectSignsParams,
  TValues,
} from "../models/Models";
import { BaseComponent } from "../abstracts/base.component";

@Injectable({
  providedIn: "root",
})
export class BibliographyService extends BaseComponent {
  private isMoreThanFourAuthors: boolean;
  private selectedSigns: TSelectSignsParams;

  constructor() {
    super();
  }

  /**
   *
   * @selected "Книга"
   * @selected "Серіальний ресурс"
   * @selected "Багатотомне видання"
   */
  private getBookItemBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      articleEditor,
      bookName,
      city,
      created,
      seriesResource,
      notates,
      pages,
      publisher,
      year,
      typeOfWork,
      volumeName ,
      volumeNum,
    } = values;

    const bookNameStr = this.translateToUppercase(bookName);
    const typeOfWorkStr = this.getExtensionValue(typeOfWork, LOWERCASE);
    const createdStr = this.transformValue(created, UPPERCASE, {
      firstSign: this.selectedSigns.editors,
      lastSign: articleEditor ? "" : ".",
    });
    const articleEditorStr = this.transformValue(articleEditor, UPPERCASE, {
      firstSign: this.selectedSigns.biblBookEditor,
      lastSign: ".",
    });
    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);

    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const lastStr = this.transformValue(
      seriesResource ? `(${seriesResource})` : notates,
      UPPERCASE,
      {
        firstSign: " - ",
        lastSign: ".",
      }
    );

    const volumeNumStr = this.transformValue(volumeNum, UPPERCASE, {
      firstSign: this.selectedSigns.volume,
      lastSign: ". - ",
    });
    const volumeNameStr = this.transformValue(volumeName, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });

    const mainPart = `${bookNameStr}${typeOfWorkStr}`;
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      mainPart,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );

    const reference = `${partWithAuthors}${createdStr}${articleEditorStr} - ${cityStr}${publisherStr}${yearStr}. - ${volumeNumStr}${pagesStr}.${lastStr}${volumeNameStr}`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Глава, розділ книги" */
  private getBookPartItemBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      articleEditor,
      bookName,
      city,
      pages,
      publisher,
      year,
      typeOfWork,
      nameOfPart,
      partOfBook,
    } = values;

    const bookNameStr = this.translateToUppercase(bookName);
    const nameOfParStr = this.translateToUppercase(nameOfPart);
    const partOfBookStr = this.transformValue(partOfBook, LOWERCASE, {
      firstSign: `. - ${this.selectedSigns.biblTopic}`,
    });
    const typeOfWorkStr = this.getExtensionValue(typeOfWork, LOWERCASE);
    const articleEditorStr = this.transformValue(articleEditor, UPPERCASE, {
      firstSign: this.selectedSigns.biblBookEditor
    });

    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      nameOfParStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );

    const reference = `${partWithAuthors} // ${bookNameStr}${typeOfWorkStr}${articleEditorStr}. - ${cityStr}${publisherStr}${yearStr}${partOfBookStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Збірник наук. праць і мат-в кон-цій" */
  private getScienceWorkBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      bookName,
      city,
      copyrigth,
      pages,
      publisher,
      year,
    } = values;

    const bookNameStr = this.translateToUppercase(bookName);
    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const copyrigthStr = this.transformValue(copyrigth, UPPERCASE, {
      firstSign: authors ? "; " : " / ",
    });
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      bookNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );

    const reference = `${partWithAuthors}${copyrigthStr} - ${cityStr}${publisherStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Опис стандартів" */
  private getStandartBibliography(values: TValues): TCreatedTableItem {
    const {
      date,
      iso,
      name,
      pages,
      publisher,
      typeOfStandart,
      year,
      city,
    } = values;

    const nameStr = this.translateToUppercase(name);
    const isoStr = this.translateToUppercase(iso);
    const typeOfStandartStr = this.transformValue(typeOfStandart, UPPERCASE, {
      firstSign: " - (",
      lastSign: ").",
    });
    const dateValue = this.editerDate(date);
    const dateStr = this.transformValue(dateValue, LOWERCASE, {
      firstSign: this.selectedSigns.actual,
    });

    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });

    const reference = `${isoStr}. ${nameStr}. - [${dateStr}]. - ${cityStr}${publisherStr}${yearStr}. - ${pagesStr}.${typeOfStandartStr}`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Законодавчий документ" */
  private getLegisyBibliography(values: TValues): TCreatedTableItem {
    const {
      city,
      documentOfLaw,
      law,
      nameOfLaw,
      pages,
      publisherOfLaw,
      year,
    } = values;

    const nameOfLawStr = this.translateToUppercase(nameOfLaw);
    const lawStr = this.translateToUppercase(law);
    const documentOfLawStr = this.transformValue(documentOfLaw, UPPERCASE, {
      firstSign: " // ",
    });

    const publisherOfLawStr = this.translateToUppercase(publisherOfLaw);
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${nameOfLawStr}: ${lawStr}${documentOfLawStr}. - ${cityStr}: ${publisherOfLawStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Щорічники" */
  private getYearBooksBibliography(values: TValues): TCreatedTableItem {
    const {
      articleEditor,
      bookName,
      city,
      copyright,
      pages,
      typeOfWork,
      year,
    } = values;

    const bookNameStr = this.translateToUppercase(bookName);
    const typeOfWorkStr = this.getExtensionValue(typeOfWork, LOWERCASE);
    const copyrightStr = this.translateToUppercase(copyright);
    const articleEditorStr = this.transformValue(articleEditor, UPPERCASE, {
      firstSign: this.selectedSigns.edit_im,
    });

    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${bookNameStr}${typeOfWorkStr} / ${copyrightStr}${articleEditorStr}. - ${cityStr}: ${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Типовий проект" */
  private getTypicalProjectBibliography(values: TValues): TCreatedTableItem {
    const {
      approved,
      city,
      copyright,
      date,
      nameOfProject,
      notates,
      pages,
      typeOfProject,
      year,
    } = values;

    const nameOfProjectStr = this.translateToUppercase(nameOfProject);
    const typeOfProjectStr = this.getExtensionValue(typeOfProject, LOWERCASE);
    const copyrightStr = this.translateToUppercase(copyright);
    const approvedStr = this.transformValue(approved, UPPERCASE, {
      firstSign: this.selectedSigns.accept,
    });
    const dateValue = this.editerDate(date);
    const dateStr = this.transformValue(dateValue, LOWERCASE, {
      firstSign: this.selectedSigns.actual,
    });
    const notatesStr = this.transformValue(notates, LOWERCASE, {
      firstSign: ": ",
      lastSign: ".",
    });

    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${nameOfProjectStr}${typeOfProjectStr}${approvedStr}: ${dateStr} / ${copyrightStr}. - ${cityStr}${yearStr}. - ${pagesStr}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Прейскурант" */
  private getPriceListBibliography(values: TValues): TCreatedTableItem {
    const {
      nameOfPrice,
      numberOfPrice,
      approved,
      city,
      date,
      pages,
      year,
    } = values;

    const nameOfPriceStr = this.translateToUppercase(nameOfPrice);
    const numberOfPriceStr = this.translateToUppercase(numberOfPrice);
    const approvedStr = this.transformValue(approved, UPPERCASE, {
      firstSign: this.selectedSigns.acceptInfo,
    });

    const dateValue = this.editerDate(date);
    const dateStr = this.transformValue(dateValue, LOWERCASE, {
      firstSign: this.selectedSigns.workFrom,
    });

    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${this.selectedSigns.prices}${numberOfPriceStr}. ${nameOfPriceStr}${approvedStr}: ${dateStr}. - ${cityStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Листівка" */
  private getPostcardBibliography(values: TValues): TCreatedTableItem {
    const {
      city,
      copyright,
      nameOfPostcard,
      notates,
      pages,
      publisher,
      typeOfPostcard,
      year,
    } = values;

    const nameOfPostcardStr = this.translateToUppercase(nameOfPostcard);
    const typeOfPostcardStr = this.transformValue(typeOfPostcard, UPPERCASE, {
      firstSign: ": [",
      lastSign: "]",
    });
    const copyrightStr = this.transformValue(copyright, UPPERCASE, {
      firstSign: " / ",
    });
    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });

    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);

    const reference = `${nameOfPostcardStr}${typeOfPostcardStr}${copyrightStr}. - ${cityStr}${publisherStr}${yearStr}. - ${pages}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Каталоги" */
  private getCatalogsBibliography(values: TValues): TCreatedTableItem {
    const {
      city,
      catalogName,
      typeOfCatalog,
      notates,
      pages,
      publisher,
      year,
    } = values;

    const catalogNamedStr = this.translateToUppercase(catalogName);
    const typeOfCatalogStr = this.getExtensionValue(typeOfCatalog, LOWERCASE);

    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });

    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);

    const reference = `${catalogNamedStr}${typeOfCatalogStr}. - ${cityStr}${publisherStr}${yearStr}. - ${pages}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Бесіда, інтерв'ю" */
  private getInterviewBibliography(values: TValues): TCreatedTableItem {
    const {
      bookName,
      interviewer,
      lastName,
      name,
      patronymic,
      numOfPublish,
      pages,
      publish,
      typeOfInterview,
      year,
    } = values;

    const respondentStr = this.getAuthorsStr(name, lastName, patronymic);
    const bookNameStr = this.translateToUppercase(bookName);
    const publishStr = this.translateToUppercase(publish);
    const typeOfInterviewStr = this.getExtensionValue(
      typeOfInterview,
      LOWERCASE
    );
    const interviewerStr = this.transformValue(interviewer, LOWERCASE, {
      firstSign: " / ",
    });

    const yearStr = this.getYearValue(year);
    const pagesStr = this.transformValue(pages, LOWERCASE, {
      firstSign: this.selectedSigns.scaleOfPages,
    });

    const reference = `${respondentStr}${bookNameStr}${typeOfInterviewStr}${interviewerStr} // ${publishStr}. - ${yearStr}. - № ${numOfPublish}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /**
   * @selected "Автореферат дисертації"
   * @selected "Дисертація"
   */
  private getThesisItemBibliography(
    values: TValues,
    isAbsctractThesis: boolean
  ): TCreatedTableItem {
    const {
      city,
      cipher,
      dateOfProtect,
      dateApprove,
      degree,
      lastName,
      name,
      pages,
      patronymic,
      publisher,
      workName,
      year,
      notates,
    } = values;

    const author = this.getAuthorsStr(name, lastName, patronymic);
    const fullName = this.getAuthorsStr(name, lastName, patronymic, true);

    const workNameStr = this.transformValue(workName, UPPERCASE, {
      lastSign: isAbsctractThesis
        ? this.selectedSigns.thesis
        : this.selectedSigns.thesisByDegree,
    });
    const degreeStr = this.getExtensionValue(degree, LOWERCASE);
    const cipherStr = this.transformValue(cipher, LOWERCASE, {
      firstSign: ": ",
      lastSign: this.selectedSigns.biblSafe,
    });
    const dateOfProtectStr = this.editerDate(dateOfProtect);
    const dateApproveValue = this.editerDate(dateApprove);
    const dateApproveStr = this.transformValue(dateApproveValue, LOWERCASE, {
      firstSign: this.selectedSigns.acceptInfo,
    });

    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: this.selectedSigns.thesisNotates,
    });

    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${author} ${workNameStr}${degreeStr} ${cipherStr}${dateOfProtectStr}${dateApproveStr} / ${fullName}. - ${cityStr}${publisherStr}${yearStr}. - ${pagesStr}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /**
   *
   * @selected "Стаття з журналу"
   * @selected "Стаття з окремого тому видання"
   * @selected "Стаття з наукових праць"
   */
  private getPaperItemBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      copyrigth,
      magazineName,
      pages,
      paperName,
      partOfMagazine,
      volumeOfMagazine,
      year,
      city,
      notates,
    } = values;
    const magazineNameStr = magazineName ? `// ${magazineName}` : '';
    const paperNameStr = this.translateToUppercase(paperName);

    const partOfMagazineStr = this.transformValue(partOfMagazine, LOWERCASE, {
      firstSign: volumeOfMagazine
        ? this.selectedSigns.series
        : this.selectedSigns.number,
    });
    const volumeOfMagazineStr = this.transformValue(
      volumeOfMagazine,
      LOWERCASE,
      {
        firstSign: this.selectedSigns.volume,
      }
    );

    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });
    const copyrigthStr = this.transformValue(copyrigth, UPPERCASE, {
      firstSign: " / ",
    });
    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);
    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      paperNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );

    const reference = `${partWithAuthors}${magazineNameStr}${copyrigthStr}. - ${cityStr}${
      city ? yearStr : year
    }. - ${volumeOfMagazineStr}${partOfMagazineStr}. - ${pagesStr}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Стаття з книги" */
  private getPaperOfBookItemBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      authorsOfBook,
      articleEditor,
      typeOfBook,
      bookName,
      pages,
      paperName,
      city,
      year,
    } = values;
    const bookNameStr = this.translateToUppercase(bookName);
    const paperNameStr = this.translateToUppercase(paperName);
    const authorsOfBookStr = this.transformValue(authorsOfBook, UPPERCASE, {
      firstSign: " / ",
    });
    const articleEditorStr = this.getEditorValue(articleEditor, {
      firstSign: this.selectedSigns.bookEditor,
    });
    const typeOfBookStr = this.getExtensionValue(typeOfBook, LOWERCASE);

    const cityStr = this.translateToUppercase(city);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      paperNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );
    const yearStr = this.getYearValue(year);

    const reference = `${partWithAuthors} // ${bookNameStr}${typeOfBookStr}${authorsOfBookStr}${articleEditorStr}. - ${cityStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Стаття з газети" */
  private getNewspaperItemBibliography(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      bookName,
      pages,
      paperName,
      publishDate,
      publishNum,
      year,
    } = values;
    const convertDate = new Date(publishDate);
    const paperNameStr = this.translateToUppercase(paperName);
    const bookNameStr = this.translateToUppercase(bookName);
    const yearStr = this.transformValue(year, LOWERCASE, {
      lastSign: ". ",
    });
    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });
    const volumeStr = this.transformValue(publishNum, LOWERCASE, {
      firstSign: this.selectedSigns.volumeNum,
    });

    const dateStr = convertDate.getDate();
    const monthStr = this.selectedSigns.month[convertDate.getMonth()];
    const publishDateStr = `${dateStr} ${monthStr}`;
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      paperNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );

    const reference = `${partWithAuthors} // ${bookNameStr}. - ${yearStr}${publishDateStr} (${volumeStr}). - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Електронний ресурс локального доступу" */
  private getLocalElectronicItemBibliography(
    values: TValues
  ): TCreatedTableItem {
    const {
      authors = "",
      notates,
      created,
      city,
      copyrigth,
      elecResource,
      typeOfAccess,
      typeOfResource,
      year,
    } = values;
    const elecResourceStr = this.transformValue(elecResource, UPPERCASE, {
      lastSign: this.selectedSigns.resource,
    });
    const typeOfResourceStr = this.transformValue(typeOfResource, LOWERCASE);
    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });

    const cityStr = this.transformValue(city, UPPERCASE, {
      firstSign: ". - ",
      lastSign: copyrigth ? ": " : "",
    });
    const copyrigthStr = this.transformValue(copyrigth, UPPERCASE, {
      firstSign: city ? "" : ". - ",
    });
    const yearStr =
      city || copyrigth
        ? this.getYearValue(year)
        : this.transformValue(copyrigth, UPPERCASE, {
            firstSign: ". - ",
          });

    const createdStr = this.transformValue(created, UPPERCASE, {
      firstSign: this.selectedSigns.editors,
    });

    const mainPart = `${elecResourceStr}${typeOfResourceStr}`;
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      mainPart,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );
    const reference = `${partWithAuthors}${createdStr}${cityStr}${copyrigthStr}${yearStr}. - ${typeOfAccess}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Електронний ресурс віддаленого доступу" */
  private getRemoteElectronicItemBibliography(
    values: TValues
  ): TCreatedTableItem {
    const {
      authors = "",
      city,
      date,
      elecResource,
      resource,
      url,
      year,
      notates,
      created,
    } = values;
    const elecResourceStr = this.translateToUppercase(elecResource);
    const resourceStr = this.transformValue(resource);
    const dateStr = this.editerDate(date);

    const appendPart = this.getElectronicCityValue(city, year);
    const appendPartStr = this.transformValue(appendPart, UPPERCASE, {
      lastSign: ". - ",
    });
    // const urlStr = this.getUrlValue(url);

    const notatesStr = this.transformValue(notates, UPPERCASE, {
      lastSign: ". - ",
    });
    const createdStr = this.transformValue(created, UPPERCASE, {
      firstSign: this.selectedSigns.editors,
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      elecResourceStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors,
      true
    );
    const reference = `${partWithAuthors}${createdStr} // ${resourceStr}. - ${appendPartStr}${notatesStr}URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /**
   * @selected "Веб-сайт"
   * @selected "Сторінка з веб-сайту"
   */
  private getWebSiteItemBibliography(values: TValues): TCreatedTableItem {
    const { pageOfWebsite = "", city, date, nameOfWebsite, url, year } = values;
    const nameOfWebsiteStr = this.transformValue(nameOfWebsite, UPPERCASE, {
      lastSign: this.selectedSigns.webBibl,
    });
    const pageOfWebsiteStr = this.transformValue(pageOfWebsite, UPPERCASE, {
      lastSign: " // ",
    });
    const dateStr = this.editerDate(date);
    const appendPart = this.getElectronicCityValue(city, year);
    // const urlStr = this.getUrlValue(url);

    const reference = `${pageOfWebsiteStr}${nameOfWebsiteStr}. - ${appendPart}. - URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Інтернет портал" */
  private getInternetPortalItemBibliography(
    values: TValues
  ): TCreatedTableItem {
    const { city, date, nameOfWebsite, url, year } = values;
    const nameOfWebsiteStr = this.transformValue(nameOfWebsite, UPPERCASE, {
      lastSign: this.selectedSigns.portal,
    });
    const dateStr = this.editerDate(date);
    const appendPart = this.getElectronicCityValue(city, year);
    // const urlStr = this.getUrlValue(url);

    const reference = `${nameOfWebsiteStr}. - ${appendPart}. - URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Будівельні норми і правила" */
  private getConstructionRulesBibliography(values: TValues): TCreatedTableItem {
    const {
      cypher,
      nameOfStandart,
      typeOfStandart,
      city,
      pages,
      date,
      year,
    } = values;
    const cypherStr = this.translateToUppercase(cypher);
    const typeOfStandartStr = this.translateToUppercase(typeOfStandart);
    const nameOfStandartStr = this.translateToUppercase(nameOfStandart);

    const dateStr = this.editerDate(date);
    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${cypherStr}. ${typeOfStandartStr}. ${nameOfStandartStr}. - [${this.selectedSigns.actual}${dateStr}]. - ${cityStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Санітарні правила і норми" */
  private getSanitaryRulesBibliography(values: TValues): TCreatedTableItem {
    const {
      cypher,
      nameOfStandart,
      typeOfStandart,
      city,
      pages,
      approved,
      date,
      year,
    } = values;
    const cypherStr = this.translateToUppercase(cypher);
    const typeOfStandartStr = this.translateToUppercase(typeOfStandart);
    const nameOfStandartStr = this.translateToUppercase(nameOfStandart);
    const approvedStr = this.transformValue(approved, UPPERCASE, {
      firstSign: this.selectedSigns.accept,
    });

    const dateStr = this.editerDate(date);
    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${typeOfStandartStr}. ${nameOfStandartStr} : ${cypherStr} : ${approvedStr} ${dateStr}. - ${cityStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Картографічні видання" */
  private getCardsBibliography(values: TValues): TCreatedTableItem {
    const {
      name,
      additionalName,
      typeOfCard,
      copyright,
      count,
      number,
      year,
      city,
    } = values;
    const nameStr = this.transformValue(name, UPPERCASE, {
      lastSign: this.selectedSigns.map,
    });
    const additionalNameStr = this.getExtensionValue(additionalName, UPPERCASE);
    const typeOfCardStr = this.getExtensionValue(typeOfCard, LOWERCASE);
    const copyrightStr = this.transformValue(copyright, UPPERCASE, {
      firstSign: " / ",
    });
    const numberStr = this.translateToUppercase(number);

    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);

    const reference = `${nameStr}${additionalNameStr}${typeOfCardStr}${copyrightStr}. - ${cityStr}${yearStr}. - ${number}. - ${count}${this.selectedSigns.counts}`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Атласи" */
  private getAtlasesBibliography(values: TValues): TCreatedTableItem {
    const {
      name,
      additionalName,
      typeOfCard,
      editors,
      notates,
      pages,
      year,
      city,
    } = values;
    const nameStr = this.translateToUppercase(name);
    const additionalNameStr = this.getExtensionValue(additionalName, UPPERCASE);
    const typeOfCardStr = this.getExtensionValue(typeOfCard, LOWERCASE);
    const editorsStr = this.transformValue(editors, UPPERCASE, {
      firstSign: " / ",
    });

    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);
    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: " - ",
      lastSign: ".",
    });
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${nameStr}${additionalNameStr}${typeOfCardStr}${editorsStr}.${notatesStr} - ${cityStr}${yearStr}. - ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Ноти" */
  private getMusicBibliography(values: TValues): TCreatedTableItem {
    const {
      name,
      typeOfNotes,
      copyright,
      publisher,
      pages,
      year,
      city,
      notates,
    } = values;
    const nameStr = this.transformValue(name, UPPERCASE, {
      lastSign: this.selectedSigns.music,
    });
    const typeOfNotesStr = this.getExtensionValue(typeOfNotes, LOWERCASE);
    const copyrightStr = this.transformValue(copyright, UPPERCASE, {
      firstSign: " / ",
    });

    const yearStr = this.getYearValue(year);
    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const notatesStr = this.transformValue(notates, UPPERCASE, {
      firstSign: this.selectedSigns.thesisNotates,
      lastSign: ".",
    });

    const reference = `${nameStr}${typeOfNotesStr}${copyrightStr}. - ${cityStr}${publisherStr}${yearStr}. - ${pagesStr}.${notatesStr}`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  private createRulesAndRegulationsBibliography(
    values: TValues,
    rulesOption: string
  ): TCreatedTableItem {
    switch (rulesOption) {
      case CONSTRUCTION_RULES_ITEM:
        return this.getConstructionRulesBibliography(values);
      case SANITARY_RULES_ITEM:
        return this.getSanitaryRulesBibliography(values);
    }
  }

  private createCartographicBibliography(
    values: TValues,
    cartographicOption: string
  ): TCreatedTableItem {
    switch (cartographicOption) {
      case CARDS_ITEM:
        return this.getCardsBibliography(values);
      case ATLASES_ITEM:
        return this.getAtlasesBibliography(values);
      case MUSIC_ITEM:
        return this.getMusicBibliography(values);
    }
  }

  private createPaperBibliography(
    values: TValues,
    paperOption: string
  ): TCreatedTableItem {
    switch (paperOption) {
      case PAPER_FROM_MAGAZINE_ITEM:
      case PAPER_FROM_VOLUME_ITEM:
      case PAPER_FROM_SCIENCE_WORKS_ITEM:
        return this.getPaperItemBibliography(values);
      case PAPER_FROM_BOOK_ITEM:
        return this.getPaperOfBookItemBibliography(values);
      case PAPER_FROM_NEWSPAPER_ITEM:
        return this.getNewspaperItemBibliography(values);
    }
  }

  private createElectronicBibliography(
    values: TValues,
    electronicOption: string
  ): TCreatedTableItem {
    switch (electronicOption) {
      case LOCAL_ELECTRONIC_ITEM:
        return this.getLocalElectronicItemBibliography(values);
      case REMOTE_ELECTRONIC_ITEM:
        return this.getRemoteElectronicItemBibliography(values);
      case WEBSITE_ITEM:
      case PAGE_FROM_WEBSITE_ITEM:
        return this.getWebSiteItemBibliography(values);
      case INTERNET_PORTAL_ITEM:
        return this.getInternetPortalItemBibliography(values);
    }
  }

  public createBibliographyItem(
    option: string,
    paperOption: string,
    electronicOption: string,
    cartographicOption: string,
    rulesOption: string,
    values: TValues,
    selectedSigns: TSelectSignsParams,
    isMoreThanFourAuthors: boolean
  ): TCreatedTableItem {
    const isAbsctractThesis = option === ABSTRACT_THESIS_ITEM;
    this.isMoreThanFourAuthors = isMoreThanFourAuthors;
    this.selectedSigns = selectedSigns;

    switch (option) {
      case BOOK_ITEM:
      case SERIES_RESOURSE_ITEM:
      case MULTI_VOLUME_BOOKS_ITEM:
        return this.getBookItemBibliography(values);
      case PART_OF_BOOK_ITEM:
        return this.getBookPartItemBibliography(values);
      case SCIENCE_WORKS_ITEM:
        return this.getScienceWorkBibliography(values);
      case LEGIS_DOCUMENT_ITEM:
        return this.getLegisyBibliography(values);
      case STANDART_DESCRIPTION_ITEM:
        return this.getStandartBibliography(values);
      case THESIS_ITEM:
      case ABSTRACT_THESIS_ITEM:
        return this.getThesisItemBibliography(values, isAbsctractThesis);
      case YEARBOOKS_ITEM:
        return this.getYearBooksBibliography(values);
      case CATALOGS_ITEM:
        return this.getCatalogsBibliography(values);
      case TYPICAL_PROJECT_ITEM:
        return this.getTypicalProjectBibliography(values);
      case PRICE_LIST_ITEM:
        return this.getPriceListBibliography(values);
      case POSTCARD_ITEM:
        return this.getPostcardBibliography(values);
      case INTERVIEW_ITEM:
        return this.getInterviewBibliography(values);
      case PAPER_ITEM:
        return this.createPaperBibliography(values, paperOption);
      case ELECTRONIC_ITEM:
        return this.createElectronicBibliography(values, electronicOption);
      case RULES_AND_REGULATIONS_ITEM:
        return this.createRulesAndRegulationsBibliography(values, rulesOption);
      case CARTOGRAPHIC_EDITIONS_ITEM:
        return this.createCartographicBibliography(values, cartographicOption);
    }
  }
}
