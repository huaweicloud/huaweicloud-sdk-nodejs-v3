

export class DeleteDuplicationInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'backup_id'?: string;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteDuplicationInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBackupId(backupId: string): DeleteDuplicationInfoRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
}