import { CreateGroupReqBody } from './CreateGroupReqBody';


export class CreateGroupRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    public body?: CreateGroupReqBody;
    public constructor(authorization?: string, tenantId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
    }
    public withAuthorization(authorization: string): CreateGroupRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): CreateGroupRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: CreateGroupReqBody): CreateGroupRequest {
        this['body'] = body;
        return this;
    }
}