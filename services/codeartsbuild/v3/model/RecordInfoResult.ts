

export class RecordInfoResult {
    public id?: string;
    private 'build_project_id'?: string;
    private 'build_record_id'?: string;
    private 'parent_record_id'?: string;
    private 'devcloud_project_id'?: string;
    private 'codeci_job_id'?: string;
    private 'user_id'?: string;
    private 'build_no'?: number;
    private 'daily_build_num'?: string;
    private 'execution_id'?: string;
    private 'repo_name'?: string;
    private 'repo_id'?: string;
    public branch?: string;
    public tag?: string;
    public commit?: string;
    private 'commit_message'?: string;
    private 'commit_create_time'?: string;
    private 'trigger_type'?: string;
    private 'build_type'?: string;
    public status?: string;
    private 'domain_id'?: string;
    private 'create_time'?: string;
    private 'schedule_time'?: string;
    private 'queued_time'?: string;
    private 'start_time'?: string;
    private 'runnable_time'?: string;
    private 'finish_time'?: string;
    public duration?: number;
    private 'record_status'?: string;
    private 'use_private_slave'?: number;
    public region?: string;
    private 'err_msg'?: string;
    private 'build_config_type'?: string;
    public constructor() { 
    }
    public withId(id: string): RecordInfoResult {
        this['id'] = id;
        return this;
    }
    public withBuildProjectId(buildProjectId: string): RecordInfoResult {
        this['build_project_id'] = buildProjectId;
        return this;
    }
    public set buildProjectId(buildProjectId: string  | undefined) {
        this['build_project_id'] = buildProjectId;
    }
    public get buildProjectId(): string | undefined {
        return this['build_project_id'];
    }
    public withBuildRecordId(buildRecordId: string): RecordInfoResult {
        this['build_record_id'] = buildRecordId;
        return this;
    }
    public set buildRecordId(buildRecordId: string  | undefined) {
        this['build_record_id'] = buildRecordId;
    }
    public get buildRecordId(): string | undefined {
        return this['build_record_id'];
    }
    public withParentRecordId(parentRecordId: string): RecordInfoResult {
        this['parent_record_id'] = parentRecordId;
        return this;
    }
    public set parentRecordId(parentRecordId: string  | undefined) {
        this['parent_record_id'] = parentRecordId;
    }
    public get parentRecordId(): string | undefined {
        return this['parent_record_id'];
    }
    public withDevcloudProjectId(devcloudProjectId: string): RecordInfoResult {
        this['devcloud_project_id'] = devcloudProjectId;
        return this;
    }
    public set devcloudProjectId(devcloudProjectId: string  | undefined) {
        this['devcloud_project_id'] = devcloudProjectId;
    }
    public get devcloudProjectId(): string | undefined {
        return this['devcloud_project_id'];
    }
    public withCodeciJobId(codeciJobId: string): RecordInfoResult {
        this['codeci_job_id'] = codeciJobId;
        return this;
    }
    public set codeciJobId(codeciJobId: string  | undefined) {
        this['codeci_job_id'] = codeciJobId;
    }
    public get codeciJobId(): string | undefined {
        return this['codeci_job_id'];
    }
    public withUserId(userId: string): RecordInfoResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBuildNo(buildNo: number): RecordInfoResult {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withDailyBuildNum(dailyBuildNum: string): RecordInfoResult {
        this['daily_build_num'] = dailyBuildNum;
        return this;
    }
    public set dailyBuildNum(dailyBuildNum: string  | undefined) {
        this['daily_build_num'] = dailyBuildNum;
    }
    public get dailyBuildNum(): string | undefined {
        return this['daily_build_num'];
    }
    public withExecutionId(executionId: string): RecordInfoResult {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withRepoName(repoName: string): RecordInfoResult {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withRepoId(repoId: string): RecordInfoResult {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withBranch(branch: string): RecordInfoResult {
        this['branch'] = branch;
        return this;
    }
    public withTag(tag: string): RecordInfoResult {
        this['tag'] = tag;
        return this;
    }
    public withCommit(commit: string): RecordInfoResult {
        this['commit'] = commit;
        return this;
    }
    public withCommitMessage(commitMessage: string): RecordInfoResult {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withCommitCreateTime(commitCreateTime: string): RecordInfoResult {
        this['commit_create_time'] = commitCreateTime;
        return this;
    }
    public set commitCreateTime(commitCreateTime: string  | undefined) {
        this['commit_create_time'] = commitCreateTime;
    }
    public get commitCreateTime(): string | undefined {
        return this['commit_create_time'];
    }
    public withTriggerType(triggerType: string): RecordInfoResult {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withBuildType(buildType: string): RecordInfoResult {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withStatus(status: string): RecordInfoResult {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): RecordInfoResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreateTime(createTime: string): RecordInfoResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withScheduleTime(scheduleTime: string): RecordInfoResult {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): string | undefined {
        return this['schedule_time'];
    }
    public withQueuedTime(queuedTime: string): RecordInfoResult {
        this['queued_time'] = queuedTime;
        return this;
    }
    public set queuedTime(queuedTime: string  | undefined) {
        this['queued_time'] = queuedTime;
    }
    public get queuedTime(): string | undefined {
        return this['queued_time'];
    }
    public withStartTime(startTime: string): RecordInfoResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withRunnableTime(runnableTime: string): RecordInfoResult {
        this['runnable_time'] = runnableTime;
        return this;
    }
    public set runnableTime(runnableTime: string  | undefined) {
        this['runnable_time'] = runnableTime;
    }
    public get runnableTime(): string | undefined {
        return this['runnable_time'];
    }
    public withFinishTime(finishTime: string): RecordInfoResult {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withDuration(duration: number): RecordInfoResult {
        this['duration'] = duration;
        return this;
    }
    public withRecordStatus(recordStatus: string): RecordInfoResult {
        this['record_status'] = recordStatus;
        return this;
    }
    public set recordStatus(recordStatus: string  | undefined) {
        this['record_status'] = recordStatus;
    }
    public get recordStatus(): string | undefined {
        return this['record_status'];
    }
    public withUsePrivateSlave(usePrivateSlave: number): RecordInfoResult {
        this['use_private_slave'] = usePrivateSlave;
        return this;
    }
    public set usePrivateSlave(usePrivateSlave: number  | undefined) {
        this['use_private_slave'] = usePrivateSlave;
    }
    public get usePrivateSlave(): number | undefined {
        return this['use_private_slave'];
    }
    public withRegion(region: string): RecordInfoResult {
        this['region'] = region;
        return this;
    }
    public withErrMsg(errMsg: string): RecordInfoResult {
        this['err_msg'] = errMsg;
        return this;
    }
    public set errMsg(errMsg: string  | undefined) {
        this['err_msg'] = errMsg;
    }
    public get errMsg(): string | undefined {
        return this['err_msg'];
    }
    public withBuildConfigType(buildConfigType: string): RecordInfoResult {
        this['build_config_type'] = buildConfigType;
        return this;
    }
    public set buildConfigType(buildConfigType: string  | undefined) {
        this['build_config_type'] = buildConfigType;
    }
    public get buildConfigType(): string | undefined {
        return this['build_config_type'];
    }
}