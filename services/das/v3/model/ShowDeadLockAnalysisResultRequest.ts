

export class ShowDeadLockAnalysisResultRequest {
    private 'instance_id'?: string;
    private 'dead_lock_id'?: string;
    private 'job_id'?: string;
    private 'transaction_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, deadLockId?: string) { 
        this['instance_id'] = instanceId;
        this['dead_lock_id'] = deadLockId;
    }
    public withInstanceId(instanceId: string): ShowDeadLockAnalysisResultRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDeadLockId(deadLockId: string): ShowDeadLockAnalysisResultRequest {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withJobId(jobId: string): ShowDeadLockAnalysisResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTransactionId(transactionId: string): ShowDeadLockAnalysisResultRequest {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withOffset(offset: number): ShowDeadLockAnalysisResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDeadLockAnalysisResultRequest {
        this['limit'] = limit;
        return this;
    }
}