import { BatchDeleteCompositeHostsRequestBody } from './BatchDeleteCompositeHostsRequestBody';


export class BatchDeleteCompositeHostsRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: BatchDeleteCompositeHostsRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteCompositeHostsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchDeleteCompositeHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchDeleteCompositeHostsRequestBody): BatchDeleteCompositeHostsRequest {
        this['body'] = body;
        return this;
    }
}