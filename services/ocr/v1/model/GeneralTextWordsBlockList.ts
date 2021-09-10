

export class GeneralTextWordsBlockList {
    public words: string;
    public location: Array<Array<number>>;
    public constructor(words?: any, location?: any) { 
        this['words'] = words;
        this['location'] = location;
    }
    public withWords(words: string): GeneralTextWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): GeneralTextWordsBlockList {
        this['location'] = location;
        return this;
    }
}