

export class ListVulHostVaultsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'backup_info_id'?: string;
    public constructor(backupInfoId?: string) { 
        this['backup_info_id'] = backupInfoId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHostVaultsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulHostVaultsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulHostVaultsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBackupInfoId(backupInfoId: string): ListVulHostVaultsRequest {
        this['backup_info_id'] = backupInfoId;
        return this;
    }
    public set backupInfoId(backupInfoId: string  | undefined) {
        this['backup_info_id'] = backupInfoId;
    }
    public get backupInfoId(): string | undefined {
        return this['backup_info_id'];
    }
}