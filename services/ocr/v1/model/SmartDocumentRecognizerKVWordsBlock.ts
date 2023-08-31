

export class SmartDocumentRecognizerKVWordsBlock {
    public words?: string;
    public location?: Array<Array<number>>;
    public type?: string;
    public constructor() { 
    }
    public withWords(words: string): SmartDocumentRecognizerKVWordsBlock {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerKVWordsBlock {
        this['location'] = location;
        return this;
    }
    public withType(type: string): SmartDocumentRecognizerKVWordsBlock {
        this['type'] = type;
        return this;
    }
}