import { CreateQuotasOrderRequestInfo } from './CreateQuotasOrderRequestInfo';


export class CreateQuotasOrderRequest {
    private 'Content-Type'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CreateQuotasOrderRequestInfo;
    public constructor() { 
    }
    public withContentType(contentType: string): CreateQuotasOrderRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegion(region: string): CreateQuotasOrderRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateQuotasOrderRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateQuotasOrderRequestInfo): CreateQuotasOrderRequest {
        this['body'] = body;
        return this;
    }
}