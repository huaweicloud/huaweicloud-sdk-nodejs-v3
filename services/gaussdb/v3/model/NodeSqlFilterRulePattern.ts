

export class NodeSqlFilterRulePattern {
    public pattern?: string;
    private 'max_concurrency'?: number;
    public constructor(pattern?: string, maxConcurrency?: number) { 
        this['pattern'] = pattern;
        this['max_concurrency'] = maxConcurrency;
    }
    public withPattern(pattern: string): NodeSqlFilterRulePattern {
        this['pattern'] = pattern;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): NodeSqlFilterRulePattern {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
}