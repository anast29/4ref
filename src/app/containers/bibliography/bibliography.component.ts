import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { MatSort } from "@angular/material/sort";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import {
  AUTHORS_MODEL,
  NONE_AUTHORS,
  MORE_AUTHORS,
  SINGLE_AUTHOR,
  TWO_AUTHORS,
  THREE_AUTHORS,
  STANDART_DESCRIPTION_ITEM,
  LEGIS_DOCUMENT_ITEM,
  THESIS_ITEM,
  ABSTRACT_THESIS_ITEM,
  PAPER_ITEM,
  ELECTRONIC_ITEM,
  WEBSITE_ITEM,
  PAGE_FROM_WEBSITE_ITEM,
  INTERNET_PORTAL_ITEM,
  RULES_AND_REGULATIONS_ITEM,
  CARTOGRAPHIC_EDITIONS_ITEM,
  LANGUAGE_EN,
  TYPICAL_PROJECT_ITEM,
  PRICE_LIST_ITEM,
  YEARBOOKS_ITEM,
  POSTCARD_ITEM,
  INTERVIEW_ITEM,
  CATALOGS_ITEM,
} from "src/app/constatants";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { SaveToDocxService } from "src/app/services/save-to-docx.service";
import { BibliographyService } from "src/app/services/bibliography.service";

import {
  TSelectParams,
  TDropdownOptions,
  TSelectedKeys,
  TCreatedTableItem,
  TSelectedLanguageKeys,
  TSelectSignsParams,
  TAuthorsModel,
} from "../../models/Models";
import {
  DROPDOWN_AUTHORS_OPTIONS,
  DROPDOWN_BOOKS_OPTIONS,
  DROPDOWN_LANGUAGES_OPTIONS,
  DROPDOWN_PAPERS_OPTIONS,
  DROPDOWN_ELECTRONIS_RESOURCE_OPTIONS,
  DROPDOWN_RULES_OPTIONS,
  DROPDOWN_CARDS_OPTIONS,
} from "./constnats/dropdownOptions";
import {
  SELECTED_BOOKS_KEYS,
  SELECTED_LANGUAGES_KEYS,
  SELECTED_PAPER_KEYS,
  SELECTED_ELECTRONIC_KEYS,
  SELECTED_RULES_AND_REGULATIONS_ITEM_KEYS,
  SELECTED_CARDS_KEYS,
} from "./constnats/selectedKeys";

@Component({
  selector: "app-bibliography",
  templateUrl: "./bibliography.component.html",
  styleUrls: ["./bibliography.component.scss"],
})
export class BibliographyComponent implements OnInit {
  public SELECTED_PAPER: string = PAPER_ITEM;
  public SELECTED_ELECTRONIC: string = ELECTRONIC_ITEM;
  public SELECTED_RULES_AND_REGULATIONS: string = RULES_AND_REGULATIONS_ITEM;
  public SELECTED_CARTOGRAPHIC_EDITIONS: string = CARTOGRAPHIC_EDITIONS_ITEM;

  private selectedSignsKeys: TSelectedLanguageKeys;
  private selectedValueKeys: TSelectedKeys;
  private selectedPapersKeys: TSelectedKeys;
  private selectedElectronicKeys: TSelectedKeys;
  private selectedRulesKeys: TSelectedKeys;
  private selectedCartographicKeys: TSelectedKeys;

  private tableItems: Array<TCreatedTableItem>;
  private selectedSigns: TSelectSignsParams;
  private authorsCount: number;

  public viewerForm: FormGroup;
  public authorsArray: FormArray;
  public selectedModel: Array<TSelectParams>;
  public authorsModel: Array<TAuthorsModel>;

  public displayBooksContent: boolean;
  public isSelectedAuthor: boolean;
  public disabledAuthorsDropdown: boolean;

  public dropdownBooksOptions: Array<TDropdownOptions>;
  public dropdownAuthorsOptions: Array<TDropdownOptions>;
  public dropdownLanguagesOptions: Array<TDropdownOptions>;
  public dropdownPapersOptions: Array<TDropdownOptions>;
  public dropdownElectronicResourceOptions: Array<TDropdownOptions>;
  public dropdownRulesResourceOptions: Array<TDropdownOptions>;
  public dropdownCartographicResourceOptions: Array<TDropdownOptions>;

  public selectedBook: FormControl;
  public selectedPaper: FormControl;
  public selectedElectronic: FormControl;
  public selectedRules: FormControl;
  public selectedCartographic: FormControl;
  public selectedLanguage: FormControl;
  public selectedAuthors: FormControl;

  public defaultLanguage: string;
  public defaultAuthor: string;

  public displayedColumns: string[] = [
    "reference",
    "transliteration",
    "button",
  ];
  public dataSource: MatTableDataSource<TCreatedTableItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("table") table: MatTable<TCreatedTableItem>;

  public get isEmptyDataSource(): boolean {
    return this.dataSource.data.length === 0;
  }

  public get isMoreThanFourAuthors(): boolean {
    return this.selectedAuthors.value === MORE_AUTHORS;
  }

  public get selectedLanguageTitle(): string {
    return this.dropdownLanguagesOptions.find(
      ({ value }) => value === this.selectedLanguage.value
    ).title;
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private localStorageService: LocalStorageService,
    private bibliographyService: BibliographyService,
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private saveToDocxService: SaveToDocxService
  ) {
    this.matIconRegistry.addSvgIcon(
      "fileCopy",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/img/fileCopy.svg"
      )
    );
    this.viewerForm = new FormGroup({});
    this.authorsArray = new FormArray([]);
    this.selectedBook = new FormControl();
    this.selectedPaper = new FormControl();
    this.selectedElectronic = new FormControl();
    this.selectedAuthors = new FormControl();
    this.selectedLanguage = new FormControl();
    this.selectedCartographic = new FormControl();
    this.selectedRules = new FormControl();
    this.authorsModel = AUTHORS_MODEL;
    this.selectedSignsKeys = SELECTED_LANGUAGES_KEYS;
    this.selectedPapersKeys = SELECTED_PAPER_KEYS;
    this.selectedElectronicKeys = SELECTED_ELECTRONIC_KEYS;
    this.selectedRulesKeys = SELECTED_RULES_AND_REGULATIONS_ITEM_KEYS;
    this.selectedCartographicKeys = SELECTED_CARDS_KEYS;
    this.dropdownBooksOptions = DROPDOWN_BOOKS_OPTIONS;
    this.dropdownAuthorsOptions = DROPDOWN_AUTHORS_OPTIONS;
    this.dropdownLanguagesOptions = DROPDOWN_LANGUAGES_OPTIONS.filter(
      ({ value }) => value !== LANGUAGE_EN
    );
    this.dropdownPapersOptions = DROPDOWN_PAPERS_OPTIONS;
    this.dropdownElectronicResourceOptions = DROPDOWN_ELECTRONIS_RESOURCE_OPTIONS;
    this.dropdownRulesResourceOptions = DROPDOWN_RULES_OPTIONS;
    this.dropdownCartographicResourceOptions = DROPDOWN_CARDS_OPTIONS;
    this.selectedValueKeys = SELECTED_BOOKS_KEYS;
    this.defaultLanguage = this.dropdownLanguagesOptions[0].value;
    this.defaultAuthor = this.dropdownAuthorsOptions[0].value;
    this.selectedSigns = this.selectedSignsKeys[this.defaultLanguage];
    this.tableItems =
      this.localStorageService.getBibliographyValuesFromLocalStorage() || [];
    this.selectedModel = null;
    this.displayBooksContent = false;
    this.isSelectedAuthor = false;
    this.disabledAuthorsDropdown = false;
    this.authorsCount = 0;
  }

  public copyContent(item: TCreatedTableItem): string {
    return `Створене посилання: ${item.reference} Транслітерація: ${item.transliteration}`;
  }

  public drop(event: CdkDragDrop<TCreatedTableItem[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    this.dataSource.data = event.container.data;
    this.table.renderRows();
  }

  public toFormGroup(items: Array<TSelectParams | TAuthorsModel>): FormGroup {
    let group: any = {};

    for (let i = 0, li = items.length; i < li; i++) {
      group[items[i].key] = items[i].validators
        ? new FormControl("", items[i].validators)
        : new FormControl("");
    }

    return this.formBuilder.group(group);
  }

  public onChangeBooksOption(): void {
    this.setFormValues(this.selectedValueKeys, this.selectedBook.value);
    this.onChangeView();
  }

  public onChangePapersOption(): void {
    this.setFormValues(this.selectedPapersKeys, this.selectedPaper.value);
  }

  public onChangeElectronicOption(): void {
    this.setFormValues(
      this.selectedElectronicKeys,
      this.selectedElectronic.value
    );
    this.onChangeElectronisView();
  }

  public onChangeRulesOption(): void {
    this.setFormValues(this.selectedRulesKeys, this.selectedRules.value);
    this.disabledAuthorsDropdown = true;
    this.hideAuthorsValues();
  }

  public onChangeCardsOption(): void {
    this.setFormValues(
      this.selectedCartographicKeys,
      this.selectedCartographic.value
    );
    this.disabledAuthorsDropdown = true;
    this.hideAuthorsValues();
  }

  public setFormValues(selectedKeys: TSelectedKeys, value: string): void {
    this.selectedModel = selectedKeys[value] || [];
    this.viewerForm = this.toFormGroup(this.selectedModel);
    if (this.authorsCount !== 0) {
      this.setAuthorsCount(this.authorsCount);
    }
    this.displayBooksContent = true;
  }

  public onChangeView(): void {
    switch (this.selectedBook.value) {
      case PAPER_ITEM:
      case ELECTRONIC_ITEM:
        this.displayBooksContent = false;
        this.hideAuthorsValues();
        break;
      case STANDART_DESCRIPTION_ITEM:
      case LEGIS_DOCUMENT_ITEM:
      case THESIS_ITEM:
      case ABSTRACT_THESIS_ITEM:
      case TYPICAL_PROJECT_ITEM:
      case PRICE_LIST_ITEM:
      case YEARBOOKS_ITEM:
      case POSTCARD_ITEM:
      case INTERVIEW_ITEM:
      case CATALOGS_ITEM:
        this.disabledAuthorsDropdown = true;
        this.hideAuthorsValues();
        break;
      default:
        this.disabledAuthorsDropdown = false;
    }
  }

  public onChangeElectronisView(): void {
    switch (this.selectedElectronic.value) {
      case WEBSITE_ITEM:
      case PAGE_FROM_WEBSITE_ITEM:
      case INTERNET_PORTAL_ITEM:
        this.disabledAuthorsDropdown = true;
        this.hideAuthorsValues();
        break;
      default:
        this.disabledAuthorsDropdown = false;
    }
  }

  public hideAuthorsValues(): void {
    this.isSelectedAuthor = false;
    this.authorsCount = 0;
    this.selectedAuthors.setValue(this.dropdownAuthorsOptions[0].value);
    if (this.viewerForm.get("authors")) {
      this.viewerForm.removeControl("authors");
    }
  }

  public onChangeAuthorsOption(): void {
    this.isSelectedAuthor = true;
    switch (this.selectedAuthors.value) {
      case NONE_AUTHORS:
        this.isSelectedAuthor = false;
        this.authorsCount = 0;
        this.setAuthorsCount(this.authorsCount);
        break;
      case SINGLE_AUTHOR:
      case MORE_AUTHORS:
        this.authorsCount = 1;
        this.setAuthorsCount(this.authorsCount);
        break;
      case TWO_AUTHORS:
        this.authorsCount = 2;
        this.setAuthorsCount(this.authorsCount);
        break;
      case THREE_AUTHORS:
        this.authorsCount = 3;
        this.setAuthorsCount(this.authorsCount);
        break;
    }
  }

  public setAuthorsCount(count: number) {
    let authorsGroup: FormGroup;
    if (this.viewerForm.get("authors")) {
      this.viewerForm.removeControl("authors");
    }
    for (let i = 0; i < count; i++) {
      authorsGroup = this.toFormGroup(this.authorsModel);
      if (this.viewerForm.get("authors")) {
        (this.viewerForm.get("authors") as FormArray).push(authorsGroup);
      } else {
        this.viewerForm.addControl("authors", new FormArray([authorsGroup]));
      }
    }
  }

  public onChangeLanguageOption(): void {
    this.selectedSigns = this.selectedSignsKeys[this.selectedLanguage.value];
  }

  public initDateTebleValues(): void {
    this.localStorageService.storeBibliographyOnLocalStorage(this.tableItems);
    this.dataSource = new MatTableDataSource(this.tableItems);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public deleteListItems(): void {
    this.tableItems = [];
    this.initDateTebleValues();
  }

  public deleteListItem(item: TCreatedTableItem): void {
    this.tableItems.splice(this.tableItems.indexOf(item), 1);
    this.initDateTebleValues();
  }

  public createList() {
    const tableItem = this.bibliographyService.createBibliographyItem(
      this.selectedBook.value,
      this.selectedPaper.value,
      this.selectedElectronic.value,
      this.selectedCartographic.value,
      this.selectedRules.value,
      this.viewerForm.value,
      this.selectedSigns,
      this.isMoreThanFourAuthors
    );
    this.viewerForm.reset();
    this.tableItems = [tableItem, ...this.tableItems];
    this.initDateTebleValues();
  }

  public saveList(): void {
    this.saveToDocxService.saveListItems(this.tableItems);
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public isEmpty(obj: Object) {
    return Object.keys(obj).length === 0;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableItems);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 500);
  }
}
