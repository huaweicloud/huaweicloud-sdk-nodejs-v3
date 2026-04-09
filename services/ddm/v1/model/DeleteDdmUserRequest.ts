

export class DeleteDdmUserRequest {
    private 'instance_id'?: string;
    public username?: string;
    public constructor(instanceId?: string, username?: string) { 
        this['instance_id'] = instanceId;
        this['username'] = username;
    }
    public withInstanceId(instanceId: string): DeleteDdmUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUsername(username: string): DeleteDdmUserRequest {
        this['username'] = username;
        return this;
    }
}