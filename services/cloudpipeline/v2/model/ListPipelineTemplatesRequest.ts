import { ListPipelineTemplatesQuery } from './ListPipelineTemplatesQuery';


export class ListPipelineTemplatesRequest {
    private 'tenant_id'?: string;
    public body?: ListPipelineTemplatesQuery;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ListPipelineTemplatesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBody(body: ListPipelineTemplatesQuery): ListPipelineTemplatesRequest {
        this['body'] = body;
        return this;
    }
}