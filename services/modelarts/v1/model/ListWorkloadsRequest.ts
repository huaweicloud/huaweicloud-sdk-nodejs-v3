

export class ListWorkloadsRequest {
    private 'pool_name'?: string;
    public hostip?: Array<string>;
    public type?: string;
    public status?: string;
    public sort?: string;
    public ascend?: boolean;
    public offset?: string;
    public limit?: number;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): ListWorkloadsRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withHostip(hostip: Array<string>): ListWorkloadsRequest {
        this['hostip'] = hostip;
        return this;
    }
    public withType(type: string): ListWorkloadsRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListWorkloadsRequest {
        this['status'] = status;
        return this;
    }
    public withSort(sort: string): ListWorkloadsRequest {
        this['sort'] = sort;
        return this;
    }
    public withAscend(ascend: boolean): ListWorkloadsRequest {
        this['ascend'] = ascend;
        return this;
    }
    public withOffset(offset: string): ListWorkloadsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkloadsRequest {
        this['limit'] = limit;
        return this;
    }
}