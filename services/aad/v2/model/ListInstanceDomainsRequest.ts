

export class ListInstanceDomainsRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceDomainsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListInstanceDomainsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceDomainsRequest {
        this['offset'] = offset;
        return this;
    }
}