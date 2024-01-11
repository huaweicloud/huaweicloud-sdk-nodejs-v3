

export class ListJobHistoryParametersRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public name?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ListJobHistoryParametersRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ListJobHistoryParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListJobHistoryParametersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobHistoryParametersRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ListJobHistoryParametersRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListJobHistoryParametersRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withName(name: string): ListJobHistoryParametersRequest {
        this['name'] = name;
        return this;
    }
}