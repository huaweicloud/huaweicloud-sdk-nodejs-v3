

export class BatchJobActionReq {
    public action: BatchJobActionReqActionEnum;
    private 'job_id': string | undefined;
    public property: string;
    public constructor(action?: any, jobId?: any, property?: any) { 
        this['action'] = action;
        this['job_id'] = jobId;
        this['property'] = property;
    }
    public withAction(action: BatchJobActionReqActionEnum): BatchJobActionReq {
        this['action'] = action;
        return this;
    }
    public withJobId(jobId: string): BatchJobActionReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
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
