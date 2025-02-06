

export class ListGroupMembershipsForMemberRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'user_id'?: string;
    public constructor(identityStoreId?: string, userId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['user_id'] = userId;
    }
    public withXSecurityToken(xSecurityToken: string): ListGroupMembershipsForMemberRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): ListGroupMembershipsForMemberRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withLimit(limit: number): ListGroupMembershipsForMemberRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGroupMembershipsForMemberRequest {
        this['marker'] = marker;
        return this;
    }
    public withUserId(userId: string): ListGroupMembershipsForMemberRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}