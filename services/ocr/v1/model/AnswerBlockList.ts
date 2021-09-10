

export class AnswerBlockList {
    public words: string;
    public confidence: number;
    public location: Array<number>;
    public constructor(words?: any, confidence?: any, location?: any) { 
        this['words'] = words;
        this['confidence'] = confidence;
        this['location'] = location;
    }
    public withWords(words: string): AnswerBlockList {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): AnswerBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<number>): AnswerBlockList {
        this['location'] = location;
        return this;
    }
}