

export class Job {
    public id?: string;
    private 'job_name'?: string | undefined;
    private 'job_creator'?: string | undefined;
    private 'user_name'?: string | undefined;
    private 'last_build_time'?: number | undefined;
    private 'health_score'?: number | undefined;
    private 'source_code'?: string | undefined;
    private 'last_build_status'?: string | undefined;
    private 'is_finished'?: boolean | undefined;
    public disabled?: boolean;
    public favorite?: boolean;
    private 'is_modify'?: boolean | undefined;
    private 'is_delete'?: boolean | undefined;
    private 'is_execute'?: boolean | undefined;
    private 'is_copy'?: boolean | undefined;
    private 'is_forbidden'?: boolean | undefined;
    private 'is_view'?: boolean | undefined;
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
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withJobCreator(jobCreator: string): Job {
        this['job_creator'] = jobCreator;
        return this;
    }
    public set jobCreator(jobCreator: string | undefined) {
        this['job_creator'] = jobCreator;
    }
    public get jobCreator() {
        return this['job_creator'];
    }
    public withUserName(userName: string): Job {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withLastBuildTime(lastBuildTime: number): Job {
        this['last_build_time'] = lastBuildTime;
        return this;
    }
    public set lastBuildTime(lastBuildTime: number | undefined) {
        this['last_build_time'] = lastBuildTime;
    }
    public get lastBuildTime() {
        return this['last_build_time'];
    }
    public withHealthScore(healthScore: number): Job {
        this['health_score'] = healthScore;
        return this;
    }
    public set healthScore(healthScore: number | undefined) {
        this['health_score'] = healthScore;
    }
    public get healthScore() {
        return this['health_score'];
    }
    public withSourceCode(sourceCode: string): Job {
        this['source_code'] = sourceCode;
        return this;
    }
    public set sourceCode(sourceCode: string | undefined) {
        this['source_code'] = sourceCode;
    }
    public get sourceCode() {
        return this['source_code'];
    }
    public withLastBuildStatus(lastBuildStatus: string): Job {
        this['last_build_status'] = lastBuildStatus;
        return this;
    }
    public set lastBuildStatus(lastBuildStatus: string | undefined) {
        this['last_build_status'] = lastBuildStatus;
    }
    public get lastBuildStatus() {
        return this['last_build_status'];
    }
    public withIsFinished(isFinished: boolean): Job {
        this['is_finished'] = isFinished;
        return this;
    }
    public set isFinished(isFinished: boolean | undefined) {
        this['is_finished'] = isFinished;
    }
    public get isFinished() {
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
    public set isModify(isModify: boolean | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify() {
        return this['is_modify'];
    }
    public withIsDelete(isDelete: boolean): Job {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete() {
        return this['is_delete'];
    }
    public withIsExecute(isExecute: boolean): Job {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute() {
        return this['is_execute'];
    }
    public withIsCopy(isCopy: boolean): Job {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy() {
        return this['is_copy'];
    }
    public withIsForbidden(isForbidden: boolean): Job {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden() {
        return this['is_forbidden'];
    }
    public withIsView(isView: boolean): Job {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean | undefined) {
        this['is_view'] = isView;
    }
    public get isView() {
        return this['is_view'];
    }
}