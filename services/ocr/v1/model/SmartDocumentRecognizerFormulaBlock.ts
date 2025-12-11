

export class SmartDocumentRecognizerFormulaBlock {
    public formula?: string;
    public location?: Array<Array<number>>;
    public type?: string;
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
    public withType(type: string): SmartDocumentRecognizerFormulaBlock {
        this['type'] = type;
        return this;
    }
}