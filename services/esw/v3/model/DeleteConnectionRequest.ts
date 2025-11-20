

export class DeleteConnectionRequest {
    private 'connection_id'?: string;
    private 'instance_id'?: string;
    public constructor(connectionId?: string, instanceId?: string) { 
        this['connection_id'] = connectionId;
        this['instance_id'] = instanceId;
    }
    public withConnectionId(connectionId: string): DeleteConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withInstanceId(instanceId: string): DeleteConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}