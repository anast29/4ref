import { Injectable } from "@angular/core";
import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { saveAs } from 'file-saver';
import { TCreatedTableItem } from '../models/Models';

@Injectable({
  providedIn: "root",
})
export class SaveToDocxService {
  constructor() {}

  public saveListItems(values: TCreatedTableItem[], isPaper?: boolean) {
    const doc = new Document();
    const docxName = isPaper ? 'References.docx' : 'List.docx';
    doc.addSection({
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: 'Список використаних джерел',
              bold: true,
            }),
          ],
          alignment: AlignmentType.CENTER
        }),
        ...values.map(({reference}, i) => this.generateList(reference, i, isPaper)),
        new Paragraph({
          children: [
            new TextRun({
              text: 'References',
              bold: true,
            })
          ],
          alignment: AlignmentType.CENTER
        }),
        ...values.map(({transliteration}, i) => this.generateList(transliteration, i, isPaper)),
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, docxName);
    });
  }

  private generateList(value: string, index: number, isPaper: boolean): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: `${this.getNumOfRef(index, isPaper)} ${value}`
        }),
      ],
    });
  }

  private getNumOfRef(index: number, isPaper: boolean): string{
    return isPaper ? `[${index + 1}]` : `${index + 1}.`;
  }

}
