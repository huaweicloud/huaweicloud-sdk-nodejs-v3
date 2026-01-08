

export class BatchDeletePoolsRequestBody {
    public pools?: Array<string>;
    public constructor(pools?: Array<string>) { 
        this['pools'] = pools;
    }
    public withPools(pools: Array<string>): BatchDeletePoolsRequestBody {
        this['pools'] = pools;
        return this;
    }
}