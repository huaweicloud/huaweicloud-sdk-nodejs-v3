

export class HistoryRecord1 {
    private 'record_id'?: string;
    private 'job_id'?: string;
    private 'build_number'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public result?: string;
    public branch?: string;
    private 'commit_id'?: string;
    private 'commit_message'?: string;
    public executor?: string;
    private 'trigger_type'?: string;
    public constructor() { 
    }
    public withRecordId(recordId: string): HistoryRecord1 {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withJobId(jobId: string): HistoryRecord1 {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNumber(buildNumber: number): HistoryRecord1 {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number  | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber(): number | undefined {
        return this['build_number'];
    }
    public withStartTime(startTime: string): HistoryRecord1 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): HistoryRecord1 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResult(result: string): HistoryRecord1 {
        this['result'] = result;
        return this;
    }
    public withBranch(branch: string): HistoryRecord1 {
        this['branch'] = branch;
        return this;
    }
    public withCommitId(commitId: string): HistoryRecord1 {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withCommitMessage(commitMessage: string): HistoryRecord1 {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withExecutor(executor: string): HistoryRecord1 {
        this['executor'] = executor;
        return this;
    }
    public withTriggerType(triggerType: string): HistoryRecord1 {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
}