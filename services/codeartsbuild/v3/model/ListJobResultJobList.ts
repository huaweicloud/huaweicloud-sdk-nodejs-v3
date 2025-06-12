

export class ListJobResultJobList {
    public id?: string;
    private 'job_name'?: string;
    private 'job_creator'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'nick_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'last_build_time'?: number;
    private 'health_score'?: number;
    private 'source_code'?: string;
    private 'last_build_status'?: string;
    private 'last_job_running_status'?: string;
    private 'last_build_user'?: string;
    private 'last_build_user_id'?: string;
    private 'is_finished'?: boolean;
    public disabled?: boolean;
    public favorite?: boolean;
    private 'is_modify'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_view'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_copy'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'task_id'?: string;
    private 'code_branch'?: string;
    private 'commit_id'?: string;
    private 'trigger_type'?: string;
    private 'build_time'?: number;
    private 'scm_web_url'?: string;
    private 'scm_type'?: string;
    private 'repo_id'?: string;
    private 'commit_detail_url'?: string;
    private 'build_number'?: string;
    private 'forbidden_msg'?: string;
    private 'build_project_id'?: string;
    private 'build_type'?: string;
    public tag?: string;
    private 'project_permission_switch'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ListJobResultJobList {
        this['id'] = id;
        return this;
    }
    public withJobName(jobName: string): ListJobResultJobList {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobCreator(jobCreator: string): ListJobResultJobList {
        this['job_creator'] = jobCreator;
        return this;
    }
    public set jobCreator(jobCreator: string  | undefined) {
        this['job_creator'] = jobCreator;
    }
    public get jobCreator(): string | undefined {
        return this['job_creator'];
    }
    public withUserId(userId: string): ListJobResultJobList {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ListJobResultJobList {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withNickName(nickName: string): ListJobResultJobList {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withProjectId(projectId: string): ListJobResultJobList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ListJobResultJobList {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withLastBuildTime(lastBuildTime: number): ListJobResultJobList {
        this['last_build_time'] = lastBuildTime;
        return this;
    }
    public set lastBuildTime(lastBuildTime: number  | undefined) {
        this['last_build_time'] = lastBuildTime;
    }
    public get lastBuildTime(): number | undefined {
        return this['last_build_time'];
    }
    public withHealthScore(healthScore: number): ListJobResultJobList {
        this['health_score'] = healthScore;
        return this;
    }
    public set healthScore(healthScore: number  | undefined) {
        this['health_score'] = healthScore;
    }
    public get healthScore(): number | undefined {
        return this['health_score'];
    }
    public withSourceCode(sourceCode: string): ListJobResultJobList {
        this['source_code'] = sourceCode;
        return this;
    }
    public set sourceCode(sourceCode: string  | undefined) {
        this['source_code'] = sourceCode;
    }
    public get sourceCode(): string | undefined {
        return this['source_code'];
    }
    public withLastBuildStatus(lastBuildStatus: string): ListJobResultJobList {
        this['last_build_status'] = lastBuildStatus;
        return this;
    }
    public set lastBuildStatus(lastBuildStatus: string  | undefined) {
        this['last_build_status'] = lastBuildStatus;
    }
    public get lastBuildStatus(): string | undefined {
        return this['last_build_status'];
    }
    public withLastJobRunningStatus(lastJobRunningStatus: string): ListJobResultJobList {
        this['last_job_running_status'] = lastJobRunningStatus;
        return this;
    }
    public set lastJobRunningStatus(lastJobRunningStatus: string  | undefined) {
        this['last_job_running_status'] = lastJobRunningStatus;
    }
    public get lastJobRunningStatus(): string | undefined {
        return this['last_job_running_status'];
    }
    public withLastBuildUser(lastBuildUser: string): ListJobResultJobList {
        this['last_build_user'] = lastBuildUser;
        return this;
    }
    public set lastBuildUser(lastBuildUser: string  | undefined) {
        this['last_build_user'] = lastBuildUser;
    }
    public get lastBuildUser(): string | undefined {
        return this['last_build_user'];
    }
    public withLastBuildUserId(lastBuildUserId: string): ListJobResultJobList {
        this['last_build_user_id'] = lastBuildUserId;
        return this;
    }
    public set lastBuildUserId(lastBuildUserId: string  | undefined) {
        this['last_build_user_id'] = lastBuildUserId;
    }
    public get lastBuildUserId(): string | undefined {
        return this['last_build_user_id'];
    }
    public withIsFinished(isFinished: boolean): ListJobResultJobList {
        this['is_finished'] = isFinished;
        return this;
    }
    public set isFinished(isFinished: boolean  | undefined) {
        this['is_finished'] = isFinished;
    }
    public get isFinished(): boolean | undefined {
        return this['is_finished'];
    }
    public withDisabled(disabled: boolean): ListJobResultJobList {
        this['disabled'] = disabled;
        return this;
    }
    public withFavorite(favorite: boolean): ListJobResultJobList {
        this['favorite'] = favorite;
        return this;
    }
    public withIsModify(isModify: boolean): ListJobResultJobList {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsDelete(isDelete: boolean): ListJobResultJobList {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsView(isView: boolean): ListJobResultJobList {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withIsExecute(isExecute: boolean): ListJobResultJobList {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsCopy(isCopy: boolean): ListJobResultJobList {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsForbidden(isForbidden: boolean): ListJobResultJobList {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withTaskId(taskId: string): ListJobResultJobList {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCodeBranch(codeBranch: string): ListJobResultJobList {
        this['code_branch'] = codeBranch;
        return this;
    }
    public set codeBranch(codeBranch: string  | undefined) {
        this['code_branch'] = codeBranch;
    }
    public get codeBranch(): string | undefined {
        return this['code_branch'];
    }
    public withCommitId(commitId: string): ListJobResultJobList {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withTriggerType(triggerType: string): ListJobResultJobList {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withBuildTime(buildTime: number): ListJobResultJobList {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: number  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): number | undefined {
        return this['build_time'];
    }
    public withScmWebUrl(scmWebUrl: string): ListJobResultJobList {
        this['scm_web_url'] = scmWebUrl;
        return this;
    }
    public set scmWebUrl(scmWebUrl: string  | undefined) {
        this['scm_web_url'] = scmWebUrl;
    }
    public get scmWebUrl(): string | undefined {
        return this['scm_web_url'];
    }
    public withScmType(scmType: string): ListJobResultJobList {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withRepoId(repoId: string): ListJobResultJobList {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withCommitDetailUrl(commitDetailUrl: string): ListJobResultJobList {
        this['commit_detail_url'] = commitDetailUrl;
        return this;
    }
    public set commitDetailUrl(commitDetailUrl: string  | undefined) {
        this['commit_detail_url'] = commitDetailUrl;
    }
    public get commitDetailUrl(): string | undefined {
        return this['commit_detail_url'];
    }
    public withBuildNumber(buildNumber: string): ListJobResultJobList {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: string  | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber(): string | undefined {
        return this['build_number'];
    }
    public withForbiddenMsg(forbiddenMsg: string): ListJobResultJobList {
        this['forbidden_msg'] = forbiddenMsg;
        return this;
    }
    public set forbiddenMsg(forbiddenMsg: string  | undefined) {
        this['forbidden_msg'] = forbiddenMsg;
    }
    public get forbiddenMsg(): string | undefined {
        return this['forbidden_msg'];
    }
    public withBuildProjectId(buildProjectId: string): ListJobResultJobList {
        this['build_project_id'] = buildProjectId;
        return this;
    }
    public set buildProjectId(buildProjectId: string  | undefined) {
        this['build_project_id'] = buildProjectId;
    }
    public get buildProjectId(): string | undefined {
        return this['build_project_id'];
    }
    public withBuildType(buildType: string): ListJobResultJobList {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withTag(tag: string): ListJobResultJobList {
        this['tag'] = tag;
        return this;
    }
    public withProjectPermissionSwitch(projectPermissionSwitch: boolean): ListJobResultJobList {
        this['project_permission_switch'] = projectPermissionSwitch;
        return this;
    }
    public set projectPermissionSwitch(projectPermissionSwitch: boolean  | undefined) {
        this['project_permission_switch'] = projectPermissionSwitch;
    }
    public get projectPermissionSwitch(): boolean | undefined {
        return this['project_permission_switch'];
    }
}