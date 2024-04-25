

export class SmartDocumentRecognizerFormulaBlock {
    public formula?: string;
    public location?: Array<Array<number>>;
    public constructor() { 
    }
    public withFormula(formula: string): SmartDocumentRecognizerFormulaBlock {
        this['formula'] = formula;
        return this;
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerFormulaBlock {
        this['location'] = location;
        return this;
    }
}