

export class DatasetItem {
    public alert?: boolean;
    private 'allow_alert'?: boolean;
    private 'allow_lts'?: boolean;
    private 'create_time'?: number;
    private 'domain_id'?: string;
    public enable?: string;
    private 'project_id'?: string;
    public region?: boolean;
    private 'region_id'?: string;
    public success?: boolean;
    public total?: number;
    private 'update_time'?: number;
    private 'workspace_id'?: string;
    public constructor(alert?: boolean, allowAlert?: boolean, allowLts?: boolean, createTime?: number, domainId?: string, enable?: string, projectId?: string, region?: boolean, regionId?: string, success?: boolean, total?: number, updateTime?: number, workspaceId?: string) { 
        this['alert'] = alert;
        this['allow_alert'] = allowAlert;
        this['allow_lts'] = allowLts;
        this['create_time'] = createTime;
        this['domain_id'] = domainId;
        this['enable'] = enable;
        this['project_id'] = projectId;
        this['region'] = region;
        this['region_id'] = regionId;
        this['success'] = success;
        this['total'] = total;
        this['update_time'] = updateTime;
        this['workspace_id'] = workspaceId;
    }
    public withAlert(alert: boolean): DatasetItem {
        this['alert'] = alert;
        return this;
    }
    public withAllowAlert(allowAlert: boolean): DatasetItem {
        this['allow_alert'] = allowAlert;
        return this;
    }
    public set allowAlert(allowAlert: boolean  | undefined) {
        this['allow_alert'] = allowAlert;
    }
    public get allowAlert(): boolean | undefined {
        return this['allow_alert'];
    }
    public withAllowLts(allowLts: boolean): DatasetItem {
        this['allow_lts'] = allowLts;
        return this;
    }
    public set allowLts(allowLts: boolean  | undefined) {
        this['allow_lts'] = allowLts;
    }
    public get allowLts(): boolean | undefined {
        return this['allow_lts'];
    }
    public withCreateTime(createTime: number): DatasetItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDomainId(domainId: string): DatasetItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnable(enable: string): DatasetItem {
        this['enable'] = enable;
        return this;
    }
    public withProjectId(projectId: string): DatasetItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegion(region: boolean): DatasetItem {
        this['region'] = region;
        return this;
    }
    public withRegionId(regionId: string): DatasetItem {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSuccess(success: boolean): DatasetItem {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): DatasetItem {
        this['total'] = total;
        return this;
    }
    public withUpdateTime(updateTime: number): DatasetItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withWorkspaceId(workspaceId: string): DatasetItem {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}