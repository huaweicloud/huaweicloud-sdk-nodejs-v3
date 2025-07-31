

export class AccessTopStatisticsVO {
    private 'agg_time'?: number;
    private 'deny_access_top_counts'?: number;
    private 'permit_access_top_counts'?: number;
    private 'total_access_top_counts'?: number;
    public constructor() { 
    }
    public withAggTime(aggTime: number): AccessTopStatisticsVO {
        this['agg_time'] = aggTime;
        return this;
    }
    public set aggTime(aggTime: number  | undefined) {
        this['agg_time'] = aggTime;
    }
    public get aggTime(): number | undefined {
        return this['agg_time'];
    }
    public withDenyAccessTopCounts(denyAccessTopCounts: number): AccessTopStatisticsVO {
        this['deny_access_top_counts'] = denyAccessTopCounts;
        return this;
    }
    public set denyAccessTopCounts(denyAccessTopCounts: number  | undefined) {
        this['deny_access_top_counts'] = denyAccessTopCounts;
    }
    public get denyAccessTopCounts(): number | undefined {
        return this['deny_access_top_counts'];
    }
    public withPermitAccessTopCounts(permitAccessTopCounts: number): AccessTopStatisticsVO {
        this['permit_access_top_counts'] = permitAccessTopCounts;
        return this;
    }
    public set permitAccessTopCounts(permitAccessTopCounts: number  | undefined) {
        this['permit_access_top_counts'] = permitAccessTopCounts;
    }
    public get permitAccessTopCounts(): number | undefined {
        return this['permit_access_top_counts'];
    }
    public withTotalAccessTopCounts(totalAccessTopCounts: number): AccessTopStatisticsVO {
        this['total_access_top_counts'] = totalAccessTopCounts;
        return this;
    }
    public set totalAccessTopCounts(totalAccessTopCounts: number  | undefined) {
        this['total_access_top_counts'] = totalAccessTopCounts;
    }
    public get totalAccessTopCounts(): number | undefined {
        return this['total_access_top_counts'];
    }
}