

export class ShowJobInfoResult {
    public id?: string;
    private 'project_id'?: string;
    private 'project_permission_switch'?: boolean;
    private 'build_time'?: string;
    private 'charge_time'?: string;
    private 'create_time'?: number;
    public disabled?: boolean;
    public favorite?: boolean;
    private 'source_code'?: string;
    private 'running_status'?: string;
    private 'new_build'?: boolean;
    private 'job_name'?: string;
    private 'is_copy'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'is_manager'?: boolean;
    private 'is_modify'?: boolean;
    private 'is_view'?: boolean;
    private 'last_build_status'?: string;
    private 'last_build_time'?: number;
    private 'health_score'?: number;
    public constructor() { 
    }
    public withId(id: string): ShowJobInfoResult {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ShowJobInfoResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectPermissionSwitch(projectPermissionSwitch: boolean): ShowJobInfoResult {
        this['project_permission_switch'] = projectPermissionSwitch;
        return this;
    }
    public set projectPermissionSwitch(projectPermissionSwitch: boolean  | undefined) {
        this['project_permission_switch'] = projectPermissionSwitch;
    }
    public get projectPermissionSwitch(): boolean | undefined {
        return this['project_permission_switch'];
    }
    public withBuildTime(buildTime: string): ShowJobInfoResult {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: string  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): string | undefined {
        return this['build_time'];
    }
    public withChargeTime(chargeTime: string): ShowJobInfoResult {
        this['charge_time'] = chargeTime;
        return this;
    }
    public set chargeTime(chargeTime: string  | undefined) {
        this['charge_time'] = chargeTime;
    }
    public get chargeTime(): string | undefined {
        return this['charge_time'];
    }
    public withCreateTime(createTime: number): ShowJobInfoResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDisabled(disabled: boolean): ShowJobInfoResult {
        this['disabled'] = disabled;
        return this;
    }
    public withFavorite(favorite: boolean): ShowJobInfoResult {
        this['favorite'] = favorite;
        return this;
    }
    public withSourceCode(sourceCode: string): ShowJobInfoResult {
        this['source_code'] = sourceCode;
        return this;
    }
    public set sourceCode(sourceCode: string  | undefined) {
        this['source_code'] = sourceCode;
    }
    public get sourceCode(): string | undefined {
        return this['source_code'];
    }
    public withRunningStatus(runningStatus: string): ShowJobInfoResult {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): string | undefined {
        return this['running_status'];
    }
    public withNewBuild(newBuild: boolean): ShowJobInfoResult {
        this['new_build'] = newBuild;
        return this;
    }
    public set newBuild(newBuild: boolean  | undefined) {
        this['new_build'] = newBuild;
    }
    public get newBuild(): boolean | undefined {
        return this['new_build'];
    }
    public withJobName(jobName: string): ShowJobInfoResult {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withIsCopy(isCopy: boolean): ShowJobInfoResult {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsDelete(isDelete: boolean): ShowJobInfoResult {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsExecute(isExecute: boolean): ShowJobInfoResult {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsForbidden(isForbidden: boolean): ShowJobInfoResult {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withIsManager(isManager: boolean): ShowJobInfoResult {
        this['is_manager'] = isManager;
        return this;
    }
    public set isManager(isManager: boolean  | undefined) {
        this['is_manager'] = isManager;
    }
    public get isManager(): boolean | undefined {
        return this['is_manager'];
    }
    public withIsModify(isModify: boolean): ShowJobInfoResult {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsView(isView: boolean): ShowJobInfoResult {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withLastBuildStatus(lastBuildStatus: string): ShowJobInfoResult {
        this['last_build_status'] = lastBuildStatus;
        return this;
    }
    public set lastBuildStatus(lastBuildStatus: string  | undefined) {
        this['last_build_status'] = lastBuildStatus;
    }
    public get lastBuildStatus(): string | undefined {
        return this['last_build_status'];
    }
    public withLastBuildTime(lastBuildTime: number): ShowJobInfoResult {
        this['last_build_time'] = lastBuildTime;
        return this;
    }
    public set lastBuildTime(lastBuildTime: number  | undefined) {
        this['last_build_time'] = lastBuildTime;
    }
    public get lastBuildTime(): number | undefined {
        return this['last_build_time'];
    }
    public withHealthScore(healthScore: number): ShowJobInfoResult {
        this['health_score'] = healthScore;
        return this;
    }
    public set healthScore(healthScore: number  | undefined) {
        this['health_score'] = healthScore;
    }
    public get healthScore(): number | undefined {
        return this['health_score'];
    }
}