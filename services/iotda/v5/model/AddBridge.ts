

export class AddBridge {
    private 'bridge_name'?: string;
    private 'bridge_id'?: string;
    public constructor(bridgeName?: string) { 
        this['bridge_name'] = bridgeName;
    }
    public withBridgeName(bridgeName: string): AddBridge {
        this['bridge_name'] = bridgeName;
        return this;
    }
    public set bridgeName(bridgeName: string  | undefined) {
        this['bridge_name'] = bridgeName;
    }
    public get bridgeName(): string | undefined {
        return this['bridge_name'];
    }
    public withBridgeId(bridgeId: string): AddBridge {
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