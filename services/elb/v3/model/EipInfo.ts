

export class EipInfo {
    private 'eip_id'?: string | undefined;
    private 'eip_address'?: string | undefined;
    private 'ip_version'?: number | undefined;
    public constructor() { 
    }
    public withEipId(eipId: string): EipInfo {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId() {
        return this['eip_id'];
    }
    public withEipAddress(eipAddress: string): EipInfo {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress() {
        return this['eip_address'];
    }
    public withIpVersion(ipVersion: number): EipInfo {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
}