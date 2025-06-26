

export class ShowJobPermissionResult {
    private 'role_id'?: number;
    private 'job_id'?: string;
    private 'is_modify'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_view'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_copy'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'is_manager'?: boolean;
    private 'create_time'?: string;
    private 'last_update_time'?: string;
    public count?: number;
    public constructor() { 
    }
    public withRoleId(roleId: number): ShowJobPermissionResult {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withJobId(jobId: string): ShowJobPermissionResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withIsModify(isModify: boolean): ShowJobPermissionResult {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsDelete(isDelete: boolean): ShowJobPermissionResult {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsView(isView: boolean): ShowJobPermissionResult {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withIsExecute(isExecute: boolean): ShowJobPermissionResult {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsCopy(isCopy: boolean): ShowJobPermissionResult {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsForbidden(isForbidden: boolean): ShowJobPermissionResult {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withIsManager(isManager: boolean): ShowJobPermissionResult {
        this['is_manager'] = isManager;
        return this;
    }
    public set isManager(isManager: boolean  | undefined) {
        this['is_manager'] = isManager;
    }
    public get isManager(): boolean | undefined {
        return this['is_manager'];
    }
    public withCreateTime(createTime: string): ShowJobPermissionResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ShowJobPermissionResult {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withCount(count: number): ShowJobPermissionResult {
        this['count'] = count;
        return this;
    }
}