

export class ListSecurityGroupRulesRequest {
    public marker?: string;
    public limit?: number;
    private 'security_group_id'?: string | undefined;
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
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
}