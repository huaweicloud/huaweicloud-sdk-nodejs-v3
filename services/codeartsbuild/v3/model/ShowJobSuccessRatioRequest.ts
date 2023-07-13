

export class ShowJobSuccessRatioRequest {
    private 'job_id': string | undefined;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    public constructor(jobId?: any, startTime?: any, endTime?: any) { 
        this['job_id'] = jobId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withJobId(jobId: string): ShowJobSuccessRatioRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStartTime(startTime: string): ShowJobSuccessRatioRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowJobSuccessRatioRequest {
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