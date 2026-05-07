import { BatchUpdateHostResourceRequestBody } from './BatchUpdateHostResourceRequestBody';


export class BatchUpdateHostResourceRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchUpdateHostResourceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpdateHostResourceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUpdateHostResourceRequestBody): BatchUpdateHostResourceRequest {
        this['body'] = body;
        return this;
    }
}