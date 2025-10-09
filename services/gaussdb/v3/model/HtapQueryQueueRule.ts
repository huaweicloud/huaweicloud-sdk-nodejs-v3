

export class HtapQueryQueueRule {
    private 'query_queue_max_queued_queries'?: number;
    private 'query_queue_pending_timeout_second'?: number;
    private 'query_queue_concurrency_limit'?: number;
    private 'query_queue_mem_used_pct_limit'?: number;
    private 'query_queue_cpu_used_pct_limit'?: number;
    private 'enable_query_queue_select'?: string;
    public constructor(queryQueueMaxQueuedQueries?: number, queryQueuePendingTimeoutSecond?: number, queryQueueConcurrencyLimit?: number, queryQueueMemUsedPctLimit?: number, queryQueueCpuUsedPctLimit?: number) { 
        this['query_queue_max_queued_queries'] = queryQueueMaxQueuedQueries;
        this['query_queue_pending_timeout_second'] = queryQueuePendingTimeoutSecond;
        this['query_queue_concurrency_limit'] = queryQueueConcurrencyLimit;
        this['query_queue_mem_used_pct_limit'] = queryQueueMemUsedPctLimit;
        this['query_queue_cpu_used_pct_limit'] = queryQueueCpuUsedPctLimit;
    }
    public withQueryQueueMaxQueuedQueries(queryQueueMaxQueuedQueries: number): HtapQueryQueueRule {
        this['query_queue_max_queued_queries'] = queryQueueMaxQueuedQueries;
        return this;
    }
    public set queryQueueMaxQueuedQueries(queryQueueMaxQueuedQueries: number  | undefined) {
        this['query_queue_max_queued_queries'] = queryQueueMaxQueuedQueries;
    }
    public get queryQueueMaxQueuedQueries(): number | undefined {
        return this['query_queue_max_queued_queries'];
    }
    public withQueryQueuePendingTimeoutSecond(queryQueuePendingTimeoutSecond: number): HtapQueryQueueRule {
        this['query_queue_pending_timeout_second'] = queryQueuePendingTimeoutSecond;
        return this;
    }
    public set queryQueuePendingTimeoutSecond(queryQueuePendingTimeoutSecond: number  | undefined) {
        this['query_queue_pending_timeout_second'] = queryQueuePendingTimeoutSecond;
    }
    public get queryQueuePendingTimeoutSecond(): number | undefined {
        return this['query_queue_pending_timeout_second'];
    }
    public withQueryQueueConcurrencyLimit(queryQueueConcurrencyLimit: number): HtapQueryQueueRule {
        this['query_queue_concurrency_limit'] = queryQueueConcurrencyLimit;
        return this;
    }
    public set queryQueueConcurrencyLimit(queryQueueConcurrencyLimit: number  | undefined) {
        this['query_queue_concurrency_limit'] = queryQueueConcurrencyLimit;
    }
    public get queryQueueConcurrencyLimit(): number | undefined {
        return this['query_queue_concurrency_limit'];
    }
    public withQueryQueueMemUsedPctLimit(queryQueueMemUsedPctLimit: number): HtapQueryQueueRule {
        this['query_queue_mem_used_pct_limit'] = queryQueueMemUsedPctLimit;
        return this;
    }
    public set queryQueueMemUsedPctLimit(queryQueueMemUsedPctLimit: number  | undefined) {
        this['query_queue_mem_used_pct_limit'] = queryQueueMemUsedPctLimit;
    }
    public get queryQueueMemUsedPctLimit(): number | undefined {
        return this['query_queue_mem_used_pct_limit'];
    }
    public withQueryQueueCpuUsedPctLimit(queryQueueCpuUsedPctLimit: number): HtapQueryQueueRule {
        this['query_queue_cpu_used_pct_limit'] = queryQueueCpuUsedPctLimit;
        return this;
    }
    public set queryQueueCpuUsedPctLimit(queryQueueCpuUsedPctLimit: number  | undefined) {
        this['query_queue_cpu_used_pct_limit'] = queryQueueCpuUsedPctLimit;
    }
    public get queryQueueCpuUsedPctLimit(): number | undefined {
        return this['query_queue_cpu_used_pct_limit'];
    }
    public withEnableQueryQueueSelect(enableQueryQueueSelect: string): HtapQueryQueueRule {
        this['enable_query_queue_select'] = enableQueryQueueSelect;
        return this;
    }
    public set enableQueryQueueSelect(enableQueryQueueSelect: string  | undefined) {
        this['enable_query_queue_select'] = enableQueryQueueSelect;
    }
    public get enableQueryQueueSelect(): string | undefined {
        return this['enable_query_queue_select'];
    }
}