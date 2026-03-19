import { BatchUpdateCustomRulesRequestBody } from './BatchUpdateCustomRulesRequestBody';


export class BatchUpdateCustomRulesRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: BatchUpdateCustomRulesRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateCustomRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpdateCustomRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUpdateCustomRulesRequestBody): BatchUpdateCustomRulesRequest {
        this['body'] = body;
        return this;
    }
}