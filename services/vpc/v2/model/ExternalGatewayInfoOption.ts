

export class ExternalGatewayInfoOption {
    private 'network_id'?: string;
    public constructor() { 
    }
    public withNetworkId(networkId: string): ExternalGatewayInfoOption {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
}