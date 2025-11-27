

export class ListAccessControlTaskRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    public offset?: number;
    public limit?: number;
    public status?: string;
    public constructor() { 
    }
    public withStartTime(startTime: number): ListAccessControlTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAccessControlTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListAccessControlTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAccessControlTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListAccessControlTaskRequest {
        this['status'] = status;
        return this;
    }
}