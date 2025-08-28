

export class ListBackupHostsInfoRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'is_run'?: boolean;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBackupHostsInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListBackupHostsInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBackupHostsInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withIsRun(isRun: boolean): ListBackupHostsInfoRequest {
        this['is_run'] = isRun;
        return this;
    }
    public set isRun(isRun: boolean  | undefined) {
        this['is_run'] = isRun;
    }
    public get isRun(): boolean | undefined {
        return this['is_run'];
    }
}