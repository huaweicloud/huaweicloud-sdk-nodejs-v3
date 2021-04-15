

export class NovaSecurityGroupCommonIpRange {
    public cidr: string;
    public constructor(cidr?: any) { 
        this['cidr'] = cidr;
    }
    public withCidr(cidr: string): NovaSecurityGroupCommonIpRange {
        this['cidr'] = cidr;
        return this;
    }
}