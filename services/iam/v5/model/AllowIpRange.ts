

export class AllowIpRange {
    private 'ip_range'?: string;
    public description?: string;
    public constructor(ipRange?: string) { 
        this['ip_range'] = ipRange;
    }
    public withIpRange(ipRange: string): AllowIpRange {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withDescription(description: string): AllowIpRange {
        this['description'] = description;
        return this;
    }
}