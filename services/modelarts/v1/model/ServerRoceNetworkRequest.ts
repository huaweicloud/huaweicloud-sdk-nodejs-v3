

export class ServerRoceNetworkRequest {
    private 'network_type'?: string;
    private 'physical_network'?: string;
    public constructor() { 
    }
    public withNetworkType(networkType: string): ServerRoceNetworkRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withPhysicalNetwork(physicalNetwork: string): ServerRoceNetworkRequest {
        this['physical_network'] = physicalNetwork;
        return this;
    }
    public set physicalNetwork(physicalNetwork: string  | undefined) {
        this['physical_network'] = physicalNetwork;
    }
    public get physicalNetwork(): string | undefined {
        return this['physical_network'];
    }
}