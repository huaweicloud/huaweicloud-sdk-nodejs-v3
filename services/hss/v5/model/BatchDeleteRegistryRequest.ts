import { BatchDeleteRegistryRequestBody } from './BatchDeleteRegistryRequestBody';


export class BatchDeleteRegistryRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchDeleteRegistryRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchDeleteRegistryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchDeleteRegistryRequestBody): BatchDeleteRegistryRequest {
        this['body'] = body;
        return this;
    }
}