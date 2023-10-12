

export class EsPublicipsResource {
    private 'publicip_id'?: string;
    private 'publicip_address'?: string;
    private 'ip_version'?: string;
    public constructor() { 
    }
    public withPublicipId(publicipId: string): EsPublicipsResource {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withPublicipAddress(publicipAddress: string): EsPublicipsResource {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string  | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress(): string | undefined {
        return this['publicip_address'];
    }
    public withIpVersion(ipVersion: string): EsPublicipsResource {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
}