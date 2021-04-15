

export class ListSecurityGroupRulesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'security_group_id'?: Array<string> | undefined;
    public protocol?: Array<string>;
    public description?: Array<string>;
    private 'remote_group_id'?: Array<string> | undefined;
    public direction?: string;
    public action?: string;
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
    public set securityGroupId(securityGroupId: Array<string> | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
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
    public set remoteGroupId(remoteGroupId: Array<string> | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId() {
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
}