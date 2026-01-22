

export class PrivateNetworkSegmentVO {
    private 'conf_id'?: string;
    private 'protect_network'?: string;
    private 'az_info'?: string;
    private 'subnet_name'?: string;
    public constructor(protectNetwork?: string) { 
        this['protect_network'] = protectNetwork;
    }
    public withConfId(confId: string): PrivateNetworkSegmentVO {
        this['conf_id'] = confId;
        return this;
    }
    public set confId(confId: string  | undefined) {
        this['conf_id'] = confId;
    }
    public get confId(): string | undefined {
        return this['conf_id'];
    }
    public withProtectNetwork(protectNetwork: string): PrivateNetworkSegmentVO {
        this['protect_network'] = protectNetwork;
        return this;
    }
    public set protectNetwork(protectNetwork: string  | undefined) {
        this['protect_network'] = protectNetwork;
    }
    public get protectNetwork(): string | undefined {
        return this['protect_network'];
    }
    public withAzInfo(azInfo: string): PrivateNetworkSegmentVO {
        this['az_info'] = azInfo;
        return this;
    }
    public set azInfo(azInfo: string  | undefined) {
        this['az_info'] = azInfo;
    }
    public get azInfo(): string | undefined {
        return this['az_info'];
    }
    public withSubnetName(subnetName: string): PrivateNetworkSegmentVO {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
}