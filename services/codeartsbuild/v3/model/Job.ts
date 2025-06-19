

export class Job {
    public id?: string;
    private 'job_name'?: string;
    private 'job_creator'?: string;
    private 'user_name'?: string;
    private 'last_build_time'?: number;
    private 'health_score'?: number;
    private 'source_code'?: string;
    private 'last_build_status'?: string;
    private 'is_finished'?: boolean;
    public disabled?: boolean;
    public favorite?: boolean;
    private 'is_modify'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_copy'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'is_view'?: boolean;
    private 'last_build_user'?: string;
    private 'trigger_type'?: string;
    private 'build_time'?: number;
    private 'scm_web_url'?: string;
    private 'scm_type'?: string;
    private 'repo_id'?: string;
    private 'build_project_id'?: string;
    private 'last_job_running_status'?: string;
    private 'last_build_user_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Job {
        this['id'] = id;
        return this;
    }
    public withJobName(jobName: string): Job {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobCreator(jobCreator: string): Job {
        this['job_creator'] = jobCreator;
        return this;
    }
    public set jobCreator(jobCreator: string  | undefined) {
        this['job_creator'] = jobCreator;
    }
    public get jobCreator(): string | undefined {
        return this['job_creator'];
    }
    public withUserName(userName: string): Job {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLastBuildTime(lastBuildTime: number): Job {
        this['last_build_time'] = lastBuildTime;
        return this;
    }
    public set lastBuildTime(lastBuildTime: number  | undefined) {
        this['last_build_time'] = lastBuildTime;
    }
    public get lastBuildTime(): number | undefined {
        return this['last_build_time'];
    }
    public withHealthScore(healthScore: number): Job {
        this['health_score'] = healthScore;
        return this;
    }
    public set healthScore(healthScore: number  | undefined) {
        this['health_score'] = healthScore;
    }
    public get healthScore(): number | undefined {
        return this['health_score'];
    }
    public withSourceCode(sourceCode: string): Job {
        this['source_code'] = sourceCode;
        return this;
    }
    public set sourceCode(sourceCode: string  | undefined) {
        this['source_code'] = sourceCode;
    }
    public get sourceCode(): string | undefined {
        return this['source_code'];
    }
    public withLastBuildStatus(lastBuildStatus: string): Job {
        this['last_build_status'] = lastBuildStatus;
        return this;
    }
    public set lastBuildStatus(lastBuildStatus: string  | undefined) {
        this['last_build_status'] = lastBuildStatus;
    }
    public get lastBuildStatus(): string | undefined {
        return this['last_build_status'];
    }
    public withIsFinished(isFinished: boolean): Job {
        this['is_finished'] = isFinished;
        return this;
    }
    public set isFinished(isFinished: boolean  | undefined) {
        this['is_finished'] = isFinished;
    }
    public get isFinished(): boolean | undefined {
        return this['is_finished'];
    }
    public withDisabled(disabled: boolean): Job {
        this['disabled'] = disabled;
        return this;
    }
    public withFavorite(favorite: boolean): Job {
        this['favorite'] = favorite;
        return this;
    }
    public withIsModify(isModify: boolean): Job {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsDelete(isDelete: boolean): Job {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsExecute(isExecute: boolean): Job {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsCopy(isCopy: boolean): Job {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsForbidden(isForbidden: boolean): Job {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withIsView(isView: boolean): Job {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withLastBuildUser(lastBuildUser: string): Job {
        this['last_build_user'] = lastBuildUser;
        return this;
    }
    public set lastBuildUser(lastBuildUser: string  | undefined) {
        this['last_build_user'] = lastBuildUser;
    }
    public get lastBuildUser(): string | undefined {
        return this['last_build_user'];
    }
    public withTriggerType(triggerType: string): Job {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withBuildTime(buildTime: number): Job {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: number  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): number | undefined {
        return this['build_time'];
    }
    public withScmWebUrl(scmWebUrl: string): Job {
        this['scm_web_url'] = scmWebUrl;
        return this;
    }
    public set scmWebUrl(scmWebUrl: string  | undefined) {
        this['scm_web_url'] = scmWebUrl;
    }
    public get scmWebUrl(): string | undefined {
        return this['scm_web_url'];
    }
    public withScmType(scmType: string): Job {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withRepoId(repoId: string): Job {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withBuildProjectId(buildProjectId: string): Job {
        this['build_project_id'] = buildProjectId;
        return this;
    }
    public set buildProjectId(buildProjectId: string  | undefined) {
        this['build_project_id'] = buildProjectId;
    }
    public get buildProjectId(): string | undefined {
        return this['build_project_id'];
    }
    public withLastJobRunningStatus(lastJobRunningStatus: string): Job {
        this['last_job_running_status'] = lastJobRunningStatus;
        return this;
    }
    public set lastJobRunningStatus(lastJobRunningStatus: string  | undefined) {
        this['last_job_running_status'] = lastJobRunningStatus;
    }
    public get lastJobRunningStatus(): string | undefined {
        return this['last_job_running_status'];
    }
    public withLastBuildUserId(lastBuildUserId: string): Job {
        this['last_build_user_id'] = lastBuildUserId;
        return this;
    }
    public set lastBuildUserId(lastBuildUserId: string  | undefined) {
        this['last_build_user_id'] = lastBuildUserId;
    }
    public get lastBuildUserId(): string | undefined {
        return this['last_build_user_id'];
    }
}