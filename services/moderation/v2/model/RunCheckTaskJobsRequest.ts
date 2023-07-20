

export class RunCheckTaskJobsRequest {
    public status?: RunCheckTaskJobsRequestStatusEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withStatus(status: RunCheckTaskJobsRequestStatusEnum | string): RunCheckTaskJobsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): RunCheckTaskJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): RunCheckTaskJobsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunCheckTaskJobsRequestStatusEnum {
    CREATED = 'created',
    RUNNING = 'running',
    FINISH = 'finish',
    FAILED = 'failed'
}
