

export class PublicIpInfo {
    private 'publicip_id'?: string;
    private 'publicip_address'?: string;
    private 'ip_version'?: number;
    public constructor(publicipId?: string, publicipAddress?: string, ipVersion?: number) { 
        this['publicip_id'] = publicipId;
        this['publicip_address'] = publicipAddress;
        this['ip_version'] = ipVersion;
    }
    public withPublicipId(publicipId: string): PublicIpInfo {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withPublicipAddress(publicipAddress: string): PublicIpInfo {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string  | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress(): string | undefined {
        return this['publicip_address'];
    }
    public withIpVersion(ipVersion: number): PublicIpInfo {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
}