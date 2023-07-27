

export class ListFeaturesV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListFeaturesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListFeaturesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFeaturesV2Request {
        this['limit'] = limit;
        return this;
    }
}