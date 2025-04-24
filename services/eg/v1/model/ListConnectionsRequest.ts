

export class ListConnectionsRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListConnectionsRequest {
        this['sort'] = sort;
        return this;
    }
    public withName(name: string): ListConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListConnectionsRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withInstanceId(instanceId: string): ListConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}