

export class AllowIpRangesOption {
    public description?: string;
    private 'ip_range'?: string;
    public constructor(ipRange?: string) { 
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
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
}