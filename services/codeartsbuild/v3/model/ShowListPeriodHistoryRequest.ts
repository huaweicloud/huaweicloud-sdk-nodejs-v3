

export class ShowListPeriodHistoryRequest {
    private 'job_id': string | undefined;
    public offset: number;
    public limit: number;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    public constructor(jobId?: any, offset?: any, limit?: any, startTime?: any, endTime?: any) { 
        this['job_id'] = jobId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withJobId(jobId: string): ShowListPeriodHistoryRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withOffset(offset: number): ShowListPeriodHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowListPeriodHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ShowListPeriodHistoryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowListPeriodHistoryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}