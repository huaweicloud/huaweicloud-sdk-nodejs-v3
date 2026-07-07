

export class ShowDeadLockTopologyGraphRespMeta {
    private 'dead_lock_id'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'occur_time'?: number;
    private 'total_transactions_in_cycle'?: number;
    private 'total_transactions_returned'?: number;
    public truncated?: boolean;
    public constructor(deadLockId?: string, instanceId?: string, projectId?: string, occurTime?: number, totalTransactionsInCycle?: number, totalTransactionsReturned?: number, truncated?: boolean) { 
        this['dead_lock_id'] = deadLockId;
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['occur_time'] = occurTime;
        this['total_transactions_in_cycle'] = totalTransactionsInCycle;
        this['total_transactions_returned'] = totalTransactionsReturned;
        this['truncated'] = truncated;
    }
    public withDeadLockId(deadLockId: string): ShowDeadLockTopologyGraphRespMeta {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withInstanceId(instanceId: string): ShowDeadLockTopologyGraphRespMeta {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): ShowDeadLockTopologyGraphRespMeta {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOccurTime(occurTime: number): ShowDeadLockTopologyGraphRespMeta {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withTotalTransactionsInCycle(totalTransactionsInCycle: number): ShowDeadLockTopologyGraphRespMeta {
        this['total_transactions_in_cycle'] = totalTransactionsInCycle;
        return this;
    }
    public set totalTransactionsInCycle(totalTransactionsInCycle: number  | undefined) {
        this['total_transactions_in_cycle'] = totalTransactionsInCycle;
    }
    public get totalTransactionsInCycle(): number | undefined {
        return this['total_transactions_in_cycle'];
    }
    public withTotalTransactionsReturned(totalTransactionsReturned: number): ShowDeadLockTopologyGraphRespMeta {
        this['total_transactions_returned'] = totalTransactionsReturned;
        return this;
    }
    public set totalTransactionsReturned(totalTransactionsReturned: number  | undefined) {
        this['total_transactions_returned'] = totalTransactionsReturned;
    }
    public get totalTransactionsReturned(): number | undefined {
        return this['total_transactions_returned'];
    }
    public withTruncated(truncated: boolean): ShowDeadLockTopologyGraphRespMeta {
        this['truncated'] = truncated;
        return this;
    }
}