

export class ListLoadbalancersRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public description?: string;
    public name?: string;
    private 'operating_status'?: string;
    private 'provisioning_status'?: string;
    private 'vip_address'?: string;
    private 'vip_port_id'?: string;
    private 'vip_subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'admin_state_up'?: boolean;
    private 'member_address'?: string;
    private 'member_device_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListLoadbalancersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListLoadbalancersRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListLoadbalancersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListLoadbalancersRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ListLoadbalancersRequest {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ListLoadbalancersRequest {
        this['name'] = name;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): ListLoadbalancersRequest {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: string): ListLoadbalancersRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withVipAddress(vipAddress: string): ListLoadbalancersRequest {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withVipPortId(vipPortId: string): ListLoadbalancersRequest {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string  | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId(): string | undefined {
        return this['vip_port_id'];
    }
    public withVipSubnetId(vipSubnetId: string): ListLoadbalancersRequest {
        this['vip_subnet_id'] = vipSubnetId;
        return this;
    }
    public set vipSubnetId(vipSubnetId: string  | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId(): string | undefined {
        return this['vip_subnet_id'];
    }
    public withVpcId(vpcId: string): ListLoadbalancersRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLoadbalancersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListLoadbalancersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withMemberAddress(memberAddress: string): ListLoadbalancersRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: string  | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress(): string | undefined {
        return this['member_address'];
    }
    public withMemberDeviceId(memberDeviceId: string): ListLoadbalancersRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: string  | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId(): string | undefined {
        return this['member_device_id'];
    }
}