

export class RetentionSelector {
    public kind?: string;
    public decoration?: string;
    public pattern?: string;
    public extras?: string;
    public constructor(kind?: string, decoration?: string, pattern?: string) { 
        this['kind'] = kind;
        this['decoration'] = decoration;
        this['pattern'] = pattern;
    }
    public withKind(kind: string): RetentionSelector {
        this['kind'] = kind;
        return this;
    }
    public withDecoration(decoration: string): RetentionSelector {
        this['decoration'] = decoration;
        return this;
    }
    public withPattern(pattern: string): RetentionSelector {
        this['pattern'] = pattern;
        return this;
    }
    public withExtras(extras: string): RetentionSelector {
        this['extras'] = extras;
        return this;
    }
}