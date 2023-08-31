

export class SmartDocumentRecognizerTableWordsBlock {
    public words?: string;
    public rows?: Array<number>;
    public columns?: Array<number>;
    public constructor() { 
    }
    public withWords(words: string): SmartDocumentRecognizerTableWordsBlock {
        this['words'] = words;
        return this;
    }
    public withRows(rows: Array<number>): SmartDocumentRecognizerTableWordsBlock {
        this['rows'] = rows;
        return this;
    }
    public withColumns(columns: Array<number>): SmartDocumentRecognizerTableWordsBlock {
        this['columns'] = columns;
        return this;
    }
}