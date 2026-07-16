

export class ShowNetworkAvailableIpRequest {
    private 'network_name'?: string;
    private 'network_id'?: string;
    public constructor(networkName?: string, networkId?: string) { 
        this['network_name'] = networkName;
        this['network_id'] = networkId;
    }
    public withNetworkName(networkName: string): ShowNetworkAvailableIpRequest {
        this['network_name'] = networkName;
        return this;
    }
    public set networkName(networkName: string  | undefined) {
        this['network_name'] = networkName;
    }
    public get networkName(): string | undefined {
        return this['network_name'];
    }
    public withNetworkId(networkId: string): ShowNetworkAvailableIpRequest {
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