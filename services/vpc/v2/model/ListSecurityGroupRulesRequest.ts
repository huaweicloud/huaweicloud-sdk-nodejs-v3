

export class ListSecurityGroupRulesRequest {
    public marker?: string;
    public limit?: number;
    private 'security_group_id'?: string;
    private 'remote_ip_prefix'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListSecurityGroupRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListSecurityGroupRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ListSecurityGroupRulesRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
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
}