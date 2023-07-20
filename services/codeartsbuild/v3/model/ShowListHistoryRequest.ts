

export class ShowListHistoryRequest {
    private 'job_id'?: string;
    public offset?: number;
    public limit?: number;
    public interval?: number;
    public constructor(jobId?: string, offset?: number, limit?: number, interval?: number) { 
        this['job_id'] = jobId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['interval'] = interval;
    }
    public withJobId(jobId: string): ShowListHistoryRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOffset(offset: number): ShowListHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowListHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withInterval(interval: number): ShowListHistoryRequest {
        this['interval'] = interval;
        return this;
    }
}