

export class PcrTestRecordWordsBlockList {
    public words?: string;
    public location?: Array<Array<number>>;
    public confidence?: number;
    public constructor() { 
    }
    public withWords(words: string): PcrTestRecordWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): PcrTestRecordWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): PcrTestRecordWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
}