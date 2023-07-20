

export class BatchJobActionReq {
    public action?: BatchJobActionReqActionEnum | string;
    private 'job_id'?: string;
    public property?: string;
    public constructor(action?: string, jobId?: string, property?: string) { 
        this['action'] = action;
        this['job_id'] = jobId;
        this['property'] = property;
    }
    public withAction(action: BatchJobActionReqActionEnum | string): BatchJobActionReq {
        this['action'] = action;
        return this;
    }
    public withJobId(jobId: string): BatchJobActionReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProperty(property: string): BatchJobActionReq {
        this['property'] = property;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchJobActionReqActionEnum {
    TESTCONNECTION = 'testConnection'
}
