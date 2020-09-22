export type TSelectParams = {
  title: string;
  key: string;
  placeholder?: string;
  className: string;
  required: boolean;
  validators?: any;
  maxLength?: number;
  inputType?: string;
};

export type TAuthorsModel = {
  title: string;
  key: string;
  placeholder: string;
  validators?: any;
};

export type TAuthorsModelSelected ={
  name: string;
  lastName: string;
  patronymic: string;
}

export type TSelectSignsParams = {
  [key: string]: any;
};

export type TDropdownOptions = {
  value: string;
  title: string;
};

export type TSelectedKeys = {
  [key: string]: Array<TSelectParams>;
};

export type TSelectedLanguageKeys = {
  [key: string]: TSelectSignsParams;
};

export type TValues = {
  [key: string]: any;
};

export type TCreatedTableItem = {
  reference: string;
  transliteration: string;
};

export type TSignValue = {
  firstSign?: string;
  lastSign?: string;
};
