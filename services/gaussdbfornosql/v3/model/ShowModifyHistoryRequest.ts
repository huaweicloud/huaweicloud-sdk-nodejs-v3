

export class ShowModifyHistoryRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowModifyHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowModifyHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowModifyHistoryRequest {
        this['limit'] = limit;
        return this;
    }
}