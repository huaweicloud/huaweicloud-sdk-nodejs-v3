

export class DeleteUserRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    private 'user_id'?: string;
    public constructor(authorization?: string, tenantId?: string, userId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
        this['user_id'] = userId;
    }
    public withAuthorization(authorization: string): DeleteUserRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): DeleteUserRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withUserId(userId: string): DeleteUserRequest {
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