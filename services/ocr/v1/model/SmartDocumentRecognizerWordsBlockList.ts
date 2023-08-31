

export class SmartDocumentRecognizerWordsBlockList {
    public words?: string;
    public location?: Array<Array<number>>;
    public confidence?: number;
    public constructor() { 
    }
    public withWords(words: string): SmartDocumentRecognizerWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): SmartDocumentRecognizerWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
}