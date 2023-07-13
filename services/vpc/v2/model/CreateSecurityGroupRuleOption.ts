

export class CreateSecurityGroupRuleOption {
    private 'security_group_id': string | undefined;
    public description?: string;
    public direction: string;
    public ethertype?: string;
    public protocol?: string;
    private 'port_range_min'?: number | undefined;
    private 'port_range_max'?: number | undefined;
    private 'remote_ip_prefix'?: string | undefined;
    private 'remote_group_id'?: string | undefined;
    public constructor(securityGroupId?: any, direction?: any) { 
        this['security_group_id'] = securityGroupId;
        this['direction'] = direction;
    }
    public withSecurityGroupId(securityGroupId: string): CreateSecurityGroupRuleOption {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withDescription(description: string): CreateSecurityGroupRuleOption {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: string): CreateSecurityGroupRuleOption {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: string): CreateSecurityGroupRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withProtocol(protocol: string): CreateSecurityGroupRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withPortRangeMin(portRangeMin: number): CreateSecurityGroupRuleOption {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: number | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin() {
        return this['port_range_min'];
    }
    public withPortRangeMax(portRangeMax: number): CreateSecurityGroupRuleOption {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: number | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax() {
        return this['port_range_max'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): CreateSecurityGroupRuleOption {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix() {
        return this['remote_ip_prefix'];
    }
    public withRemoteGroupId(remoteGroupId: string): CreateSecurityGroupRuleOption {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId() {
        return this['remote_group_id'];
    }
}