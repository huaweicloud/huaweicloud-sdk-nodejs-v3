

export class ListWorkspacesForUserRequest {
    private 'instance_id'?: string;
    private 'user_id'?: string;
    public constructor(instanceId?: string, userId?: string) { 
        this['instance_id'] = instanceId;
        this['user_id'] = userId;
    }
    public withInstanceId(instanceId: string): ListWorkspacesForUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserId(userId: string): ListWorkspacesForUserRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}