

export class DeleteP2cVpnGatewayJobRequest {
    private 'job_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DeleteP2cVpnGatewayJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}