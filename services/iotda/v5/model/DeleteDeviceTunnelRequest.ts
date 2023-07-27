

export class DeleteDeviceTunnelRequest {
    private 'Instance-Id'?: string;
    private 'tunnel_id'?: string;
    public constructor(tunnelId?: string) { 
        this['tunnel_id'] = tunnelId;
    }
    public withInstanceId(instanceId: string): DeleteDeviceTunnelRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withTunnelId(tunnelId: string): DeleteDeviceTunnelRequest {
        this['tunnel_id'] = tunnelId;
        return this;
    }
    public set tunnelId(tunnelId: string  | undefined) {
        this['tunnel_id'] = tunnelId;
    }
    public get tunnelId(): string | undefined {
        return this['tunnel_id'];
    }
}