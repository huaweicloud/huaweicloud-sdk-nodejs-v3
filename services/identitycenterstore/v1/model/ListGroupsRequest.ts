

export class ListGroupsRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    public marker?: string;
    public limit?: number;
    private 'display_name'?: string;
    public constructor(identityStoreId?: string) { 
        this['identity_store_id'] = identityStoreId;
    }
    public withXSecurityToken(xSecurityToken: string): ListGroupsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): ListGroupsRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withMarker(marker: string): ListGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDisplayName(displayName: string): ListGroupsRequest {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}