

export class FlinkJobStatus {
    private 'job_id'?: number;
    private 'status_name'?: string;
    private 'status_desc'?: string;
    public constructor() { 
    }
    public withJobId(jobId: number): FlinkJobStatus {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withStatusName(statusName: string): FlinkJobStatus {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withStatusDesc(statusDesc: string): FlinkJobStatus {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): string | undefined {
        return this['status_desc'];
    }
}