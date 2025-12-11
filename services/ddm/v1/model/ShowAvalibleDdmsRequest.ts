

export class ShowAvalibleDdmsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowAvalibleDdmsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowAvalibleDdmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAvalibleDdmsRequest {
        this['limit'] = limit;
        return this;
    }
}