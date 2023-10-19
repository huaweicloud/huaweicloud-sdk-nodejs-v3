

export class ChangeInstanceOrderRequest {
    private 'server_id'?: string;
    private 'instance_key'?: string;
    public constructor(serverId?: string, instanceKey?: string) { 
        this['server_id'] = serverId;
        this['instance_key'] = instanceKey;
    }
    public withServerId(serverId: string): ChangeInstanceOrderRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withInstanceKey(instanceKey: string): ChangeInstanceOrderRequest {
        this['instance_key'] = instanceKey;
        return this;
    }
    public set instanceKey(instanceKey: string  | undefined) {
        this['instance_key'] = instanceKey;
    }
    public get instanceKey(): string | undefined {
        return this['instance_key'];
    }
}