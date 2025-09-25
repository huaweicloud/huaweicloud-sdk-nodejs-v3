import { UploadReportLogoRequestBody } from './UploadReportLogoRequestBody';


export class UploadReportLogoRequest {
    private 'enterprise_project_id'?: string;
    public body?: UploadReportLogoRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UploadReportLogoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UploadReportLogoRequestBody): UploadReportLogoRequest {
        this['body'] = body;
        return this;
    }
}