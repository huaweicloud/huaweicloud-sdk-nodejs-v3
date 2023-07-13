

export class ListUserRequest {
    private 'instance_id': string | undefined;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withOffset(offset: string): ListUserRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListUserRequest {
        this['limit'] = limit;
        return this;
    }
}