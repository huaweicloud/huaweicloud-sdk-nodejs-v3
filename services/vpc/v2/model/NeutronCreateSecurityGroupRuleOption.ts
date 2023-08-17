

export class NeutronCreateSecurityGroupRuleOption {
    public description?: string;
    public direction?: NeutronCreateSecurityGroupRuleOptionDirectionEnum | string;
    public ethertype?: NeutronCreateSecurityGroupRuleOptionEthertypeEnum | string;
    private 'port_range_max'?: number;
    private 'port_range_min'?: number;
    public protocol?: string;
    private 'remote_group_id'?: string;
    private 'remote_ip_prefix'?: string;
    private 'remote_address_group_id'?: string;
    private 'security_group_id'?: string;
    public constructor(direction?: string, securityGroupId?: string) { 
        this['direction'] = direction;
        this['security_group_id'] = securityGroupId;
    }
    public withDescription(description: string): NeutronCreateSecurityGroupRuleOption {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: NeutronCreateSecurityGroupRuleOptionDirectionEnum | string): NeutronCreateSecurityGroupRuleOption {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: NeutronCreateSecurityGroupRuleOptionEthertypeEnum | string): NeutronCreateSecurityGroupRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withPortRangeMax(portRangeMax: number): NeutronCreateSecurityGroupRuleOption {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: number  | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax(): number | undefined {
        return this['port_range_max'];
    }
    public withPortRangeMin(portRangeMin: number): NeutronCreateSecurityGroupRuleOption {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: number  | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin(): number | undefined {
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
    public set remoteGroupId(remoteGroupId: string  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): string | undefined {
        return this['remote_group_id'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): NeutronCreateSecurityGroupRuleOption {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): NeutronCreateSecurityGroupRuleOption {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): string | undefined {
        return this['remote_address_group_id'];
    }
    public withSecurityGroupId(securityGroupId: string): NeutronCreateSecurityGroupRuleOption {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
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
