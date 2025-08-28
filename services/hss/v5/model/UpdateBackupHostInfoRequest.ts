import { UpdateBackupHostRequestInfo } from './UpdateBackupHostRequestInfo';


export class UpdateBackupHostInfoRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateBackupHostRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateBackupHostInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateBackupHostRequestInfo): UpdateBackupHostInfoRequest {
        this['body'] = body;
        return this;
    }
}