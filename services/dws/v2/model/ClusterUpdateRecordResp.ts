

export class ClusterUpdateRecordResp {
    private 'item_id'?: string;
    public status?: string;
    private 'record_type'?: string;
    private 'from_version'?: string;
    private 'to_version'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withItemId(itemId: string): ClusterUpdateRecordResp {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withStatus(status: string): ClusterUpdateRecordResp {
        this['status'] = status;
        return this;
    }
    public withRecordType(recordType: string): ClusterUpdateRecordResp {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): string | undefined {
        return this['record_type'];
    }
    public withFromVersion(fromVersion: string): ClusterUpdateRecordResp {
        this['from_version'] = fromVersion;
        return this;
    }
    public set fromVersion(fromVersion: string  | undefined) {
        this['from_version'] = fromVersion;
    }
    public get fromVersion(): string | undefined {
        return this['from_version'];
    }
    public withToVersion(toVersion: string): ClusterUpdateRecordResp {
        this['to_version'] = toVersion;
        return this;
    }
    public set toVersion(toVersion: string  | undefined) {
        this['to_version'] = toVersion;
    }
    public get toVersion(): string | undefined {
        return this['to_version'];
    }
    public withStartTime(startTime: string): ClusterUpdateRecordResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ClusterUpdateRecordResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): ClusterUpdateRecordResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFailedReason(failedReason: string): ClusterUpdateRecordResp {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}