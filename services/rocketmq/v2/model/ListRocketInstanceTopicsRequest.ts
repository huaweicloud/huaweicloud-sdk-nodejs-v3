

export class ListRocketInstanceTopicsRequest {
    private 'instance_id': string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRocketInstanceTopicsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListRocketInstanceTopicsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRocketInstanceTopicsRequest {
        this['offset'] = offset;
        return this;
    }
}