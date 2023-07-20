import { ChangePrepaidCloudWafRequestBody } from './ChangePrepaidCloudWafRequestBody';


export class ChangePrepaidCloudWafRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangePrepaidCloudWafRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ChangePrepaidCloudWafRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangePrepaidCloudWafRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangePrepaidCloudWafRequestBody): ChangePrepaidCloudWafRequest {
        this['body'] = body;
        return this;
    }
}