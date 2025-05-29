

export class ListBuildInfoRecordByJobIdRequest {
    private 'job_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public constructor(jobId?: string, startTime?: string, endTime?: string) { 
        this['job_id'] = jobId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withJobId(jobId: string): ListBuildInfoRecordByJobIdRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStartTime(startTime: string): ListBuildInfoRecordByJobIdRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListBuildInfoRecordByJobIdRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withPageIndex(pageIndex: number): ListBuildInfoRecordByJobIdRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListBuildInfoRecordByJobIdRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}