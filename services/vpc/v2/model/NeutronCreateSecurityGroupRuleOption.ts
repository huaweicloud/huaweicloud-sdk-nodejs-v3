

export class NeutronCreateSecurityGroupRuleOption {
    public description?: string;
    public direction: NeutronCreateSecurityGroupRuleOptionDirectionEnum;
    public ethertype?: NeutronCreateSecurityGroupRuleOptionEthertypeEnum;
    private 'port_range_max'?: number | undefined;
    private 'port_range_min'?: number | undefined;
    public protocol?: string;
    private 'remote_group_id'?: string | undefined;
    private 'remote_ip_prefix'?: string | undefined;
    private 'security_group_id': string | undefined;
    public constructor(direction?: any, securityGroupId?: any) { 
        this['direction'] = direction;
        this['security_group_id'] = securityGroupId;
    }
    public withDescription(description: string): NeutronCreateSecurityGroupRuleOption {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: NeutronCreateSecurityGroupRuleOptionDirectionEnum): NeutronCreateSecurityGroupRuleOption {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: NeutronCreateSecurityGroupRuleOptionEthertypeEnum): NeutronCreateSecurityGroupRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withPortRangeMax(portRangeMax: number): NeutronCreateSecurityGroupRuleOption {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: number | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax() {
        return this['port_range_max'];
    }
    public withPortRangeMin(portRangeMin: number): NeutronCreateSecurityGroupRuleOption {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: number | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin() {
        return this['port_range_min'];
    }
    public withProtocol(protocol: string): NeutronCreateSecurityGroupRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withRemoteGroupId(remoteGroupId: string): NeutronCreateSecurityGroupRuleOption {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId() {
        return this['remote_group_id'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): NeutronCreateSecurityGroupRuleOption {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix() {
        return this['remote_ip_prefix'];
    }
    public withSecurityGroupId(securityGroupId: string): NeutronCreateSecurityGroupRuleOption {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronCreateSecurityGroupRuleOptionDirectionEnum {
    INGRESS = 'ingress',
    EGRESS = 'egress'
}
/**
    * @export
    * @enum {string}
    */
export enum NeutronCreateSecurityGroupRuleOptionEthertypeEnum {
    IPV4 = 'IPv4',
    IPV6 = 'IPv6'
}
