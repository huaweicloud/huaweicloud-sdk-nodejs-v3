

export class RegexTestRequest {
    public pattern?: string;
    public text?: string;
    public constructor(pattern?: string) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: string): RegexTestRequest {
        this['pattern'] = pattern;
        return this;
    }
    public withText(text: string): RegexTestRequest {
        this['text'] = text;
        return this;
    }
}