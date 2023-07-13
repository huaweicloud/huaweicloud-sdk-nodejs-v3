

export class IgnoreAdvanced {
    public index?: string;
    public contents?: Array<string>;
    public constructor() { 
    }
    public withIndex(index: string): IgnoreAdvanced {
        this['index'] = index;
        return this;
    }
    public withContents(contents: Array<string>): IgnoreAdvanced {
        this['contents'] = contents;
        return this;
    }
}