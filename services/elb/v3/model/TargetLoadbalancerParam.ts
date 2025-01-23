

export class TargetLoadbalancerParam {
    public name?: string;
    private 'availability_zone_list'?: Array<string>;
    private 'vip_subnet_cidr_id'?: string;
    private 'vip_address'?: string;
    private 'ipv6_vip_virsubnet_id'?: string;
    private 'ipv6_vip_address'?: string;
    private 'elb_virsubnet_ids'?: Array<string>;
    private 'l4_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'reuse_pool'?: boolean;
    public guaranteed?: boolean;
    public constructor() { 
    }
    public withName(name: string): TargetLoadbalancerParam {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): TargetLoadbalancerParam {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): TargetLoadbalancerParam {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string  | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId(): string | undefined {
        return this['vip_subnet_cidr_id'];
    }
    public withVipAddress(vipAddress: string): TargetLoadbalancerParam {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): TargetLoadbalancerParam {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): string | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): TargetLoadbalancerParam {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): TargetLoadbalancerParam {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string>  | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds(): Array<string> | undefined {
        return this['elb_virsubnet_ids'];
    }
    public withL4FlavorId(l4FlavorId: string): TargetLoadbalancerParam {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): TargetLoadbalancerParam {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TargetLoadbalancerParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReusePool(reusePool: boolean): TargetLoadbalancerParam {
        this['reuse_pool'] = reusePool;
        return this;
    }
    public set reusePool(reusePool: boolean  | undefined) {
        this['reuse_pool'] = reusePool;
    }
    public get reusePool(): boolean | undefined {
        return this['reuse_pool'];
    }
    public withGuaranteed(guaranteed: boolean): TargetLoadbalancerParam {
        this['guaranteed'] = guaranteed;
        return this;
    }
}