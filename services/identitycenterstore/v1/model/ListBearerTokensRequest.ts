

export class ListBearerTokensRequest {
    private 'identity_store_id'?: string;
    private 'tenant_id'?: string;
    private 'X-Security-Token'?: string;
    public constructor(identityStoreId?: string, tenantId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['tenant_id'] = tenantId;
    }
    public withIdentityStoreId(identityStoreId: string): ListBearerTokensRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withTenantId(tenantId: string): ListBearerTokensRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withXSecurityToken(xSecurityToken: string): ListBearerTokensRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
}