

export class ExternalGatewayInfo {
    private 'enable_snat'?: boolean | undefined;
    private 'network_id'?: string | undefined;
    public constructor() { 
    }
    public withEnableSnat(enableSnat: boolean): ExternalGatewayInfo {
        this['enable_snat'] = enableSnat;
        return this;
    }
    public set enableSnat(enableSnat: boolean | undefined) {
        this['enable_snat'] = enableSnat;
    }
    public get enableSnat() {
        return this['enable_snat'];
    }
    public withNetworkId(networkId: string): ExternalGatewayInfo {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
}