import { CreateUserReqBody } from './CreateUserReqBody';


export class CreateUserRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    public body?: CreateUserReqBody;
    public constructor(authorization?: string, tenantId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
    }
    public withAuthorization(authorization: string): CreateUserRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): CreateUserRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: CreateUserReqBody): CreateUserRequest {
        this['body'] = body;
        return this;
    }
}