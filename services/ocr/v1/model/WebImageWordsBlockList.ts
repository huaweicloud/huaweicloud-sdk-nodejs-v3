

export class WebImageWordsBlockList {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'font_list'?: Array<string> | undefined;
    private 'font_scores'?: Array<number> | undefined;
    public constructor() { 
    }
    public withWords(words: string): WebImageWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): WebImageWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): WebImageWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withFontList(fontList: Array<string>): WebImageWordsBlockList {
        this['font_list'] = fontList;
        return this;
    }
    public set fontList(fontList: Array<string> | undefined) {
        this['font_list'] = fontList;
    }
    public get fontList() {
        return this['font_list'];
    }
    public withFontScores(fontScores: Array<number>): WebImageWordsBlockList {
        this['font_scores'] = fontScores;
        return this;
    }
    public set fontScores(fontScores: Array<number> | undefined) {
        this['font_scores'] = fontScores;
    }
    public get fontScores() {
        return this['font_scores'];
    }
}