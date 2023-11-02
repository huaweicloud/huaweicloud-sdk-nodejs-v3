

export class UpdateItemResp {
    public id?: string;
    public from?: string;
    public to?: string;
    public status?: string;
    public process?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateItemResp {
        this['id'] = id;
        return this;
    }
    public withFrom(from: string): UpdateItemResp {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): UpdateItemResp {
        this['to'] = to;
        return this;
    }
    public withStatus(status: string): UpdateItemResp {
        this['status'] = status;
        return this;
    }
    public withProcess(process: string): UpdateItemResp {
        this['process'] = process;
        return this;
    }
    public withStartTime(startTime: string): UpdateItemResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): UpdateItemResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): UpdateItemResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFailedReason(failedReason: string): UpdateItemResp {
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