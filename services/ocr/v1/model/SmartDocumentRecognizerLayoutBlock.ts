

export class SmartDocumentRecognizerLayoutBlock {
    public location?: Array<Array<number>>;
    public type?: string;
    public text?: string;
    private 'words_ids'?: Array<number>;
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
}