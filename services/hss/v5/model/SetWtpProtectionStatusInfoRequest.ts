import { SetWtpProtectionStatusRequestInfo } from './SetWtpProtectionStatusRequestInfo';


export class SetWtpProtectionStatusInfoRequest {
    private 'enterprise_project_id'?: string;
    public region?: string;
    public body?: SetWtpProtectionStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetWtpProtectionStatusInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): SetWtpProtectionStatusInfoRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: SetWtpProtectionStatusRequestInfo): SetWtpProtectionStatusInfoRequest {
        this['body'] = body;
        return this;
    }
}