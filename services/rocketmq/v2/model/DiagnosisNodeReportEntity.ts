

export class DiagnosisNodeReportEntity {
    private 'node_id'?: string;
    private 'is_faulted'?: boolean;
    private 'abnormal_item_sum'?: number;
    private 'message_accumulation'?: number;
    private 'dead_lock'?: boolean;
    private 'deadlock_thread'?: string;
    private 'stack_id'?: string;
    private 'is_pop'?: boolean;
    private 'consume_type'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): DiagnosisNodeReportEntity {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIsFaulted(isFaulted: boolean): DiagnosisNodeReportEntity {
        this['is_faulted'] = isFaulted;
        return this;
    }
    public set isFaulted(isFaulted: boolean  | undefined) {
        this['is_faulted'] = isFaulted;
    }
    public get isFaulted(): boolean | undefined {
        return this['is_faulted'];
    }
    public withAbnormalItemSum(abnormalItemSum: number): DiagnosisNodeReportEntity {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number  | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum(): number | undefined {
        return this['abnormal_item_sum'];
    }
    public withMessageAccumulation(messageAccumulation: number): DiagnosisNodeReportEntity {
        this['message_accumulation'] = messageAccumulation;
        return this;
    }
    public set messageAccumulation(messageAccumulation: number  | undefined) {
        this['message_accumulation'] = messageAccumulation;
    }
    public get messageAccumulation(): number | undefined {
        return this['message_accumulation'];
    }
    public withDeadLock(deadLock: boolean): DiagnosisNodeReportEntity {
        this['dead_lock'] = deadLock;
        return this;
    }
    public set deadLock(deadLock: boolean  | undefined) {
        this['dead_lock'] = deadLock;
    }
    public get deadLock(): boolean | undefined {
        return this['dead_lock'];
    }
    public withDeadlockThread(deadlockThread: string): DiagnosisNodeReportEntity {
        this['deadlock_thread'] = deadlockThread;
        return this;
    }
    public set deadlockThread(deadlockThread: string  | undefined) {
        this['deadlock_thread'] = deadlockThread;
    }
    public get deadlockThread(): string | undefined {
        return this['deadlock_thread'];
    }
    public withStackId(stackId: string): DiagnosisNodeReportEntity {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withIsPop(isPop: boolean): DiagnosisNodeReportEntity {
        this['is_pop'] = isPop;
        return this;
    }
    public set isPop(isPop: boolean  | undefined) {
        this['is_pop'] = isPop;
    }
    public get isPop(): boolean | undefined {
        return this['is_pop'];
    }
    public withConsumeType(consumeType: string): DiagnosisNodeReportEntity {
        this['consume_type'] = consumeType;
        return this;
    }
    public set consumeType(consumeType: string  | undefined) {
        this['consume_type'] = consumeType;
    }
    public get consumeType(): string | undefined {
        return this['consume_type'];
    }
}