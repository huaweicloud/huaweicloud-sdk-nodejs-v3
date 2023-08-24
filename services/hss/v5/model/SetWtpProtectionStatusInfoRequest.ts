import { SetWtpProtectionStatusRequestInfo } from './SetWtpProtectionStatusRequestInfo';


export class SetWtpProtectionStatusInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: SetWtpProtectionStatusRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): SetWtpProtectionStatusInfoRequest {
        this['region'] = region;
        return this;
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
    public withBody(body: SetWtpProtectionStatusRequestInfo): SetWtpProtectionStatusInfoRequest {
        this['body'] = body;
        return this;
    }
}