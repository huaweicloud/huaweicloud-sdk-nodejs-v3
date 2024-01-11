

export class ListMasterSlavePoolsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public description?: Array<string>;
    private 'healthmonitor_id'?: Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'loadbalancer_id'?: Array<string>;
    public protocol?: Array<string>;
    private 'lb_algorithm'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'ip_version'?: Array<string>;
    private 'member_address'?: Array<string>;
    private 'member_device_id'?: Array<string>;
    private 'listener_id'?: Array<string>;
    private 'member_instance_id'?: Array<string>;
    private 'vpc_id'?: Array<string>;
    public type?: Array<string>;
    private 'connection_drain'?: boolean;
    public constructor() { 
    }
    public withMarker(marker: string): ListMasterSlavePoolsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListMasterSlavePoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListMasterSlavePoolsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withDescription(description: Array<string>): ListMasterSlavePoolsRequest {
        this['description'] = description;
        return this;
    }
    public withHealthmonitorId(healthmonitorId: Array<string>): ListMasterSlavePoolsRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: Array<string>  | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId(): Array<string> | undefined {
        return this['healthmonitor_id'];
    }
    public withId(id: Array<string>): ListMasterSlavePoolsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListMasterSlavePoolsRequest {
        this['name'] = name;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: Array<string>): ListMasterSlavePoolsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: Array<string>  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): Array<string> | undefined {
        return this['loadbalancer_id'];
    }
    public withProtocol(protocol: Array<string>): ListMasterSlavePoolsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: Array<string>): ListMasterSlavePoolsRequest {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: Array<string>  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): Array<string> | undefined {
        return this['lb_algorithm'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListMasterSlavePoolsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<string>): ListMasterSlavePoolsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<string>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<string> | undefined {
        return this['ip_version'];
    }
    public withMemberAddress(memberAddress: Array<string>): ListMasterSlavePoolsRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: Array<string>  | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress(): Array<string> | undefined {
        return this['member_address'];
    }
    public withMemberDeviceId(memberDeviceId: Array<string>): ListMasterSlavePoolsRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: Array<string>  | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId(): Array<string> | undefined {
        return this['member_device_id'];
    }
    public withListenerId(listenerId: Array<string>): ListMasterSlavePoolsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: Array<string>  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): Array<string> | undefined {
        return this['listener_id'];
    }
    public withMemberInstanceId(memberInstanceId: Array<string>): ListMasterSlavePoolsRequest {
        this['member_instance_id'] = memberInstanceId;
        return this;
    }
    public set memberInstanceId(memberInstanceId: Array<string>  | undefined) {
        this['member_instance_id'] = memberInstanceId;
    }
    public get memberInstanceId(): Array<string> | undefined {
        return this['member_instance_id'];
    }
    public withVpcId(vpcId: Array<string>): ListMasterSlavePoolsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withType(type: Array<string>): ListMasterSlavePoolsRequest {
        this['type'] = type;
        return this;
    }
    public withConnectionDrain(connectionDrain: boolean): ListMasterSlavePoolsRequest {
        this['connection_drain'] = connectionDrain;
        return this;
    }
    public set connectionDrain(connectionDrain: boolean  | undefined) {
        this['connection_drain'] = connectionDrain;
    }
    public get connectionDrain(): boolean | undefined {
        return this['connection_drain'];
    }
}