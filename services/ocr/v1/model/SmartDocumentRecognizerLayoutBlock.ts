

export class SmartDocumentRecognizerLayoutBlock {
    public location?: Array<Array<number>>;
    public type?: string;
    public text?: string;
    private 'words_ids'?: Array<number>;
    private 'table_id'?: number;
    private 'form_id'?: number;
    public constructor() { 
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerLayoutBlock {
        this['location'] = location;
        return this;
    }
    public withType(type: string): SmartDocumentRecognizerLayoutBlock {
        this['type'] = type;
        return this;
    }
    public withText(text: string): SmartDocumentRecognizerLayoutBlock {
        this['text'] = text;
        return this;
    }
    public withWordsIds(wordsIds: Array<number>): SmartDocumentRecognizerLayoutBlock {
        this['words_ids'] = wordsIds;
        return this;
    }
    public set wordsIds(wordsIds: Array<number>  | undefined) {
        this['words_ids'] = wordsIds;
    }
    public get wordsIds(): Array<number> | undefined {
        return this['words_ids'];
    }
    public withTableId(tableId: number): SmartDocumentRecognizerLayoutBlock {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
        return this['table_id'];
    }
    public withFormId(formId: number): SmartDocumentRecognizerLayoutBlock {
        this['form_id'] = formId;
        return this;
    }
    public set formId(formId: number  | undefined) {
        this['form_id'] = formId;
    }
    public get formId(): number | undefined {
        return this['form_id'];
    }
}