

export class AllowIpRangesOption {
    public description?: string;
    private 'ip_range': string | undefined;
    public constructor(ipRange?: any) { 
        this['ip_range'] = ipRange;
    }
    public withDescription(description: string): AllowIpRangesOption {
        this['description'] = description;
        return this;
    }
    public withIpRange(ipRange: string): AllowIpRangesOption {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange() {
        return this['ip_range'];
    }
}