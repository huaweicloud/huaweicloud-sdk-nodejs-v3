

export class ExecutionSummary {
    private 'order_id'?: string;
    private 'job_id'?: string;
    private 'report_time'?: number;
    public constructor() { 
    }
    public withOrderId(orderId: string): ExecutionSummary {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withJobId(jobId: string): ExecutionSummary {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withReportTime(reportTime: number): ExecutionSummary {
        this['report_time'] = reportTime;
        return this;
    }
    public set reportTime(reportTime: number  | undefined) {
        this['report_time'] = reportTime;
    }
    public get reportTime(): number | undefined {
        return this['report_time'];
    }
}