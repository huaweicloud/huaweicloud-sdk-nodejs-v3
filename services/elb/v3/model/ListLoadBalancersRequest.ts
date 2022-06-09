

export class ListLoadBalancersRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'admin_state_up'?: boolean | undefined;
    private 'provisioning_status'?: Array<string> | undefined;
    private 'operating_status'?: Array<string> | undefined;
    public guaranteed?: boolean;
    private 'vpc_id'?: Array<string> | undefined;
    private 'vip_port_id'?: Array<string> | undefined;
    private 'vip_address'?: Array<string> | undefined;
    private 'vip_subnet_cidr_id'?: Array<string> | undefined;
    private 'ipv6_vip_port_id'?: Array<string> | undefined;
    private 'ipv6_vip_address'?: Array<string> | undefined;
    private 'ipv6_vip_virsubnet_id'?: Array<string> | undefined;
    public eips?: Array<string>;
    public publicips?: Array<string>;
    private 'availability_zone_list'?: Array<string> | undefined;
    private 'l4_flavor_id'?: Array<string> | undefined;
    private 'l4_scale_flavor_id'?: Array<string> | undefined;
    private 'l7_flavor_id'?: Array<string> | undefined;
    private 'l7_scale_flavor_id'?: Array<string> | undefined;
    private 'billing_info'?: Array<string> | undefined;
    private 'member_device_id'?: Array<string> | undefined;
    private 'member_address'?: Array<string> | undefined;
    private 'enterprise_project_id'?: Array<string> | undefined;
    private 'ip_version'?: Array<number> | undefined;
    private 'deletion_protection_enable'?: boolean | undefined;
    private 'elb_virsubnet_type'?: Array<string> | undefined;
    public autoscaling?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListLoadBalancersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListLoadBalancersRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListLoadBalancersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListLoadBalancersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListLoadBalancersRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListLoadBalancersRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListLoadBalancersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withProvisioningStatus(provisioningStatus: Array<string>): ListLoadBalancersRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: Array<string> | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withOperatingStatus(operatingStatus: Array<string>): ListLoadBalancersRequest {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: Array<string> | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withGuaranteed(guaranteed: boolean): ListLoadBalancersRequest {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ListLoadBalancersRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string> | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withVipPortId(vipPortId: Array<string>): ListLoadBalancersRequest {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: Array<string> | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId() {
        return this['vip_port_id'];
    }
    public withVipAddress(vipAddress: Array<string>): ListLoadBalancersRequest {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: Array<string> | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: Array<string>): ListLoadBalancersRequest {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: Array<string> | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId() {
        return this['vip_subnet_cidr_id'];
    }
    public withIpv6VipPortId(ipv6VipPortId: Array<string>): ListLoadBalancersRequest {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
        return this;
    }
    public set ipv6VipPortId(ipv6VipPortId: Array<string> | undefined) {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
    }
    public get ipv6VipPortId() {
        return this['ipv6_vip_port_id'];
    }
    public withIpv6VipAddress(ipv6VipAddress: Array<string>): ListLoadBalancersRequest {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: Array<string> | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress() {
        return this['ipv6_vip_address'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: Array<string>): ListLoadBalancersRequest {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: Array<string> | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId() {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withEips(eips: Array<string>): ListLoadBalancersRequest {
        this['eips'] = eips;
        return this;
    }
    public withPublicips(publicips: Array<string>): ListLoadBalancersRequest {
        this['publicips'] = publicips;
        return this;
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): ListLoadBalancersRequest {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string> | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList() {
        return this['availability_zone_list'];
    }
    public withL4FlavorId(l4FlavorId: Array<string>): ListLoadBalancersRequest {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: Array<string> | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId() {
        return this['l4_flavor_id'];
    }
    public withL4ScaleFlavorId(l4ScaleFlavorId: Array<string>): ListLoadBalancersRequest {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
        return this;
    }
    public set l4ScaleFlavorId(l4ScaleFlavorId: Array<string> | undefined) {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
    }
    public get l4ScaleFlavorId() {
        return this['l4_scale_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: Array<string>): ListLoadBalancersRequest {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: Array<string> | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId() {
        return this['l7_flavor_id'];
    }
    public withL7ScaleFlavorId(l7ScaleFlavorId: Array<string>): ListLoadBalancersRequest {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
        return this;
    }
    public set l7ScaleFlavorId(l7ScaleFlavorId: Array<string> | undefined) {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
    }
    public get l7ScaleFlavorId() {
        return this['l7_scale_flavor_id'];
    }
    public withBillingInfo(billingInfo: Array<string>): ListLoadBalancersRequest {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: Array<string> | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withMemberDeviceId(memberDeviceId: Array<string>): ListLoadBalancersRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: Array<string> | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId() {
        return this['member_device_id'];
    }
    public withMemberAddress(memberAddress: Array<string>): ListLoadBalancersRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: Array<string> | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress() {
        return this['member_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListLoadBalancersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<number>): ListLoadBalancersRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<number> | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): ListLoadBalancersRequest {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable() {
        return this['deletion_protection_enable'];
    }
    public withElbVirsubnetType(elbVirsubnetType: Array<string>): ListLoadBalancersRequest {
        this['elb_virsubnet_type'] = elbVirsubnetType;
        return this;
    }
    public set elbVirsubnetType(elbVirsubnetType: Array<string> | undefined) {
        this['elb_virsubnet_type'] = elbVirsubnetType;
    }
    public get elbVirsubnetType() {
        return this['elb_virsubnet_type'];
    }
    public withAutoscaling(autoscaling: Array<string>): ListLoadBalancersRequest {
        this['autoscaling'] = autoscaling;
        return this;
    }
}