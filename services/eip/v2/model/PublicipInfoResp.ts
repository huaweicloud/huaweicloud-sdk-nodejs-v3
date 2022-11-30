

export class PublicipInfoResp {
    private 'publicip_address'?: string | undefined;
    private 'publicip_id'?: string | undefined;
    private 'publicip_type'?: string | undefined;
    private 'publicipv6_address'?: string | undefined;
    private 'ip_version'?: PublicipInfoRespIpVersionEnum | undefined;
    public constructor() { 
    }
    public withPublicipAddress(publicipAddress: string): PublicipInfoResp {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress() {
        return this['publicip_address'];
    }
    public withPublicipId(publicipId: string): PublicipInfoResp {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withPublicipType(publicipType: string): PublicipInfoResp {
        this['publicip_type'] = publicipType;
        return this;
    }
    public set publicipType(publicipType: string | undefined) {
        this['publicip_type'] = publicipType;
    }
    public get publicipType() {
        return this['publicip_type'];
    }
    public withPublicipv6Address(publicipv6Address: string): PublicipInfoResp {
        this['publicipv6_address'] = publicipv6Address;
        return this;
    }
    public set publicipv6Address(publicipv6Address: string | undefined) {
        this['publicipv6_address'] = publicipv6Address;
    }
    public get publicipv6Address() {
        return this['publicipv6_address'];
    }
    public withIpVersion(ipVersion: PublicipInfoRespIpVersionEnum): PublicipInfoResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipInfoRespIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipInfoRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
