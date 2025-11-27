

export class ShowPolicyJobRequest {
    public jobid?: string;
    public constructor(jobid?: string) { 
        this['jobid'] = jobid;
    }
    public withJobid(jobid: string): ShowPolicyJobRequest {
        this['jobid'] = jobid;
        return this;
    }
}