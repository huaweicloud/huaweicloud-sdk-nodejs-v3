

export class TagSelector {
    public kind?: string;
    public pattern?: string;
    public constructor(kind?: string, pattern?: string) { 
        this['kind'] = kind;
        this['pattern'] = pattern;
    }
    public withKind(kind: string): TagSelector {
        this['kind'] = kind;
        return this;
    }
    public withPattern(pattern: string): TagSelector {
        this['pattern'] = pattern;
        return this;
    }
}