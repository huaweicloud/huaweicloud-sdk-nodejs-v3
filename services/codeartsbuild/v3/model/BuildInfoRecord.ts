import { BuildInfoRecordCommitInfo } from './BuildInfoRecordCommitInfo';


export class BuildInfoRecord {
    private 'number'?: number;
    private 'build_time'?: number;
    private 'start_time'?: number;
    private 'job_running_status'?: string;
    public state?: string;
    private 'user_id'?: string;
    public executor?: string;
    public nickname?: string;
    private 'daily_build_number'?: string;
    private 'trigger_type'?: string;
    private 'cost_time'?: number;
    private 'commit_id'?: string;
    private 'commit_info'?: BuildInfoRecordCommitInfo;
    private 'build_type'?: string;
    private 'code_branch'?: string;
    private 'scm_type'?: string;
    private 'scm_web_url'?: string;
    private 'commit_detail_url'?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: number): BuildInfoRecord {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withBuildTime(buildTime: number): BuildInfoRecord {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: number  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): number | undefined {
        return this['build_time'];
    }
    public withStartTime(startTime: number): BuildInfoRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withJobRunningStatus(jobRunningStatus: string): BuildInfoRecord {
        this['job_running_status'] = jobRunningStatus;
        return this;
    }
    public set jobRunningStatus(jobRunningStatus: string  | undefined) {
        this['job_running_status'] = jobRunningStatus;
    }
    public get jobRunningStatus(): string | undefined {
        return this['job_running_status'];
    }
    public withState(state: string): BuildInfoRecord {
        this['state'] = state;
        return this;
    }
    public withUserId(userId: string): BuildInfoRecord {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withExecutor(executor: string): BuildInfoRecord {
        this['executor'] = executor;
        return this;
    }
    public withNickname(nickname: string): BuildInfoRecord {
        this['nickname'] = nickname;
        return this;
    }
    public withDailyBuildNumber(dailyBuildNumber: string): BuildInfoRecord {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
    public withTriggerType(triggerType: string): BuildInfoRecord {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withCostTime(costTime: number): BuildInfoRecord {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: number  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): number | undefined {
        return this['cost_time'];
    }
    public withCommitId(commitId: string): BuildInfoRecord {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withCommitInfo(commitInfo: BuildInfoRecordCommitInfo): BuildInfoRecord {
        this['commit_info'] = commitInfo;
        return this;
    }
    public set commitInfo(commitInfo: BuildInfoRecordCommitInfo  | undefined) {
        this['commit_info'] = commitInfo;
    }
    public get commitInfo(): BuildInfoRecordCommitInfo | undefined {
        return this['commit_info'];
    }
    public withBuildType(buildType: string): BuildInfoRecord {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withCodeBranch(codeBranch: string): BuildInfoRecord {
        this['code_branch'] = codeBranch;
        return this;
    }
    public set codeBranch(codeBranch: string  | undefined) {
        this['code_branch'] = codeBranch;
    }
    public get codeBranch(): string | undefined {
        return this['code_branch'];
    }
    public withScmType(scmType: string): BuildInfoRecord {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withScmWebUrl(scmWebUrl: string): BuildInfoRecord {
        this['scm_web_url'] = scmWebUrl;
        return this;
    }
    public set scmWebUrl(scmWebUrl: string  | undefined) {
        this['scm_web_url'] = scmWebUrl;
    }
    public get scmWebUrl(): string | undefined {
        return this['scm_web_url'];
    }
    public withCommitDetailUrl(commitDetailUrl: string): BuildInfoRecord {
        this['commit_detail_url'] = commitDetailUrl;
        return this;
    }
    public set commitDetailUrl(commitDetailUrl: string  | undefined) {
        this['commit_detail_url'] = commitDetailUrl;
    }
    public get commitDetailUrl(): string | undefined {
        return this['commit_detail_url'];
    }
}