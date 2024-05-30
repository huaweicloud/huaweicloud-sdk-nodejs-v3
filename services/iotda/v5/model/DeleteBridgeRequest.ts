

export class DeleteBridgeRequest {
    private 'Instance-Id'?: string;
    private 'bridge_id'?: string;
    public constructor(bridgeId?: string) { 
        this['bridge_id'] = bridgeId;
    }
    public withInstanceId(instanceId: string): DeleteBridgeRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBridgeId(bridgeId: string): DeleteBridgeRequest {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
}