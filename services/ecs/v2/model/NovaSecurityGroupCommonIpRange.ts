

export class NovaSecurityGroupCommonIpRange {
    public cidr?: string;
    public constructor() { 
    }
    public withCidr(cidr: string): NovaSecurityGroupCommonIpRange {
        this['cidr'] = cidr;
        return this;
    }
}