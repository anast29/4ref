import { TSelectSignsParams } from "../models/Models";

export const SIGNS_FOR_UA: TSelectSignsParams = {
  authors: " та ін. ",
  pages: " с",
  thesis: " : автореф. дис. на здобуття наук. ступеня ",
  thesisByDegree: " : дис. на здобуття наук. ступеня ",
  mentor: " / наук. кер. ",
  safeValue: " : захист ",
  editor: "/ за заг. ред. ",
  scaleOfPages: " С. ",
  series: ", вип. ",
  bookEditor: " / за ред. ",
  resource: " [Електронний ресурс]: ",
  date: "дата звернення: ",
  web: ": [Веб-сайт]",
  webBibl: "[Веб-сайт]",
  portal: ": [Інтернет-портал]",
  volume: " T. ",
  volumeNum: "№",
  topic: " Тема ",
  month: {
    0: "cічн.",
    1: "лют.",
    2: "берез.",
    3: "квіт.",
    4: "трав.",
    5: "черв.",
    6: "лип.",
    7: "серпн.",
    8: "верес.",
    9: "жовт.",
    10: "листоп.",
    11: "груд.",
  },
  biblAuthor: ' [та ін.]',
  biblSafe: ' : захищена ',
  acceptInfo: ' : затв. ',
  accept: ' : Затв. ',
  editors: ' / уклад.: ',
  upperSeries: 'Вип. ',
  biblBookEditor: '; за ред. ', 
  edit_im: ' ; відп. за вип. ',
  biblResource: ' [Електронний ресурс] ',
  biblDate: ' (дата звернення: ',
  biblTopic: ' Розд. ',
  actual: 'Чинний від ',
  workFrom: ': введ. в дію ',
  map: ' [Карти] ',
  music: ' [Ноти] ',
  thesisNotates: ' : іл. – ',
  counts: ' пр.',
  number: '№ ',
  prices: 'Прейскурант № '
};

export const SIGNS_FOR_RU: TSelectSignsParams  = {
  authors: " и др. ",
  pages: " с",
  thesis: " : автореф. дис. на получение науч. степени ",
  thesisByDegree: " : дис. на получение науч. степени ",
  mentor: " / науч. рук. ",
  safeValue: " : защита ",
  editor: "/ под общ. ред. ",
  scaleOfPages: " С. ",
  series: ", вып. ",
  bookEditor: " / за ред. ",
  resource: " [Электроный ресурс]: ",
  date: "дата обращения: ",
  web: ": [Веб-сайт]",
  webBibl: "[Веб-сайт]",
  portal: ": [Интернет-портал]",
  volume: " T. ",
  volumeNum: "№",
  topic: " Тема ",
  month: {
    0: "янв.",
    1: "февр.",
    2: "март.",
    3: "апрл.",
    4: "май.",
    5: "июн.",
    6: "июл.",
    7: "авг.",
    8: "сент.",
    9: "октяб.",
    10: "нояб.",
    11: "декаб.",
  },
  biblAuthor: ' [и др.]',
  biblSafe: ' : защищена ',
  acceptInfo: ' : утв. ',
  accept: ' : Утв. ',
  editors: ' / сост.: ',
  upperSeries: 'Вып. ',
  biblBookEditor: '; под ред. ', 
  edit_im: ' ; отв. за вып. ',
  biblResource: ' [Электроный ресурс] ',
  biblDate: ' (дата обращения: ',
  biblTopic: ' Разд. ',
  actual: 'Действующий от ',
  workFrom: ' : введ. в действие ',
  map: ' [Карты] ',
  music: ' [Ноты] ',
  thesisNotates: ' : ил. – ',
  counts: ' пр.',
  number: '№ ',
  prices: 'Прейскурант № '
};

export const SIGNS_FOR_EN: TSelectSignsParams = {
  authors: " et al. ",
  pages: " p",
  thesis: " : dissert. thesis for a scient. degree ",
  thesisByDegree: " : thesis for a scient. degree ",
  mentor: " / scien. adv. ",
  safeValue: " : graduation ",
  editor: "/ editor. by ",
  scaleOfPages: " P. ",
  series: ", No. ",
  bookEditor: " / editor. by ",
  resource: " [Electronic resource]: ",
  date: "viewed on: ",
  web: ": [Website]",
  portal: " : [Internet portal]",
  volume: " Vol. ",
  volumeNum: "#",
  topic: " Topic ",
  month: {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "Август",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  },
  number: '№ ',
};
