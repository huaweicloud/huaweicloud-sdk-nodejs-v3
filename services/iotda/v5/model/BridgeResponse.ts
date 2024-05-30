

export class BridgeResponse {
    private 'bridge_id'?: string;
    private 'bridge_name'?: string;
    public status?: string;
    public constructor() { 
    }
    public withBridgeId(bridgeId: string): BridgeResponse {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
    public withBridgeName(bridgeName: string): BridgeResponse {
        this['bridge_name'] = bridgeName;
        return this;
    }
    public set bridgeName(bridgeName: string  | undefined) {
        this['bridge_name'] = bridgeName;
    }
    public get bridgeName(): string | undefined {
        return this['bridge_name'];
    }
    public withStatus(status: string): BridgeResponse {
        this['status'] = status;
        return this;
    }
}