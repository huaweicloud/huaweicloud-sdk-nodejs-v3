

export class ShowRocketMqConfigsRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowRocketMqConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ShowRocketMqConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowRocketMqConfigsRequest {
        this['offset'] = offset;
        return this;
    }
}