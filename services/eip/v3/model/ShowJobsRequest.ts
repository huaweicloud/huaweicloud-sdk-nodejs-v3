

export class ShowJobsRequest {
    private 'job_id'?: string;
    public fields?: Array<ShowJobsRequestFieldsEnum> | Array<string>;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFields(fields: Array<ShowJobsRequestFieldsEnum> | Array<string>): ShowJobsRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobsRequestFieldsEnum {
    ID = 'id',
    ACTION = 'action',
    STATUS = 'status',
    ERROR_TASK = 'error_task',
    ERROR_CODE = 'error_code',
    ERROR_MESSAGE = 'error_message',
    START_TIME = 'start_time',
    END_TIME = 'end_time'
}
