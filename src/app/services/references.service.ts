import { Injectable } from "@angular/core";
import {
  BOOK_ITEM,
  SERIES_RESOURSE_ITEM,
  SCIENCE_WORKS_ITEM,
  MULTI_VOLUME_BOOKS_ITEM,
  LEGIS_DOCUMENT_ITEM,
  STANDART_DESCRIPTION_ITEM,
  PART_OF_BOOK_ITEM,
  THESIS_ITEM,
  ABSTRACT_THESIS_ITEM,
  PAPER_ITEM,
  PAPER_FROM_MAGAZINE_ITEM,
  PAPER_FROM_NEWSPAPER_ITEM,
  PAPER_FROM_BOOK_ITEM,
  PAPER_FROM_VOLUME_ITEM,
  PAPER_FROM_SCIENCE_WORKS_ITEM,
  ELECTRONIC_ITEM,
  LOCAL_ELECTRONIC_ITEM,
  REMOTE_ELECTRONIC_ITEM,
  WEBSITE_ITEM,
  PAGE_FROM_WEBSITE_ITEM,
  INTERNET_PORTAL_ITEM,
  UPPERCASE,
  LOWERCASE,
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
export class ReferencesService extends BaseComponent {
  private isMoreThanFourAuthors: boolean;
  private selectedSigns: TSelectSignsParams;

  constructor() {
    super();
  }

  /**
   *
   * @selected "Книга"
   * @selected "Багатотомне видання"
   */
  private getBookItemReference(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      articleEditor,
      volumeNum,
      volumeName,
      typeOfWork,
      publisher,
      pages,
      bookName,
      city,
      year,
    } = values;

    const {
      biblBookEditor,
      bookEditor,
      pages: pagesSgn,
      volume: volumeSgn
    } = this.selectedSigns;

    const bookNameStr = this.translateToUppercase(bookName);
    const typeOfWorkStr = this.getExtensionValue(typeOfWork, LOWERCASE);
    const articleEditorStr = this.getEditorValue(articleEditor, {
      firstSign: this.isMoreThanFourAuthors ? biblBookEditor : bookEditor
    });

    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: pagesSgn
    });

    // if selected multi-volume books option
    const volumeValueStr = this.getVolumeValue(
      volumeNum,
      volumeName,
      volumeSgn
    );

    const mainPart = `${bookNameStr}${typeOfWorkStr}`;
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      mainPart,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );

    const reference = `${partWithAuthors}${articleEditorStr}. ${cityStr}${publisherStr}${yearStr}${volumeValueStr}${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Глава, розділ книги" */
  private getPartOfBookReference(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      articleEditor,
      typeOfWork,
      nameOfPart,
      partOfBook,
      publisher,
      pages,
      bookName,
      city,
      year,
    } = values;

    const {bookEditor, biblBookEditor, scaleOfPages, topic} = this.selectedSigns;

    const bookNameStr = this.translateToUppercase(bookName);
    const nameOfPartStr = this.translateToUppercase(nameOfPart);
    const typeOfWorkStr = this.getExtensionValue(typeOfWork, LOWERCASE);
    const articleEditorStr = this.getEditorValue(articleEditor, {
      firstSign: this.isMoreThanFourAuthors ? biblBookEditor : bookEditor
    });

    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: scaleOfPages 
    });

    // if selected part of book orion
    const partOfBookStr = this.transformValue(partOfBook, LOWERCASE, {
      firstSign: topic,
      lastSign: ". ",
    });

    const mainPart = `${nameOfPartStr} // ${bookNameStr}${typeOfWorkStr}`;
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      mainPart,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );

    const reference = `${partWithAuthors}${articleEditorStr}. ${cityStr}${publisherStr}${yearStr}. ${partOfBookStr}${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Збірник наук. праць і мат-в кон-цій" */
  private getScienceWork(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      publisher,
      bookName,
      copyrigth,
      typeOfWork,
      city,
      pages,
      year,
    } = values;
    const bookNameStr = this.translateToUppercase(bookName);
    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: this.selectedSigns.scaleOfPages,
    });

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      bookNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );

    const reference = `${partWithAuthors} // ${typeOfWork} / ${copyrigth}. ${cityStr}${publisherStr}${yearStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Серіальний ресурс" */
  private getSeriesResourseItemReference(values: TValues): TCreatedTableItem {
    const bookvalue = this.getBookItemReference(values).reference;

    const reference = `${bookvalue} (${values.seriesResource})`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Опис стандартів" */
  private getStandartItemReference(values: TValues): TCreatedTableItem {
    const { iso, name, pages, year, city } = values;
    const { pages: pagesSgn } = this.selectedSigns;

    const nameStr = this.translateToUppercase(name);
    const isoStr = this.translateToUppercase(iso);

    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: pagesSgn,
    });

    const reference = `${isoStr}. ${nameStr}. ${cityStr}${yearStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);

    return { reference, transliteration };
  }

  /** @selected "Законодавчий документ" */
  private getLigestiveItemReferences(values: TValues): TCreatedTableItem {
    const {
      documentOfLaw,
      law,
      nameOfLaw,
      pages,
      publisherOfLaw,
      city,
      year,
    } = values;

    const nameOfLawStr = this.translateToUppercase(nameOfLaw);
    const lawStr = this.translateToUppercase(law);
    const publisherOfLawStr = this.translateToUppercase(publisherOfLaw);
    const documentOfLawStr = this.transformValue(documentOfLaw, LOWERCASE, {
      firstSign: " // ",
    });
    const cityStr = this.translateToUppercase(city);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${nameOfLawStr}: ${lawStr}${documentOfLawStr}. ${cityStr}: ${publisherOfLawStr}${yearStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /**
   * @selected "Автореферат дисертації"
   * @selected "Дисертація"
   */
  private getThesisItemReference(
    values: TValues,
    isAbsctractThesis: boolean
  ): TCreatedTableItem {
    const {
      city,
      cipher,
      dateOfProtect,
      degree,
      lastName,
      name,
      pages,
      patronymic,
      publisher,
      scienceCouch,
      workName,
      year,
    } = values;

    const author = this.getAuthorsStr(name, lastName, patronymic);
    const workNameStr = this.transformValue(workName, UPPERCASE, {
      lastSign: isAbsctractThesis
        ? this.selectedSigns.thesis
        : this.selectedSigns.thesisByDegree,
    });
    const degreeStr = this.transformValue(degree);
    const cipherStr = this.transformValue(cipher, LOWERCASE, {
      lastSign: this.selectedSigns.safeValue,
    });
    const dateOfProtectStr = this.editerDate(dateOfProtect);
    const scienceCouchStr = this.transformValue(scienceCouch, UPPERCASE, {
      firstSign: this.selectedSigns.mentor,
    });

    const cityStr = this.translateToUppercase(city);
    const publisherStr = this.getExtensionValue(publisher, UPPERCASE);
    const yearStr = this.getYearValue(year);
    const pagesStr = this.getPagesValue(pages, {
      lastSign: this.selectedSigns.pages,
    });

    const reference = `${author} ${workNameStr}${degreeStr} : ${cipherStr}${dateOfProtectStr}${scienceCouchStr}. ${cityStr}${publisherStr}${yearStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /**
   *
   * @selected "Стаття з журналу"
   * @selected "Стаття з окремого тому видання"
   * @selected "Стаття з наукових праць"
   */
  private getPaperItemReference(values: TValues): TCreatedTableItem {
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
    } = values;
    const magazineNameStr = this.transformValue(magazineName, UPPERCASE, {
      firstSign: " // ",
    });
    const paperNameStr = this.translateToUppercase(paperName);
    const partOfMagazineStr = this.transformValue(partOfMagazine, LOWERCASE, {
      firstSign: volumeOfMagazine ? this.selectedSigns.series : this.selectedSigns.number,
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

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      paperNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );
    const reference = `${partWithAuthors}${magazineNameStr}${copyrigthStr}. ${cityStr}${
      city ? yearStr : year
    }.${partOfMagazineStr}${volumeOfMagazineStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Стаття з книги" */
  private getPaperOfBookItemReference(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      authorsOfBook,
      typeOfBook,
      articleEditor,
      bookName,
      pages,
      paperName,
      city,
      year,
    } = values;
    const {bookEditor, biblBookEditor, scaleOfPages} = this.selectedSigns;
    const bookNameStr = this.translateToUppercase(bookName);
    const paperNameStr = this.translateToUppercase(paperName);
    const articleEditorStr = this.getEditorValue(articleEditor, {
      firstSign: this.isMoreThanFourAuthors ? biblBookEditor : bookEditor,
    });
    const authorsOfBookStr = this.transformValue(authorsOfBook, UPPERCASE, {
      firstSign: ' / ',
    });
    const typeOfBookStr = this.getExtensionValue(typeOfBook, LOWERCASE);

    const cityStr = this.translateToUppercase(city);
    const pagesStr = this.getPagesValue(pages, {
      firstSign: scaleOfPages,
    });
    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      paperNameStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );
    const yearStr = this.getYearValue(year);

    const reference = `${partWithAuthors} // ${bookNameStr}${typeOfBookStr}${authorsOfBookStr}${articleEditorStr}. ${cityStr}${yearStr}. ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Стаття з газети" */
  private getNewspaperItemReference(values: TValues): TCreatedTableItem {
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
      this.isMoreThanFourAuthors
    );

    const reference = `${partWithAuthors} // ${bookNameStr}. ${yearStr}${publishDateStr} (${volumeStr}). ${pagesStr}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Електронний ресурс локального доступу" */
  private getLocalElectronicItemReference(values: TValues): TCreatedTableItem {
    const {
      authors = "",
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
    const copyrigthStr = this.transformValue(copyrigth, UPPERCASE, {
      firstSign: " / ",
    });
    const appendPart = this.getElectronicCityValue(city, year);

    const mainPart = `${elecResourceStr}${typeOfResourceStr}`;
    let partWithAuthors = this.addAuthorsToRefer(
      authors,
      mainPart,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );
    const reference = `${partWithAuthors}${copyrigthStr}.${appendPart} ${typeOfAccess}.`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Електронний ресурс віддаленого доступу" */
  private getRemoteElectronicItemReference(values: TValues): TCreatedTableItem {
    const {
      authors = "",
      city,
      date,
      elecResource,
      resource,
      url,
      year,
    } = values;
    const elecResourceStr = this.translateToUppercase(elecResource);
    const resourceStr = this.transformValue(resource);
    const dateStr = this.editerDate(date);
    const appendPart = this.getElectronicCityValue(city, year);
    // @TODO: Figure out how better add the url with link to references
    // const urlStr = this.getUrlValue(url);

    const partWithAuthors = this.addAuthorsToRefer(
      authors,
      elecResourceStr,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );
    const reference = `${partWithAuthors} // ${resourceStr}.${appendPart} URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /**
   * @selected "Веб-сайт"
   * @selected "Сторінка з веб-сайту"
   */
  private getWebSiteItemReference(values: TValues): TCreatedTableItem {
    const { pageOfWebsite = "", city, date, nameOfWebsite, url, year } = values;
    const nameOfWebsiteStr = this.transformValue(nameOfWebsite, UPPERCASE, {
      lastSign: this.selectedSigns.web,
    });
    const pageOfWebsiteStr = this.transformValue(pageOfWebsite, UPPERCASE, {
      lastSign: " // ",
    });
    const dateStr = this.editerDate(date);
    const appendPart = this.getElectronicCityValue(city, year);
    // @TODO: Figure out how better add the url with link to references
    // const urlStr = this.getUrlValue(url);

    const reference = `${pageOfWebsiteStr}${nameOfWebsiteStr}.${appendPart} URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  /** @selected "Інтернет портал" */
  private getInternetPortalItemReference(values: TValues): TCreatedTableItem {
    const { city, date, nameOfWebsite, url, year } = values;
    const nameOfWebsiteStr = this.transformValue(nameOfWebsite, UPPERCASE, {
      lastSign: this.selectedSigns.portal,
    });
    const dateStr = this.editerDate(date);
    const appendPart = this.getElectronicCityValue(city, year);
    // @TODO: Figure out how better add the url with link to references
    // const urlStr = this.getUrlValue(url);

    const reference = `${nameOfWebsiteStr}.${appendPart} URL: ${url} (${this.selectedSigns.date} ${dateStr}).`;
    const transliteration = this.getTransliteration(reference);
    return { reference, transliteration };
  }

  private createPaperReference(
    values: TValues,
    paperOption: string
  ): TCreatedTableItem {
    switch (paperOption) {
      case PAPER_FROM_MAGAZINE_ITEM:
      case PAPER_FROM_VOLUME_ITEM:
      case PAPER_FROM_SCIENCE_WORKS_ITEM:
        return this.getPaperItemReference(values);
      case PAPER_FROM_BOOK_ITEM:
        return this.getPaperOfBookItemReference(values);
      case PAPER_FROM_NEWSPAPER_ITEM:
        return this.getNewspaperItemReference(values);
    }
  }

  private createElectronicReference(
    values: TValues,
    electronicOption: string
  ): TCreatedTableItem {
    switch (electronicOption) {
      case LOCAL_ELECTRONIC_ITEM:
        return this.getLocalElectronicItemReference(values);
      case REMOTE_ELECTRONIC_ITEM:
        return this.getRemoteElectronicItemReference(values);
      case WEBSITE_ITEM:
      case PAGE_FROM_WEBSITE_ITEM:
        return this.getWebSiteItemReference(values);
      case INTERNET_PORTAL_ITEM:
        return this.getInternetPortalItemReference(values);
    }
  }

  public createReferences(
    option: string,
    paperOption: string,
    electronicOption: string,
    values: TValues,
    selectedSigns: TSelectSignsParams,
    isMoreThanFourAuthors: boolean
  ): TCreatedTableItem {
    const isAbsctractThesis = option === ABSTRACT_THESIS_ITEM;
    this.isMoreThanFourAuthors = isMoreThanFourAuthors;
    this.selectedSigns = selectedSigns;

    switch (option) {
      case BOOK_ITEM:
      case MULTI_VOLUME_BOOKS_ITEM:
        return this.getBookItemReference(values);
      case PART_OF_BOOK_ITEM:
        return this.getPartOfBookReference(values);
      case SCIENCE_WORKS_ITEM:
        return this.getScienceWork(values);
      case SERIES_RESOURSE_ITEM:
        return this.getSeriesResourseItemReference(values);
      case LEGIS_DOCUMENT_ITEM:
        return this.getLigestiveItemReferences(values);
      case STANDART_DESCRIPTION_ITEM:
        return this.getStandartItemReference(values);
      case THESIS_ITEM:
      case ABSTRACT_THESIS_ITEM:
        return this.getThesisItemReference(values, isAbsctractThesis);
      case PAPER_ITEM:
        return this.createPaperReference(values, paperOption);
      case ELECTRONIC_ITEM:
        return this.createElectronicReference(values, electronicOption);
    }
  }
}
