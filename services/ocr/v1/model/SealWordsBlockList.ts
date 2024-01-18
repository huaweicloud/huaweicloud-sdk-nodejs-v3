

export class SealWordsBlockList {
    public words?: string;
    private 'words_confidence'?: number;
    public constructor() { 
    }
    public withWords(words: string): SealWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withWordsConfidence(wordsConfidence: number): SealWordsBlockList {
        this['words_confidence'] = wordsConfidence;
        return this;
    }
    public set wordsConfidence(wordsConfidence: number  | undefined) {
        this['words_confidence'] = wordsConfidence;
    }
    public get wordsConfidence(): number | undefined {
        return this['words_confidence'];
    }
}