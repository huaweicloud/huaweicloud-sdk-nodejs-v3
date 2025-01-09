

export class ApplyDesktopsInternetRsp {
    private 'job_id'?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    public constructor() { 
    }
    public withJobId(jobId: string): ApplyDesktopsInternetRsp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGetJobEndpoint(getJobEndpoint: string): ApplyDesktopsInternetRsp {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ApplyDesktopsInternetRsp {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ApplyDesktopsInternetRsp {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ApplyDesktopsInternetRsp {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
}