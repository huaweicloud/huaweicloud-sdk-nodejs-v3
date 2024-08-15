

export class ExectuionStatistic {
    private 'instance_status'?: string;
    private 'instance_count'?: number;
    private 'batch_indexes'?: Array<number>;
    public constructor(instanceStatus?: string, instanceCount?: number, batchIndexes?: Array<number>) { 
        this['instance_status'] = instanceStatus;
        this['instance_count'] = instanceCount;
        this['batch_indexes'] = batchIndexes;
    }
    public withInstanceStatus(instanceStatus: string): ExectuionStatistic {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withInstanceCount(instanceCount: number): ExectuionStatistic {
        this['instance_count'] = instanceCount;
        return this;
    }
    public set instanceCount(instanceCount: number  | undefined) {
        this['instance_count'] = instanceCount;
    }
    public get instanceCount(): number | undefined {
        return this['instance_count'];
    }
    public withBatchIndexes(batchIndexes: Array<number>): ExectuionStatistic {
        this['batch_indexes'] = batchIndexes;
        return this;
    }
    public set batchIndexes(batchIndexes: Array<number>  | undefined) {
        this['batch_indexes'] = batchIndexes;
    }
    public get batchIndexes(): Array<number> | undefined {
        return this['batch_indexes'];
    }
}