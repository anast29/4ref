import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "angular-webstorage-service";
import { TCreatedTableItem } from "../models/Models";

const STORAGE_REFERENCE_KEY = 'referncesItems';
const STORAGE_BIBLIOGRAPHY_KEY = 'bibliographyItems';

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public storeReferncesOnLocalStorage(referncesItems: Array<TCreatedTableItem>): void {
    this.storage.set(STORAGE_REFERENCE_KEY, referncesItems);
  }

  public getReferncesValuesFromLocalStorage(): Array<TCreatedTableItem> {
    return this.storage.get(STORAGE_REFERENCE_KEY);
  }
  
  public storeBibliographyOnLocalStorage(bibliographyItems: Array<TCreatedTableItem>): void {
    this.storage.set(STORAGE_BIBLIOGRAPHY_KEY, bibliographyItems);
  }

  public getBibliographyValuesFromLocalStorage(): Array<TCreatedTableItem> {
    return this.storage.get(STORAGE_BIBLIOGRAPHY_KEY);
  }
}
