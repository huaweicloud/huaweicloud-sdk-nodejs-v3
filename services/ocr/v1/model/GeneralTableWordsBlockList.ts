import { WordsListIem } from './WordsListIem';


export class GeneralTableWordsBlockList {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'words_list'?: Array<WordsListIem>;
    public rows?: Array<number>;
    public columns?: Array<number>;
    private 'cell_location'?: Array<Array<number>>;
    public constructor() { 
    }
    public withWords(words: string): GeneralTableWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): GeneralTableWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): GeneralTableWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withWordsList(wordsList: Array<WordsListIem>): GeneralTableWordsBlockList {
        this['words_list'] = wordsList;
        return this;
    }
    public set wordsList(wordsList: Array<WordsListIem>  | undefined) {
        this['words_list'] = wordsList;
    }
    public get wordsList(): Array<WordsListIem> | undefined {
        return this['words_list'];
    }
    public withRows(rows: Array<number>): GeneralTableWordsBlockList {
        this['rows'] = rows;
        return this;
    }
    public withColumns(columns: Array<number>): GeneralTableWordsBlockList {
        this['columns'] = columns;
        return this;
    }
    public withCellLocation(cellLocation: Array<Array<number>>): GeneralTableWordsBlockList {
        this['cell_location'] = cellLocation;
        return this;
    }
    public set cellLocation(cellLocation: Array<Array<number>>  | undefined) {
        this['cell_location'] = cellLocation;
    }
    public get cellLocation(): Array<Array<number>> | undefined {
        return this['cell_location'];
    }
}