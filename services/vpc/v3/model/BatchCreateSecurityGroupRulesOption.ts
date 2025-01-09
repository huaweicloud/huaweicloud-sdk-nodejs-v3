

export class BatchCreateSecurityGroupRulesOption {
    public description?: string;
    public direction?: string;
    public ethertype?: string;
    public protocol?: string;
    public multiport?: string;
    private 'remote_ip_prefix'?: string;
    private 'remote_group_id'?: string;
    private 'remote_address_group_id'?: string;
    public action?: string;
    public priority?: string;
    public enabled?: boolean;
    public constructor(direction?: string) { 
        this['direction'] = direction;
    }
    public withDescription(description: string): BatchCreateSecurityGroupRulesOption {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: string): BatchCreateSecurityGroupRulesOption {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: string): BatchCreateSecurityGroupRulesOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withProtocol(protocol: string): BatchCreateSecurityGroupRulesOption {
        this['protocol'] = protocol;
        return this;
    }
    public withMultiport(multiport: string): BatchCreateSecurityGroupRulesOption {
        this['multiport'] = multiport;
        return this;
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): BatchCreateSecurityGroupRulesOption {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withRemoteGroupId(remoteGroupId: string): BatchCreateSecurityGroupRulesOption {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): string | undefined {
        return this['remote_group_id'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): BatchCreateSecurityGroupRulesOption {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): string | undefined {
        return this['remote_address_group_id'];
    }
    public withAction(action: string): BatchCreateSecurityGroupRulesOption {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: string): BatchCreateSecurityGroupRulesOption {
        this['priority'] = priority;
        return this;
    }
    public withEnabled(enabled: boolean): BatchCreateSecurityGroupRulesOption {
        this['enabled'] = enabled;
        return this;
    }
}