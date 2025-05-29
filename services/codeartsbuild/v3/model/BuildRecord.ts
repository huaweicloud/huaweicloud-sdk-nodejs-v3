import { BuildRecordBuildRecordType } from './BuildRecordBuildRecordType';
import { BuildRecordParameters } from './BuildRecordParameters';


export class BuildRecord {
    public id?: string;
    public status?: string;
    private 'status_code'?: number;
    private 'create_time'?: string;
    private 'schedule_time'?: string;
    private 'queued_time'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    public duration?: number;
    private 'build_duration'?: number;
    private 'pending_duration'?: number;
    private 'project_id'?: string;
    private 'display_name'?: string;
    private 'trigger_name'?: string;
    private 'group_name'?: string;
    private 'execution_id'?: string;
    public parameters?: Array<BuildRecordParameters>;
    public repository?: string;
    public branch?: string;
    public revision?: string;
    private 'build_yml_path'?: string;
    private 'build_yml_url'?: string;
    private 'daily_build_number'?: string;
    private 'build_record_type'?: BuildRecordBuildRecordType;
    private 'trigger_type'?: string;
    private 'scm_type'?: string;
    private 'scm_web_url'?: string;
    private 'user_id'?: string;
    private 'build_no'?: string;
    private 'daily_build_no'?: string;
    private 'dev_cloud_build_type'?: string;
    public constructor() { 
    }
    public withId(id: string): BuildRecord {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): BuildRecord {
        this['status'] = status;
        return this;
    }
    public withStatusCode(statusCode: number): BuildRecord {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withCreateTime(createTime: string): BuildRecord {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withScheduleTime(scheduleTime: string): BuildRecord {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): string | undefined {
        return this['schedule_time'];
    }
    public withQueuedTime(queuedTime: string): BuildRecord {
        this['queued_time'] = queuedTime;
        return this;
    }
    public set queuedTime(queuedTime: string  | undefined) {
        this['queued_time'] = queuedTime;
    }
    public get queuedTime(): string | undefined {
        return this['queued_time'];
    }
    public withStartTime(startTime: string): BuildRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): BuildRecord {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withDuration(duration: number): BuildRecord {
        this['duration'] = duration;
        return this;
    }
    public withBuildDuration(buildDuration: number): BuildRecord {
        this['build_duration'] = buildDuration;
        return this;
    }
    public set buildDuration(buildDuration: number  | undefined) {
        this['build_duration'] = buildDuration;
    }
    public get buildDuration(): number | undefined {
        return this['build_duration'];
    }
    public withPendingDuration(pendingDuration: number): BuildRecord {
        this['pending_duration'] = pendingDuration;
        return this;
    }
    public set pendingDuration(pendingDuration: number  | undefined) {
        this['pending_duration'] = pendingDuration;
    }
    public get pendingDuration(): number | undefined {
        return this['pending_duration'];
    }
    public withProjectId(projectId: string): BuildRecord {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDisplayName(displayName: string): BuildRecord {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withTriggerName(triggerName: string): BuildRecord {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string  | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName(): string | undefined {
        return this['trigger_name'];
    }
    public withGroupName(groupName: string): BuildRecord {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withExecutionId(executionId: string): BuildRecord {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withParameters(parameters: Array<BuildRecordParameters>): BuildRecord {
        this['parameters'] = parameters;
        return this;
    }
    public withRepository(repository: string): BuildRecord {
        this['repository'] = repository;
        return this;
    }
    public withBranch(branch: string): BuildRecord {
        this['branch'] = branch;
        return this;
    }
    public withRevision(revision: string): BuildRecord {
        this['revision'] = revision;
        return this;
    }
    public withBuildYmlPath(buildYmlPath: string): BuildRecord {
        this['build_yml_path'] = buildYmlPath;
        return this;
    }
    public set buildYmlPath(buildYmlPath: string  | undefined) {
        this['build_yml_path'] = buildYmlPath;
    }
    public get buildYmlPath(): string | undefined {
        return this['build_yml_path'];
    }
    public withBuildYmlUrl(buildYmlUrl: string): BuildRecord {
        this['build_yml_url'] = buildYmlUrl;
        return this;
    }
    public set buildYmlUrl(buildYmlUrl: string  | undefined) {
        this['build_yml_url'] = buildYmlUrl;
    }
    public get buildYmlUrl(): string | undefined {
        return this['build_yml_url'];
    }
    public withDailyBuildNumber(dailyBuildNumber: string): BuildRecord {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
    public withBuildRecordType(buildRecordType: BuildRecordBuildRecordType): BuildRecord {
        this['build_record_type'] = buildRecordType;
        return this;
    }
    public set buildRecordType(buildRecordType: BuildRecordBuildRecordType  | undefined) {
        this['build_record_type'] = buildRecordType;
    }
    public get buildRecordType(): BuildRecordBuildRecordType | undefined {
        return this['build_record_type'];
    }
    public withTriggerType(triggerType: string): BuildRecord {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withScmType(scmType: string): BuildRecord {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withScmWebUrl(scmWebUrl: string): BuildRecord {
        this['scm_web_url'] = scmWebUrl;
        return this;
    }
    public set scmWebUrl(scmWebUrl: string  | undefined) {
        this['scm_web_url'] = scmWebUrl;
    }
    public get scmWebUrl(): string | undefined {
        return this['scm_web_url'];
    }
    public withUserId(userId: string): BuildRecord {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBuildNo(buildNo: string): BuildRecord {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: string  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): string | undefined {
        return this['build_no'];
    }
    public withDailyBuildNo(dailyBuildNo: string): BuildRecord {
        this['daily_build_no'] = dailyBuildNo;
        return this;
    }
    public set dailyBuildNo(dailyBuildNo: string  | undefined) {
        this['daily_build_no'] = dailyBuildNo;
    }
    public get dailyBuildNo(): string | undefined {
        return this['daily_build_no'];
    }
    public withDevCloudBuildType(devCloudBuildType: string): BuildRecord {
        this['dev_cloud_build_type'] = devCloudBuildType;
        return this;
    }
    public set devCloudBuildType(devCloudBuildType: string  | undefined) {
        this['dev_cloud_build_type'] = devCloudBuildType;
    }
    public get devCloudBuildType(): string | undefined {
        return this['dev_cloud_build_type'];
    }
}