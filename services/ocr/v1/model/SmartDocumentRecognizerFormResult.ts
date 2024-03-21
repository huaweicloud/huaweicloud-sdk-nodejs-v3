import { SmartDocumentRecognizerTableBlock } from './SmartDocumentRecognizerTableBlock';


export class SmartDocumentRecognizerFormResult {
    private 'form_count'?: number;
    private 'form_list'?: Array<SmartDocumentRecognizerTableBlock>;
    public constructor() { 
    }
    public withFormCount(formCount: number): SmartDocumentRecognizerFormResult {
        this['form_count'] = formCount;
        return this;
    }
    public set formCount(formCount: number  | undefined) {
        this['form_count'] = formCount;
    }
    public get formCount(): number | undefined {
        return this['form_count'];
    }
    public withFormList(formList: Array<SmartDocumentRecognizerTableBlock>): SmartDocumentRecognizerFormResult {
        this['form_list'] = formList;
        return this;
    }
    public set formList(formList: Array<SmartDocumentRecognizerTableBlock>  | undefined) {
        this['form_list'] = formList;
    }
    public get formList(): Array<SmartDocumentRecognizerTableBlock> | undefined {
        return this['form_list'];
    }
}