import { SetWtpProtectionStatusRequestInfo } from './SetWtpProtectionStatusRequestInfo';


export class SetWtpProtectionStatusInfoRequest {
    private 'Content-Type'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: SetWtpProtectionStatusRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withContentType(contentType: string): SetWtpProtectionStatusInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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