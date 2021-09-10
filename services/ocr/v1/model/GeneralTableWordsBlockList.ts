

export class GeneralTableWordsBlockList {
    public words: string;
    private 'words_list'?: Array<object> | undefined;
    public rows: Array<number>;
    public columns: Array<number>;
    public location?: Array<Array<number>>;
    private 'cell_location'?: Array<Array<number>> | undefined;
    public confidence?: number;
    public excel?: string;
    public constructor(words?: any, rows?: any, columns?: any) { 
        this['words'] = words;
        this['rows'] = rows;
        this['columns'] = columns;
    }
    public withWords(words: string): GeneralTableWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withWordsList(wordsList: Array<object>): GeneralTableWordsBlockList {
        this['words_list'] = wordsList;
        return this;
    }
    public set wordsList(wordsList: Array<object> | undefined) {
        this['words_list'] = wordsList;
    }
    public get wordsList() {
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
    public withLocation(location: Array<Array<number>>): GeneralTableWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withCellLocation(cellLocation: Array<Array<number>>): GeneralTableWordsBlockList {
        this['cell_location'] = cellLocation;
        return this;
    }
    public set cellLocation(cellLocation: Array<Array<number>> | undefined) {
        this['cell_location'] = cellLocation;
    }
    public get cellLocation() {
        return this['cell_location'];
    }
    public withConfidence(confidence: number): GeneralTableWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withExcel(excel: string): GeneralTableWordsBlockList {
        this['excel'] = excel;
        return this;
    }
}