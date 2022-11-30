import { ChangePrepaidCloudWafRequestBody } from './ChangePrepaidCloudWafRequestBody';


export class ChangePrepaidCloudWafRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: ChangePrepaidCloudWafRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ChangePrepaidCloudWafRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangePrepaidCloudWafRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangePrepaidCloudWafRequestBody): ChangePrepaidCloudWafRequest {
        this['body'] = body;
        return this;
    }
}