import { AlertPolicyDTO } from './AlertPolicyDTO';


export class CreateAlertPolicyRequest {
    private 'tenant_id'?: string;
    public body?: AlertPolicyDTO;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): CreateAlertPolicyRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: AlertPolicyDTO): CreateAlertPolicyRequest {
        this['body'] = body;
        return this;
    }
}