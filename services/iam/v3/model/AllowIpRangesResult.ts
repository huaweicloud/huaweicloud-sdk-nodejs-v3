

export class AllowIpRangesResult {
    public description?: string;
    private 'ip_range'?: string;
    public constructor(description?: string, ipRange?: string) { 
        this['description'] = description;
        this['ip_range'] = ipRange;
    }
    public withDescription(description: string): AllowIpRangesResult {
        this['description'] = description;
        return this;
    }
    public withIpRange(ipRange: string): AllowIpRangesResult {
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