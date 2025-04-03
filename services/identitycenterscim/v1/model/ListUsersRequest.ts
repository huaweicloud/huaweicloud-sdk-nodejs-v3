

export class ListUsersRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    public constructor(authorization?: string, tenantId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
    }
    public withAuthorization(authorization: string): ListUsersRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): ListUsersRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}