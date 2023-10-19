

export class ListAppQuotasRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAppQuotasRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAppQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAppQuotasRequest {
        this['name'] = name;
        return this;
    }
}