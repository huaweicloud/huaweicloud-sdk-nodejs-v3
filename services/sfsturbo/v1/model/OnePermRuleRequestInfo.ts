

export class OnePermRuleRequestInfo {
    private 'ip_cidr'?: string;
    private 'rw_type'?: string;
    private 'user_type'?: string;
    public constructor() { 
    }
    public withIpCidr(ipCidr: string): OnePermRuleRequestInfo {
        this['ip_cidr'] = ipCidr;
        return this;
    }
    public set ipCidr(ipCidr: string  | undefined) {
        this['ip_cidr'] = ipCidr;
    }
    public get ipCidr(): string | undefined {
        return this['ip_cidr'];
    }
    public withRwType(rwType: string): OnePermRuleRequestInfo {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: string  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): string | undefined {
        return this['rw_type'];
    }
    public withUserType(userType: string): OnePermRuleRequestInfo {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}