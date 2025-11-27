import { AssociateBackupPolicyRequestInfo } from './AssociateBackupPolicyRequestInfo';


export class AssociateBackupPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: AssociateBackupPolicyRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): AssociateBackupPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateBackupPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AssociateBackupPolicyRequestInfo): AssociateBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}