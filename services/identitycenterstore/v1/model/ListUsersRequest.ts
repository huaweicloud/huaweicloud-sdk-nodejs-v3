

export class ListUsersRequest {
    private 'X-Security-Token'?: string;
    public marker?: string;
    public limit?: number;
    private 'identity_store_id'?: string;
    private 'user_name'?: string;
    public constructor(identityStoreId?: string) { 
        this['identity_store_id'] = identityStoreId;
    }
    public withXSecurityToken(xSecurityToken: string): ListUsersRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withMarker(marker: string): ListUsersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withIdentityStoreId(identityStoreId: string): ListUsersRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserName(userName: string): ListUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}