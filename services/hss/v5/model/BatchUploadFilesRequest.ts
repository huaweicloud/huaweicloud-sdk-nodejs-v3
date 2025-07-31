import { BatchUploadFilesRequestBody } from './BatchUploadFilesRequestBody';


export class BatchUploadFilesRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchUploadFilesRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUploadFilesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUploadFilesRequestBody): BatchUploadFilesRequest {
        this['body'] = body;
        return this;
    }
}