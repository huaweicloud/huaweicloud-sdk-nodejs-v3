

export class ListInstanceJobsRequest {
    public status?: ListInstanceJobsRequestStatusEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withStatus(status: ListInstanceJobsRequestStatusEnum | string): ListInstanceJobsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListInstanceJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceJobsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceJobsRequestStatusEnum {
    CREATING = 'Creating',
    INITIALIZING = 'Initializing',
    RUNNING = 'Running',
    FAILED = 'Failed',
    SUCCESS = 'Success'
}
