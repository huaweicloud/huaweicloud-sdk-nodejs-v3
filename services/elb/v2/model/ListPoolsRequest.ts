

export class ListPoolsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'healthmonitor_id'?: string | undefined;
    private 'loadbalancer_id'?: string | undefined;
    public protocol?: string;
    private 'lb_algorithm'?: string | undefined;
    private 'member_address'?: string | undefined;
    private 'member_device_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPoolsRequest {
        this['marker'] = marker;
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
    public withId(id: string): ListPoolsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListPoolsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListPoolsRequest {
        this['description'] = description;
        return this;
    }
    public withHealthmonitorId(healthmonitorId: string): ListPoolsRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId() {
        return this['healthmonitor_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): ListPoolsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withProtocol(protocol: string): ListPoolsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): ListPoolsRequest {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withMemberAddress(memberAddress: string): ListPoolsRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: string | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress() {
        return this['member_address'];
    }
    public withMemberDeviceId(memberDeviceId: string): ListPoolsRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: string | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId() {
        return this['member_device_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPoolsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}