

export class ListMembersRequest {
    private 'pool_id'?: string;
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
    private 'member_type'?: Array<string>;
    private 'instance_id'?: Array<string>;
    private 'availability_zone'?: Array<string>;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ListMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withMarker(marker: string): ListMembersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListMembersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withName(name: Array<string>): ListMembersRequest {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: Array<number>): ListMembersRequest {
        this['weight'] = weight;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListMembersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: Array<string>): ListMembersRequest {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: Array<string>  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): Array<string> | undefined {
        return this['subnet_cidr_id'];
    }
    public withAddress(address: Array<string>): ListMembersRequest {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: Array<number>): ListMembersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: Array<number>  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): Array<number> | undefined {
        return this['protocol_port'];
    }
    public withId(id: Array<string>): ListMembersRequest {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: Array<string>): ListMembersRequest {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: Array<string>  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): Array<string> | undefined {
        return this['operating_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListMembersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withIpVersion(ipVersion: Array<string>): ListMembersRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<string>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<string> | undefined {
        return this['ip_version'];
    }
    public withMemberType(memberType: Array<string>): ListMembersRequest {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: Array<string>  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): Array<string> | undefined {
        return this['member_type'];
    }
    public withInstanceId(instanceId: Array<string>): ListMembersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withAvailabilityZone(availabilityZone: Array<string>): ListMembersRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
}