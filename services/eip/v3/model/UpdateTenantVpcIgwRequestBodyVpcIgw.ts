

export class UpdateTenantVpcIgwRequestBodyVpcIgw {
    public name?: string;
    private 'enable_ipv6'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateTenantVpcIgwRequestBodyVpcIgw {
        this['name'] = name;
        return this;
    }
    public withEnableIpv6(enableIpv6: boolean): UpdateTenantVpcIgwRequestBodyVpcIgw {
        this['enable_ipv6'] = enableIpv6;
        return this;
    }
    public set enableIpv6(enableIpv6: boolean  | undefined) {
        this['enable_ipv6'] = enableIpv6;
    }
    public get enableIpv6(): boolean | undefined {
        return this['enable_ipv6'];
    }
}