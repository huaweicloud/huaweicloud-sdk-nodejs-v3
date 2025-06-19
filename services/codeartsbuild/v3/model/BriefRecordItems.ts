

export class BriefRecordItems {
    public id?: string;
    public status?: string;
    public duration?: number;
    private 'create_time'?: string;
    private 'schedule_time'?: string;
    private 'queued_time'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'build_duration'?: number;
    private 'pending_duration'?: number;
    private 'project_id'?: string;
    private 'build_no'?: number;
    public branch?: string;
    public revision?: string;
    private 'trigger_name'?: string;
    private 'daily_build_number'?: string;
    public constructor() { 
    }
    public withId(id: string): BriefRecordItems {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): BriefRecordItems {
        this['status'] = status;
        return this;
    }
    public withDuration(duration: number): BriefRecordItems {
        this['duration'] = duration;
        return this;
    }
    public withCreateTime(createTime: string): BriefRecordItems {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withScheduleTime(scheduleTime: string): BriefRecordItems {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): string | undefined {
        return this['schedule_time'];
    }
    public withQueuedTime(queuedTime: string): BriefRecordItems {
        this['queued_time'] = queuedTime;
        return this;
    }
    public set queuedTime(queuedTime: string  | undefined) {
        this['queued_time'] = queuedTime;
    }
    public get queuedTime(): string | undefined {
        return this['queued_time'];
    }
    public withStartTime(startTime: string): BriefRecordItems {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): BriefRecordItems {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withBuildDuration(buildDuration: number): BriefRecordItems {
        this['build_duration'] = buildDuration;
        return this;
    }
    public set buildDuration(buildDuration: number  | undefined) {
        this['build_duration'] = buildDuration;
    }
    public get buildDuration(): number | undefined {
        return this['build_duration'];
    }
    public withPendingDuration(pendingDuration: number): BriefRecordItems {
        this['pending_duration'] = pendingDuration;
        return this;
    }
    public set pendingDuration(pendingDuration: number  | undefined) {
        this['pending_duration'] = pendingDuration;
    }
    public get pendingDuration(): number | undefined {
        return this['pending_duration'];
    }
    public withProjectId(projectId: string): BriefRecordItems {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBuildNo(buildNo: number): BriefRecordItems {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withBranch(branch: string): BriefRecordItems {
        this['branch'] = branch;
        return this;
    }
    public withRevision(revision: string): BriefRecordItems {
        this['revision'] = revision;
        return this;
    }
    public withTriggerName(triggerName: string): BriefRecordItems {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string  | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName(): string | undefined {
        return this['trigger_name'];
    }
    public withDailyBuildNumber(dailyBuildNumber: string): BriefRecordItems {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
}