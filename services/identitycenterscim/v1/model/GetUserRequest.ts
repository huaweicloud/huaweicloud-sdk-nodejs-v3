

export class GetUserRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    private 'user_id'?: string;
    public constructor(authorization?: string, tenantId?: string, userId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
        this['user_id'] = userId;
    }
    public withAuthorization(authorization: string): GetUserRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): GetUserRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withUserId(userId: string): GetUserRequest {
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