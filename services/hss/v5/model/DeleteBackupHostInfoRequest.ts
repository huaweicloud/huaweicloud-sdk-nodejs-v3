import { DeleteBackupHostRequestInfo } from './DeleteBackupHostRequestInfo';


export class DeleteBackupHostInfoRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteBackupHostRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteBackupHostInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteBackupHostRequestInfo): DeleteBackupHostInfoRequest {
        this['body'] = body;
        return this;
    }
}