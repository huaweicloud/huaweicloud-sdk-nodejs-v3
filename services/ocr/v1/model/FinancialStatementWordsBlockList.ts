

export class FinancialStatementWordsBlockList {
    public words?: string;
    public location?: Array<Array<number>>;
    public confidence?: number;
    public rows?: Array<number>;
    public columns?: Array<number>;
    private 'cell_location'?: Array<Array<number>>;
    public constructor() { 
    }
    public withWords(words: string): FinancialStatementWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): FinancialStatementWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): FinancialStatementWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withRows(rows: Array<number>): FinancialStatementWordsBlockList {
        this['rows'] = rows;
        return this;
    }
    public withColumns(columns: Array<number>): FinancialStatementWordsBlockList {
        this['columns'] = columns;
        return this;
    }
    public withCellLocation(cellLocation: Array<Array<number>>): FinancialStatementWordsBlockList {
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