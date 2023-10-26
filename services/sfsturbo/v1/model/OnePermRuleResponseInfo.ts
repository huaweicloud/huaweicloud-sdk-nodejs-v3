

export class OnePermRuleResponseInfo {
    public id?: string;
    private 'ip_cidr'?: string;
    private 'rw_type'?: string;
    private 'user_type'?: string;
    public constructor(id?: string, ipCidr?: string, rwType?: string, userType?: string) { 
        this['id'] = id;
        this['ip_cidr'] = ipCidr;
        this['rw_type'] = rwType;
        this['user_type'] = userType;
    }
    public withId(id: string): OnePermRuleResponseInfo {
        this['id'] = id;
        return this;
    }
    public withIpCidr(ipCidr: string): OnePermRuleResponseInfo {
        this['ip_cidr'] = ipCidr;
        return this;
    }
    public set ipCidr(ipCidr: string  | undefined) {
        this['ip_cidr'] = ipCidr;
    }
    public get ipCidr(): string | undefined {
        return this['ip_cidr'];
    }
    public withRwType(rwType: string): OnePermRuleResponseInfo {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: string  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): string | undefined {
        return this['rw_type'];
    }
    public withUserType(userType: string): OnePermRuleResponseInfo {
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