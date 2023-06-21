

export class RestartInstanceRsp {
    public jobId?: Array<string>;
    public constructor() { 
    }
    public withJobId(jobId: Array<string>): RestartInstanceRsp {
        this['jobId'] = jobId;
        return this;
    }
}