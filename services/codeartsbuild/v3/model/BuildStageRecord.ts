

export class BuildStageRecord {
    public id?: string;
    public status?: string;
    private 'status_code'?: number;
    private 'log_status'?: string;
    private 'create_time'?: string;
    private 'schedule_time'?: string;
    private 'queued_time'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    public duration?: number;
    private 'build_duration'?: number;
    private 'pending_duration'?: number;
    private 'build_record_id'?: string;
    private 'execution_id'?: string;
    private 'execution_stage_name'?: string;
    private 'display_name'?: string;
    private 'node_id'?: number;
    public sequence?: number;
    public constructor() { 
    }
    public withId(id: string): BuildStageRecord {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): BuildStageRecord {
        this['status'] = status;
        return this;
    }
    public withStatusCode(statusCode: number): BuildStageRecord {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withLogStatus(logStatus: string): BuildStageRecord {
        this['log_status'] = logStatus;
        return this;
    }
    public set logStatus(logStatus: string  | undefined) {
        this['log_status'] = logStatus;
    }
    public get logStatus(): string | undefined {
        return this['log_status'];
    }
    public withCreateTime(createTime: string): BuildStageRecord {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withScheduleTime(scheduleTime: string): BuildStageRecord {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): string | undefined {
        return this['schedule_time'];
    }
    public withQueuedTime(queuedTime: string): BuildStageRecord {
        this['queued_time'] = queuedTime;
        return this;
    }
    public set queuedTime(queuedTime: string  | undefined) {
        this['queued_time'] = queuedTime;
    }
    public get queuedTime(): string | undefined {
        return this['queued_time'];
    }
    public withStartTime(startTime: string): BuildStageRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): BuildStageRecord {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withDuration(duration: number): BuildStageRecord {
        this['duration'] = duration;
        return this;
    }
    public withBuildDuration(buildDuration: number): BuildStageRecord {
        this['build_duration'] = buildDuration;
        return this;
    }
    public set buildDuration(buildDuration: number  | undefined) {
        this['build_duration'] = buildDuration;
    }
    public get buildDuration(): number | undefined {
        return this['build_duration'];
    }
    public withPendingDuration(pendingDuration: number): BuildStageRecord {
        this['pending_duration'] = pendingDuration;
        return this;
    }
    public set pendingDuration(pendingDuration: number  | undefined) {
        this['pending_duration'] = pendingDuration;
    }
    public get pendingDuration(): number | undefined {
        return this['pending_duration'];
    }
    public withBuildRecordId(buildRecordId: string): BuildStageRecord {
        this['build_record_id'] = buildRecordId;
        return this;
    }
    public set buildRecordId(buildRecordId: string  | undefined) {
        this['build_record_id'] = buildRecordId;
    }
    public get buildRecordId(): string | undefined {
        return this['build_record_id'];
    }
    public withExecutionId(executionId: string): BuildStageRecord {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withExecutionStageName(executionStageName: string): BuildStageRecord {
        this['execution_stage_name'] = executionStageName;
        return this;
    }
    public set executionStageName(executionStageName: string  | undefined) {
        this['execution_stage_name'] = executionStageName;
    }
    public get executionStageName(): string | undefined {
        return this['execution_stage_name'];
    }
    public withDisplayName(displayName: string): BuildStageRecord {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withNodeId(nodeId: number): BuildStageRecord {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: number  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): number | undefined {
        return this['node_id'];
    }
    public withSequence(sequence: number): BuildStageRecord {
        this['sequence'] = sequence;
        return this;
    }
}