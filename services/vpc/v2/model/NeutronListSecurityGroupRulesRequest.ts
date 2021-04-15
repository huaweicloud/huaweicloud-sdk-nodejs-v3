

export class NeutronListSecurityGroupRulesRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public direction?: string;
    public protocol?: string;
    public ethertype?: string;
    public description?: string;
    private 'remote_ip_prefix'?: string | undefined;
    private 'remote_group_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'port_range_max'?: string | undefined;
    private 'port_range_min'?: string | undefined;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListSecurityGroupRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListSecurityGroupRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListSecurityGroupRulesRequest {
        this['id'] = id;
        return this;
    }
    public withDirection(direction: string): NeutronListSecurityGroupRulesRequest {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): NeutronListSecurityGroupRulesRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): NeutronListSecurityGroupRulesRequest {
        this['ethertype'] = ethertype;
        return this;
    }
    public withDescription(description: string): NeutronListSecurityGroupRulesRequest {
        this['description'] = description;
        return this;
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): NeutronListSecurityGroupRulesRequest {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix() {
        return this['remote_ip_prefix'];
    }
    public withRemoteGroupId(remoteGroupId: string): NeutronListSecurityGroupRulesRequest {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId() {
        return this['remote_group_id'];
    }
    public withSecurityGroupId(securityGroupId: string): NeutronListSecurityGroupRulesRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withPortRangeMax(portRangeMax: string): NeutronListSecurityGroupRulesRequest {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: string | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax() {
        return this['port_range_max'];
    }
    public withPortRangeMin(portRangeMin: string): NeutronListSecurityGroupRulesRequest {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: string | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin() {
        return this['port_range_min'];
    }
    public withTenantId(tenantId: string): NeutronListSecurityGroupRulesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}