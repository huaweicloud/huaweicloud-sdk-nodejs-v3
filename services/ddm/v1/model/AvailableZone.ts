

export class AvailableZone {
    public code?: string;
    public description?: string;
    public status?: string;
    private 'support_ipv6'?: boolean;
    public constructor(code?: string, description?: string, status?: string, supportIpv6?: boolean) { 
        this['code'] = code;
        this['description'] = description;
        this['status'] = status;
        this['support_ipv6'] = supportIpv6;
    }
    public withCode(code: string): AvailableZone {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): AvailableZone {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): AvailableZone {
        this['status'] = status;
        return this;
    }
    public withSupportIpv6(supportIpv6: boolean): AvailableZone {
        this['support_ipv6'] = supportIpv6;
        return this;
    }
    public set supportIpv6(supportIpv6: boolean  | undefined) {
        this['support_ipv6'] = supportIpv6;
    }
    public get supportIpv6(): boolean | undefined {
        return this['support_ipv6'];
    }
}