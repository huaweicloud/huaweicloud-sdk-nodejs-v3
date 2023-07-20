

export class HistoryRecord {
    private 'record_id'?: string;
    private 'job_id'?: string;
    private 'build_number'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public result?: string;
    public constructor() { 
    }
    public withRecordId(recordId: string): HistoryRecord {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withJobId(jobId: string): HistoryRecord {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNumber(buildNumber: number): HistoryRecord {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number  | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber(): number | undefined {
        return this['build_number'];
    }
    public withStartTime(startTime: string): HistoryRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): HistoryRecord {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResult(result: string): HistoryRecord {
        this['result'] = result;
        return this;
    }
}