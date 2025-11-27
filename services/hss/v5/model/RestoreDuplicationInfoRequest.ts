import { RestoreDuplicationRequestInfo } from './RestoreDuplicationRequestInfo';


export class RestoreDuplicationInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'backup_id'?: string;
    public body?: RestoreDuplicationRequestInfo;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withRegion(region: string): RestoreDuplicationInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RestoreDuplicationInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBackupId(backupId: string): RestoreDuplicationInfoRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: RestoreDuplicationRequestInfo): RestoreDuplicationInfoRequest {
        this['body'] = body;
        return this;
    }
}