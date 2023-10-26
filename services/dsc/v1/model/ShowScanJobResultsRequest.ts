

export class ShowScanJobResultsRequest {
    private 'job_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: ShowScanJobResultsRequestTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowScanJobResultsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOffset(offset: number): ShowScanJobResultsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowScanJobResultsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ShowScanJobResultsRequestTypeEnum | string): ShowScanJobResultsRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ShowScanJobResultsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowScanJobResultsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowScanJobResultsRequestTypeEnum {
    DATABASE = 'DATABASE',
    OBS = 'OBS',
    BIGDATA = 'BIGDATA'
}
