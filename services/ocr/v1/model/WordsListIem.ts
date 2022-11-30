

export class WordsListIem {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    public constructor() { 
    }
    public withWords(words: string): WordsListIem {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): WordsListIem {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): WordsListIem {
        this['location'] = location;
        return this;
    }
}