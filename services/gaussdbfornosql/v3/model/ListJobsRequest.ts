

export class ListJobsRequest {
    public id?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): ListJobsRequest {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: string): ListJobsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListJobsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ListJobsRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ListJobsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobsRequest {
        this['limit'] = limit;
        return this;
    }
}