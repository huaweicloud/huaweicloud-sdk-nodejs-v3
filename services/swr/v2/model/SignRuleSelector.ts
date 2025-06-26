

export class SignRuleSelector {
    public kind?: string;
    public decoration?: string;
    public pattern?: string;
    public extras?: string;
    public constructor(kind?: string, decoration?: string, pattern?: string) { 
        this['kind'] = kind;
        this['decoration'] = decoration;
        this['pattern'] = pattern;
    }
    public withKind(kind: string): SignRuleSelector {
        this['kind'] = kind;
        return this;
    }
    public withDecoration(decoration: string): SignRuleSelector {
        this['decoration'] = decoration;
        return this;
    }
    public withPattern(pattern: string): SignRuleSelector {
        this['pattern'] = pattern;
        return this;
    }
    public withExtras(extras: string): SignRuleSelector {
        this['extras'] = extras;
        return this;
    }
}