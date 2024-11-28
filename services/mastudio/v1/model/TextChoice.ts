

export class TextChoice {
    public index?: number;
    public text?: string;
    public constructor(index?: number, text?: string) { 
        this['index'] = index;
        this['text'] = text;
    }
    public withIndex(index: number): TextChoice {
        this['index'] = index;
        return this;
    }
    public withText(text: string): TextChoice {
        this['text'] = text;
        return this;
    }
}