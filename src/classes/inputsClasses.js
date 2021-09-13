import { RepetitionData } from "./repetitionData";
export class InputWord {
    constructor(userId, isWithRepetition) {
        this.sourceWord = new SourceWord(userId);
        this.translateWord = new TranslateWord();
        this.repetitionData = isWithRepetition ? new RepetitionData() : null;
    }
}
export class SourceWord {
    //isMemberInGroup?: boolean;
    constructor(userId) {
        this.userId = userId;
        this.sourceWord = "";
        this.sourceLang = 0;
        //this.isMemberInGroup = null;
    }
}
export class TranslateWord {
    constructor() {
        this.translateWord = "";
        this.translateLang = 0;
        this.creationDate = null;
        this.partOfSpeech = null;
    }
    getCreationDate() {
        return this.creationDate;
    }
    setCreationDate(date) {
        this.creationDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}
