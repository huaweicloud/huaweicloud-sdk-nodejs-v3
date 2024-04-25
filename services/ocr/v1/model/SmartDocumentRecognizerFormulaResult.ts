import { SmartDocumentRecognizerFormulaBlock } from './SmartDocumentRecognizerFormulaBlock';


export class SmartDocumentRecognizerFormulaResult {
    private 'formula_count'?: number;
    private 'formula_list'?: Array<SmartDocumentRecognizerFormulaBlock>;
    public constructor() { 
    }
    public withFormulaCount(formulaCount: number): SmartDocumentRecognizerFormulaResult {
        this['formula_count'] = formulaCount;
        return this;
    }
    public set formulaCount(formulaCount: number  | undefined) {
        this['formula_count'] = formulaCount;
    }
    public get formulaCount(): number | undefined {
        return this['formula_count'];
    }
    public withFormulaList(formulaList: Array<SmartDocumentRecognizerFormulaBlock>): SmartDocumentRecognizerFormulaResult {
        this['formula_list'] = formulaList;
        return this;
    }
    public set formulaList(formulaList: Array<SmartDocumentRecognizerFormulaBlock>  | undefined) {
        this['formula_list'] = formulaList;
    }
    public get formulaList(): Array<SmartDocumentRecognizerFormulaBlock> | undefined {
        return this['formula_list'];
    }
}