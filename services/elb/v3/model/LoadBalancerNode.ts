

export class LoadBalancerNode {
    public id?: string;
    public name?: string;
    public guaranteed?: boolean;
    private 'l4_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    private 'vip_address'?: string;
    private 'ipv6_vip_address'?: string;
    private 'availability_zone_list'?: Array<string>;
    public constructor(id?: string, name?: string, guaranteed?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['guaranteed'] = guaranteed;
    }
    public withId(id: string): LoadBalancerNode {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LoadBalancerNode {
        this['name'] = name;
        return this;
    }
    public withGuaranteed(guaranteed: boolean): LoadBalancerNode {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withL4FlavorId(l4FlavorId: string): LoadBalancerNode {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): LoadBalancerNode {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withVipAddress(vipAddress: string): LoadBalancerNode {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): LoadBalancerNode {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): LoadBalancerNode {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
}