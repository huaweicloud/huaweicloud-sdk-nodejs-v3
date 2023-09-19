

export class TextConfig {
    public text?: string;
    public constructor(text?: string) { 
        this['text'] = text;
    }
    public withText(text: string): TextConfig {
        this['text'] = text;
        return this;
    }
}