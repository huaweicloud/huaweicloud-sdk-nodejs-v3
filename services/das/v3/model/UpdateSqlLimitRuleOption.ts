

export class UpdateSqlLimitRuleOption {
    private 'max_concurrency'?: number;
    private 'max_waiting'?: number;
    public constructor(maxConcurrency?: number) { 
        this['max_concurrency'] = maxConcurrency;
    }
    public withMaxConcurrency(maxConcurrency: number): UpdateSqlLimitRuleOption {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withMaxWaiting(maxWaiting: number): UpdateSqlLimitRuleOption {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
}