import { BatchUpdateClusterResourceRequestBody } from './BatchUpdateClusterResourceRequestBody';


export class BatchUpdateClusterResourceRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchUpdateClusterResourceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpdateClusterResourceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUpdateClusterResourceRequestBody): BatchUpdateClusterResourceRequest {
        this['body'] = body;
        return this;
    }
}