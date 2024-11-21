

export class UpdatePacifyWordsReq {
    private 'pacify_words'?: string;
    public constructor(pacifyWords?: string) { 
        this['pacify_words'] = pacifyWords;
    }
    public withPacifyWords(pacifyWords: string): UpdatePacifyWordsReq {
        this['pacify_words'] = pacifyWords;
        return this;
    }
    public set pacifyWords(pacifyWords: string  | undefined) {
        this['pacify_words'] = pacifyWords;
    }
    public get pacifyWords(): string | undefined {
        return this['pacify_words'];
    }
}