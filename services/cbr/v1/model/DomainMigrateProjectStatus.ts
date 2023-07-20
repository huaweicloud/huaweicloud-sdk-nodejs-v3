

export class DomainMigrateProjectStatus {
    public status?: DomainMigrateProjectStatusStatusEnum | string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'region_id'?: string;
    public progress?: number;
    private 'fail_code'?: number;
    private 'fail_reason'?: string;
    public constructor(status?: string, projectId?: string, projectName?: string) { 
        this['status'] = status;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withStatus(status: DomainMigrateProjectStatusStatusEnum | string): DomainMigrateProjectStatus {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): DomainMigrateProjectStatus {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): DomainMigrateProjectStatus {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRegionId(regionId: string): DomainMigrateProjectStatus {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProgress(progress: number): DomainMigrateProjectStatus {
        this['progress'] = progress;
        return this;
    }
    public withFailCode(failCode: number): DomainMigrateProjectStatus {
        this['fail_code'] = failCode;
        return this;
    }
    public set failCode(failCode: number  | undefined) {
        this['fail_code'] = failCode;
    }
    public get failCode(): number | undefined {
        return this['fail_code'];
    }
    public withFailReason(failReason: string): DomainMigrateProjectStatus {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainMigrateProjectStatusStatusEnum {
    MIGRATING = 'migrating',
    SUCCESS = 'success',
    FAILED = 'failed'
}
