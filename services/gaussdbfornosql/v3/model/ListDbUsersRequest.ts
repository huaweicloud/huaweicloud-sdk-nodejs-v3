

export class ListDbUsersRequest {
    private 'instance_id'?: string;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDbUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ListDbUsersRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListDbUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbUsersRequest {
        this['limit'] = limit;
        return this;
    }
}