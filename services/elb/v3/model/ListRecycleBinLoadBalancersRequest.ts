

export class ListRecycleBinLoadBalancersRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'admin_state_up'?: boolean;
    private 'operating_status'?: Array<string>;
    public guaranteed?: boolean;
    private 'vpc_id'?: Array<string>;
    private 'vip_port_id'?: Array<string>;
    private 'vip_address'?: Array<string>;
    private 'vip_subnet_cidr_id'?: Array<string>;
    private 'ipv6_vip_port_id'?: Array<string>;
    private 'ipv6_vip_address'?: Array<string>;
    private 'ipv6_vip_virsubnet_id'?: Array<string>;
    public eips?: Array<string>;
    public publicips?: Array<string>;
    private 'availability_zone_list'?: Array<string>;
    private 'l4_flavor_id'?: Array<string>;
    private 'l7_flavor_id'?: Array<string>;
    private 'billing_info'?: Array<string>;
    private 'member_device_id'?: Array<string>;
    private 'member_address'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'ip_version'?: Array<number>;
    private 'deletion_protection_enable'?: boolean;
    private 'elb_virsubnet_type'?: Array<string>;
    public autoscaling?: Array<string>;
    private 'protection_status'?: Array<string>;
    private 'global_eips'?: Array<string>;
    private 'log_topic_id'?: string;
    private 'log_group_id'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListRecycleBinLoadBalancersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListRecycleBinLoadBalancersRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListRecycleBinLoadBalancersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListRecycleBinLoadBalancersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withOperatingStatus(operatingStatus: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: Array<string>  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): Array<string> | undefined {
        return this['operating_status'];
    }
    public withGuaranteed(guaranteed: boolean): ListRecycleBinLoadBalancersRequest {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withVipPortId(vipPortId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: Array<string>  | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId(): Array<string> | undefined {
        return this['vip_port_id'];
    }
    public withVipAddress(vipAddress: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: Array<string>  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): Array<string> | undefined {
        return this['vip_address'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: Array<string>  | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId(): Array<string> | undefined {
        return this['vip_subnet_cidr_id'];
    }
    public withIpv6VipPortId(ipv6VipPortId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
        return this;
    }
    public set ipv6VipPortId(ipv6VipPortId: Array<string>  | undefined) {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
    }
    public get ipv6VipPortId(): Array<string> | undefined {
        return this['ipv6_vip_port_id'];
    }
    public withIpv6VipAddress(ipv6VipAddress: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: Array<string>  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): Array<string> | undefined {
        return this['ipv6_vip_address'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: Array<string>  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): Array<string> | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withEips(eips: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['eips'] = eips;
        return this;
    }
    public withPublicips(publicips: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['publicips'] = publicips;
        return this;
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
    public withL4FlavorId(l4FlavorId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: Array<string>  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): Array<string> | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: Array<string>  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): Array<string> | undefined {
        return this['l7_flavor_id'];
    }
    public withBillingInfo(billingInfo: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: Array<string>  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): Array<string> | undefined {
        return this['billing_info'];
    }
    public withMemberDeviceId(memberDeviceId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: Array<string>  | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId(): Array<string> | undefined {
        return this['member_device_id'];
    }
    public withMemberAddress(memberAddress: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: Array<string>  | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress(): Array<string> | undefined {
        return this['member_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<number>): ListRecycleBinLoadBalancersRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<number> | undefined {
        return this['ip_version'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): ListRecycleBinLoadBalancersRequest {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean  | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable(): boolean | undefined {
        return this['deletion_protection_enable'];
    }
    public withElbVirsubnetType(elbVirsubnetType: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['elb_virsubnet_type'] = elbVirsubnetType;
        return this;
    }
    public set elbVirsubnetType(elbVirsubnetType: Array<string>  | undefined) {
        this['elb_virsubnet_type'] = elbVirsubnetType;
    }
    public get elbVirsubnetType(): Array<string> | undefined {
        return this['elb_virsubnet_type'];
    }
    public withAutoscaling(autoscaling: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withProtectionStatus(protectionStatus: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: Array<string>  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): Array<string> | undefined {
        return this['protection_status'];
    }
    public withGlobalEips(globalEips: Array<string>): ListRecycleBinLoadBalancersRequest {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<string>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<string> | undefined {
        return this['global_eips'];
    }
    public withLogTopicId(logTopicId: string): ListRecycleBinLoadBalancersRequest {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
    public withLogGroupId(logGroupId: string): ListRecycleBinLoadBalancersRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
}