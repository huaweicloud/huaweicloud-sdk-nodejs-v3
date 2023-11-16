import { PipelineTemplateDTO } from './PipelineTemplateDTO';


export class CreatePipelineTemplateRequest {
    private 'tenant_id'?: string;
    public body?: PipelineTemplateDTO;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): CreatePipelineTemplateRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: PipelineTemplateDTO): CreatePipelineTemplateRequest {
        this['body'] = body;
        return this;
    }
}