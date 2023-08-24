import { UpdateBackupPolicyRequestInfo } from './UpdateBackupPolicyRequestInfo';


export class UpdateBackupPolicyInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdateBackupPolicyRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): UpdateBackupPolicyInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateBackupPolicyInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateBackupPolicyRequestInfo): UpdateBackupPolicyInfoRequest {
        this['body'] = body;
        return this;
    }
}