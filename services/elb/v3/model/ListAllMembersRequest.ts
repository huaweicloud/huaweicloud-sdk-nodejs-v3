

export class ListAllMembersRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public name?: Array<string>;
    public weight?: Array<number>;
    private 'admin_state_up'?: boolean;
    private 'subnet_cidr_id'?: Array<string>;
    public address?: Array<string>;
    private 'protocol_port'?: Array<number>;
    public id?: Array<string>;
    private 'operating_status'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'ip_version'?: Array<string>;
    private 'pool_id'?: Array<string>;
    private 'loadbalancer_id'?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListAllMembersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListAllMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListAllMembersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withName(name: Array<string>): ListAllMembersRequest {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: Array<number>): ListAllMembersRequest {
        this['weight'] = weight;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListAllMembersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: Array<string>): ListAllMembersRequest {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: Array<string>  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): Array<string> | undefined {
        return this['subnet_cidr_id'];
    }
    public withAddress(address: Array<string>): ListAllMembersRequest {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: Array<number>): ListAllMembersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: Array<number>  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): Array<number> | undefined {
        return this['protocol_port'];
    }
    public withId(id: Array<string>): ListAllMembersRequest {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: Array<string>): ListAllMembersRequest {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: Array<string>  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): Array<string> | undefined {
        return this['operating_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListAllMembersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<string>): ListAllMembersRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<string>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<string> | undefined {
        return this['ip_version'];
    }
    public withPoolId(poolId: Array<string>): ListAllMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: Array<string>  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): Array<string> | undefined {
        return this['pool_id'];
    }
    public withLoadbalancerId(loadbalancerId: Array<string>): ListAllMembersRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: Array<string>  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): Array<string> | undefined {
        return this['loadbalancer_id'];
    }
}