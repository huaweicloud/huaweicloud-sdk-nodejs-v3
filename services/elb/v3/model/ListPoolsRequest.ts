

export class ListPoolsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    public description?: Array<string>;
    private 'admin_state_up'?: boolean | undefined;
    private 'healthmonitor_id'?: Array<string> | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'loadbalancer_id'?: Array<string> | undefined;
    public protocol?: Array<string>;
    private 'lb_algorithm'?: Array<string> | undefined;
    private 'enterprise_project_id'?: Array<string> | undefined;
    private 'ip_version'?: Array<string> | undefined;
    private 'member_address'?: Array<string> | undefined;
    private 'member_device_id'?: Array<string> | undefined;
    private 'member_deletion_protection_enable'?: boolean | undefined;
    private 'listener_id'?: Array<string> | undefined;
    private 'member_instance_id'?: Array<string> | undefined;
    private 'vpc_id'?: Array<string> | undefined;
    public type?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListPoolsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListPoolsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withDescription(description: Array<string>): ListPoolsRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListPoolsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withHealthmonitorId(healthmonitorId: Array<string>): ListPoolsRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: Array<string> | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId() {
        return this['healthmonitor_id'];
    }
    public withId(id: Array<string>): ListPoolsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListPoolsRequest {
        this['name'] = name;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: Array<string>): ListPoolsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: Array<string> | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withProtocol(protocol: Array<string>): ListPoolsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: Array<string>): ListPoolsRequest {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: Array<string> | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListPoolsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<string>): ListPoolsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<string> | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withMemberAddress(memberAddress: Array<string>): ListPoolsRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: Array<string> | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress() {
        return this['member_address'];
    }
    public withMemberDeviceId(memberDeviceId: Array<string>): ListPoolsRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: Array<string> | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId() {
        return this['member_device_id'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): ListPoolsRequest {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable() {
        return this['member_deletion_protection_enable'];
    }
    public withListenerId(listenerId: Array<string>): ListPoolsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: Array<string> | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withMemberInstanceId(memberInstanceId: Array<string>): ListPoolsRequest {
        this['member_instance_id'] = memberInstanceId;
        return this;
    }
    public set memberInstanceId(memberInstanceId: Array<string> | undefined) {
        this['member_instance_id'] = memberInstanceId;
    }
    public get memberInstanceId() {
        return this['member_instance_id'];
    }
    public withVpcId(vpcId: Array<string>): ListPoolsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string> | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withType(type: Array<string>): ListPoolsRequest {
        this['type'] = type;
        return this;
    }
}