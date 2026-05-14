

export class WorkloadResourceQueue {
    private 'short_query_optimize'?: string;
    private 'short_query_concurrency_num'?: string;
    public constructor() { 
    }
    public withShortQueryOptimize(shortQueryOptimize: string): WorkloadResourceQueue {
        this['short_query_optimize'] = shortQueryOptimize;
        return this;
    }
    public set shortQueryOptimize(shortQueryOptimize: string  | undefined) {
        this['short_query_optimize'] = shortQueryOptimize;
    }
    public get shortQueryOptimize(): string | undefined {
        return this['short_query_optimize'];
    }
    public withShortQueryConcurrencyNum(shortQueryConcurrencyNum: string): WorkloadResourceQueue {
        this['short_query_concurrency_num'] = shortQueryConcurrencyNum;
        return this;
    }
    public set shortQueryConcurrencyNum(shortQueryConcurrencyNum: string  | undefined) {
        this['short_query_concurrency_num'] = shortQueryConcurrencyNum;
    }
    public get shortQueryConcurrencyNum(): string | undefined {
        return this['short_query_concurrency_num'];
    }
}