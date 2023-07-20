

export class GlobalEipInfo {
    private 'global_eip_id'?: string;
    private 'global_eip_address'?: string;
    private 'ip_version'?: number;
    public constructor() { 
    }
    public withGlobalEipId(globalEipId: string): GlobalEipInfo {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withGlobalEipAddress(globalEipAddress: string): GlobalEipInfo {
        this['global_eip_address'] = globalEipAddress;
        return this;
    }
    public set globalEipAddress(globalEipAddress: string  | undefined) {
        this['global_eip_address'] = globalEipAddress;
    }
    public get globalEipAddress(): string | undefined {
        return this['global_eip_address'];
    }
    public withIpVersion(ipVersion: number): GlobalEipInfo {
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