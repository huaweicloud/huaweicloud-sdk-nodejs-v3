

export class RuleSelector {
    public kind?: string;
    public decoration?: string;
    public pattern?: string;
    public extras?: string;
    public constructor(kind?: string, decoration?: string, pattern?: string) { 
        this['kind'] = kind;
        this['decoration'] = decoration;
        this['pattern'] = pattern;
    }
    public withKind(kind: string): RuleSelector {
        this['kind'] = kind;
        return this;
    }
    public withDecoration(decoration: string): RuleSelector {
        this['decoration'] = decoration;
        return this;
    }
    public withPattern(pattern: string): RuleSelector {
        this['pattern'] = pattern;
        return this;
    }
    public withExtras(extras: string): RuleSelector {
        this['extras'] = extras;
        return this;
    }
}