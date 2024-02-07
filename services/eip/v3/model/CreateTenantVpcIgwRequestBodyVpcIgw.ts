

export class CreateTenantVpcIgwRequestBodyVpcIgw {
    private 'vpc_id'?: string;
    private 'network_id'?: string;
    private 'add_route'?: boolean;
    private 'enable_ipv6'?: boolean;
    public name?: string;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): CreateTenantVpcIgwRequestBodyVpcIgw {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withNetworkId(networkId: string): CreateTenantVpcIgwRequestBodyVpcIgw {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withAddRoute(addRoute: boolean): CreateTenantVpcIgwRequestBodyVpcIgw {
        this['add_route'] = addRoute;
        return this;
    }
    public set addRoute(addRoute: boolean  | undefined) {
        this['add_route'] = addRoute;
    }
    public get addRoute(): boolean | undefined {
        return this['add_route'];
    }
    public withEnableIpv6(enableIpv6: boolean): CreateTenantVpcIgwRequestBodyVpcIgw {
        this['enable_ipv6'] = enableIpv6;
        return this;
    }
    public set enableIpv6(enableIpv6: boolean  | undefined) {
        this['enable_ipv6'] = enableIpv6;
    }
    public get enableIpv6(): boolean | undefined {
        return this['enable_ipv6'];
    }
    public withName(name: string): CreateTenantVpcIgwRequestBodyVpcIgw {
        this['name'] = name;
        return this;
    }
}