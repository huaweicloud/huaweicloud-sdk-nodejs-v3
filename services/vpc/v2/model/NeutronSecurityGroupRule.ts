

export class NeutronSecurityGroupRule {
    public description: string;
    public direction: NeutronSecurityGroupRuleDirectionEnum;
    public ethertype: string;
    public id: string;
    private 'port_range_max': number | undefined;
    private 'port_range_min': number | undefined;
    public protocol: string;
    private 'remote_group_id': string | undefined;
    private 'remote_ip_prefix': string | undefined;
    private 'remote_address_group_id'?: string | undefined;
    private 'security_group_id': string | undefined;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(description?: any, direction?: any, ethertype?: any, id?: any, portRangeMax?: any, portRangeMin?: any, protocol?: any, remoteGroupId?: any, remoteIpPrefix?: any, securityGroupId?: any, tenantId?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
        this['description'] = description;
        this['direction'] = direction;
        this['ethertype'] = ethertype;
        this['id'] = id;
        this['port_range_max'] = portRangeMax;
        this['port_range_min'] = portRangeMin;
        this['protocol'] = protocol;
        this['remote_group_id'] = remoteGroupId;
        this['remote_ip_prefix'] = remoteIpPrefix;
        this['security_group_id'] = securityGroupId;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withDescription(description: string): NeutronSecurityGroupRule {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: NeutronSecurityGroupRuleDirectionEnum): NeutronSecurityGroupRule {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: string): NeutronSecurityGroupRule {
        this['ethertype'] = ethertype;
        return this;
    }
    public withId(id: string): NeutronSecurityGroupRule {
        this['id'] = id;
        return this;
    }
    public withPortRangeMax(portRangeMax: number): NeutronSecurityGroupRule {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: number | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax() {
        return this['port_range_max'];
    }
    public withPortRangeMin(portRangeMin: number): NeutronSecurityGroupRule {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: number | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin() {
        return this['port_range_min'];
    }
    public withProtocol(protocol: string): NeutronSecurityGroupRule {
        this['protocol'] = protocol;
        return this;
    }
    public withRemoteGroupId(remoteGroupId: string): NeutronSecurityGroupRule {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId() {
        return this['remote_group_id'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): NeutronSecurityGroupRule {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix() {
        return this['remote_ip_prefix'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): NeutronSecurityGroupRule {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId() {
        return this['remote_address_group_id'];
    }
    public withSecurityGroupId(securityGroupId: string): NeutronSecurityGroupRule {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withTenantId(tenantId: string): NeutronSecurityGroupRule {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronSecurityGroupRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronSecurityGroupRule {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronSecurityGroupRule {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronSecurityGroupRuleDirectionEnum {
    INGRESS = 'ingress',
    EGRESS = 'egress'
}
