

export class HealthCodeWordsBlockList {
    public words?: string;
    public location?: Array<number>;
    public confidence?: number;
    public constructor() { 
    }
    public withWords(words: string): HealthCodeWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<number>): HealthCodeWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): HealthCodeWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
}