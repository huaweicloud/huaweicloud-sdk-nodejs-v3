

export class BrowserCacheRulesCondition {
    private 'match_type'?: string;
    private 'match_value'?: string;
    public priority?: number;
    public constructor(matchType?: string, priority?: number) { 
        this['match_type'] = matchType;
        this['priority'] = priority;
    }
    public withMatchType(matchType: string): BrowserCacheRulesCondition {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withMatchValue(matchValue: string): BrowserCacheRulesCondition {
        this['match_value'] = matchValue;
        return this;
    }
    public set matchValue(matchValue: string  | undefined) {
        this['match_value'] = matchValue;
    }
    public get matchValue(): string | undefined {
        return this['match_value'];
    }
    public withPriority(priority: number): BrowserCacheRulesCondition {
        this['priority'] = priority;
        return this;
    }
}