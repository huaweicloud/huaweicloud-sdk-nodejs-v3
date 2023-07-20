

export class PublicipInfoResponseBody {
    private 'publicip_address'?: string;
    private 'publicip_id'?: string;
    private 'publicip_type'?: string;
    private 'publicipv6_address'?: string;
    private 'ip_version'?: PublicipInfoResponseBodyIpVersionEnum | number;
    public constructor() { 
    }
    public withPublicipAddress(publicipAddress: string): PublicipInfoResponseBody {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string  | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress(): string | undefined {
        return this['publicip_address'];
    }
    public withPublicipId(publicipId: string): PublicipInfoResponseBody {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withPublicipType(publicipType: string): PublicipInfoResponseBody {
        this['publicip_type'] = publicipType;
        return this;
    }
    public set publicipType(publicipType: string  | undefined) {
        this['publicip_type'] = publicipType;
    }
    public get publicipType(): string | undefined {
        return this['publicip_type'];
    }
    public withPublicipv6Address(publicipv6Address: string): PublicipInfoResponseBody {
        this['publicipv6_address'] = publicipv6Address;
        return this;
    }
    public set publicipv6Address(publicipv6Address: string  | undefined) {
        this['publicipv6_address'] = publicipv6Address;
    }
    public get publicipv6Address(): string | undefined {
        return this['publicipv6_address'];
    }
    public withIpVersion(ipVersion: PublicipInfoResponseBodyIpVersionEnum | number): PublicipInfoResponseBody {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipInfoResponseBodyIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): PublicipInfoResponseBodyIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipInfoResponseBodyIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
