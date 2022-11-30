

export class HandwritingWordsBlockList {
    public words?: string;
    public type?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    public constructor() { 
    }
    public withWords(words: string): HandwritingWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withType(type: string): HandwritingWordsBlockList {
        this['type'] = type;
        return this;
    }
    public withConfidence(confidence: number): HandwritingWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): HandwritingWordsBlockList {
        this['location'] = location;
        return this;
    }
}