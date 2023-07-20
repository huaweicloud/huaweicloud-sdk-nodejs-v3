

export class SqlFilterRulePattern {
    public pattern?: string;
    private 'max_concurrency'?: number;
    public constructor(pattern?: string, maxConcurrency?: number) { 
        this['pattern'] = pattern;
        this['max_concurrency'] = maxConcurrency;
    }
    public withPattern(pattern: string): SqlFilterRulePattern {
        this['pattern'] = pattern;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): SqlFilterRulePattern {
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