

export class ListEnvironmentsV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListEnvironmentsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListEnvironmentsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnvironmentsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListEnvironmentsV2Request {
        this['name'] = name;
        return this;
    }
}