

export class ShowScanJobsRequest {
    public offset?: number;
    public limit?: number;
    public content?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ShowScanJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowScanJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withContent(content: string): ShowScanJobsRequest {
        this['content'] = content;
        return this;
    }
    public withStartTime(startTime: string): ShowScanJobsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowScanJobsRequest {
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