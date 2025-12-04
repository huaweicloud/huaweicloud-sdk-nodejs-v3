

export class ListJobsRequest {
    private 'request_id'?: string;
    private 'request_ids'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRequestId(requestId: string): ListJobsRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withRequestIds(requestIds: string): ListJobsRequest {
        this['request_ids'] = requestIds;
        return this;
    }
    public set requestIds(requestIds: string  | undefined) {
        this['request_ids'] = requestIds;
    }
    public get requestIds(): string | undefined {
        return this['request_ids'];
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