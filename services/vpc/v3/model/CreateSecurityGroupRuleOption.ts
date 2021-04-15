

export class CreateSecurityGroupRuleOption {
    private 'security_group_id': string | undefined;
    public description?: string;
    public direction: string;
    public ethertype?: string;
    public protocol?: string;
    public multiport?: string;
    private 'remote_ip_prefix'?: string | undefined;
    private 'remote_group_id'?: string | undefined;
    private 'remote_address_group_id'?: string | undefined;
    public action?: string;
    public priority?: string;
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
    public withMultiport(multiport: string): CreateSecurityGroupRuleOption {
        this['multiport'] = multiport;
        return this;
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
    public withRemoteAddressGroupId(remoteAddressGroupId: string): CreateSecurityGroupRuleOption {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId() {
        return this['remote_address_group_id'];
    }
    public withAction(action: string): CreateSecurityGroupRuleOption {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: string): CreateSecurityGroupRuleOption {
        this['priority'] = priority;
        return this;
    }
}