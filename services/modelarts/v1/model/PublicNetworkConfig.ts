

export class PublicNetworkConfig {
    private 'public_network_type'?: string;
    public constructor() { 
    }
    public withPublicNetworkType(publicNetworkType: string): PublicNetworkConfig {
        this['public_network_type'] = publicNetworkType;
        return this;
    }
    public set publicNetworkType(publicNetworkType: string  | undefined) {
        this['public_network_type'] = publicNetworkType;
    }
    public get publicNetworkType(): string | undefined {
        return this['public_network_type'];
    }
}