

export class ListSecurityProfilesRequest {
    private 'Instance-Id'?: string;
    private 'security_type'?: string;
    private 'target_type'?: string;
    private 'target_id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListSecurityProfilesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withSecurityType(securityType: string): ListSecurityProfilesRequest {
        this['security_type'] = securityType;
        return this;
    }
    public set securityType(securityType: string  | undefined) {
        this['security_type'] = securityType;
    }
    public get securityType(): string | undefined {
        return this['security_type'];
    }
    public withTargetType(targetType: string): ListSecurityProfilesRequest {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): ListSecurityProfilesRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withLimit(limit: number): ListSecurityProfilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecurityProfilesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListSecurityProfilesRequest {
        this['offset'] = offset;
        return this;
    }
}