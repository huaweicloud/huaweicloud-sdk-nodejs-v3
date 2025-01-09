

export class ListSecurityGroupRulesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'security_group_id'?: Array<string>;
    public protocol?: Array<string>;
    public description?: Array<string>;
    private 'remote_group_id'?: Array<string>;
    public direction?: string;
    public action?: string;
    private 'remote_ip_prefix'?: string;
    public priority?: Array<number>;
    public ethertype?: Array<string>;
    private 'remote_address_group_id'?: Array<string>;
    public enabled?: boolean;
    public constructor() { 
    }
    public withLimit(limit: number): ListSecurityGroupRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecurityGroupRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListSecurityGroupRulesRequest {
        this['id'] = id;
        return this;
    }
    public withSecurityGroupId(securityGroupId: Array<string>): ListSecurityGroupRulesRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: Array<string>  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): Array<string> | undefined {
        return this['security_group_id'];
    }
    public withProtocol(protocol: Array<string>): ListSecurityGroupRulesRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withDescription(description: Array<string>): ListSecurityGroupRulesRequest {
        this['description'] = description;
        return this;
    }
    public withRemoteGroupId(remoteGroupId: Array<string>): ListSecurityGroupRulesRequest {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: Array<string>  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): Array<string> | undefined {
        return this['remote_group_id'];
    }
    public withDirection(direction: string): ListSecurityGroupRulesRequest {
        this['direction'] = direction;
        return this;
    }
    public withAction(action: string): ListSecurityGroupRulesRequest {
        this['action'] = action;
        return this;
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): ListSecurityGroupRulesRequest {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withPriority(priority: Array<number>): ListSecurityGroupRulesRequest {
        this['priority'] = priority;
        return this;
    }
    public withEthertype(ethertype: Array<string>): ListSecurityGroupRulesRequest {
        this['ethertype'] = ethertype;
        return this;
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: Array<string>): ListSecurityGroupRulesRequest {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: Array<string>  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): Array<string> | undefined {
        return this['remote_address_group_id'];
    }
    public withEnabled(enabled: boolean): ListSecurityGroupRulesRequest {
        this['enabled'] = enabled;
        return this;
    }
}