import { CreatePrepaidCloudWafRequestBody } from './CreatePrepaidCloudWafRequestBody';


export class CreatePrepaidCloudWafRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: CreatePrepaidCloudWafRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreatePrepaidCloudWafRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePrepaidCloudWafRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreatePrepaidCloudWafRequestBody): CreatePrepaidCloudWafRequest {
        this['body'] = body;
        return this;
    }
}