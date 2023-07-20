

export class ShowSinkTaskDetailRespPartitions {
    private 'partition_id'?: string;
    public status?: string;
    private 'last_transfer_offset'?: string;
    private 'log_end_offset'?: string;
    public lag?: string;
    public constructor() { 
    }
    public withPartitionId(partitionId: string): ShowSinkTaskDetailRespPartitions {
        this['partition_id'] = partitionId;
        return this;
    }
    public set partitionId(partitionId: string  | undefined) {
        this['partition_id'] = partitionId;
    }
    public get partitionId(): string | undefined {
        return this['partition_id'];
    }
    public withStatus(status: string): ShowSinkTaskDetailRespPartitions {
        this['status'] = status;
        return this;
    }
    public withLastTransferOffset(lastTransferOffset: string): ShowSinkTaskDetailRespPartitions {
        this['last_transfer_offset'] = lastTransferOffset;
        return this;
    }
    public set lastTransferOffset(lastTransferOffset: string  | undefined) {
        this['last_transfer_offset'] = lastTransferOffset;
    }
    public get lastTransferOffset(): string | undefined {
        return this['last_transfer_offset'];
    }
    public withLogEndOffset(logEndOffset: string): ShowSinkTaskDetailRespPartitions {
        this['log_end_offset'] = logEndOffset;
        return this;
    }
    public set logEndOffset(logEndOffset: string  | undefined) {
        this['log_end_offset'] = logEndOffset;
    }
    public get logEndOffset(): string | undefined {
        return this['log_end_offset'];
    }
    public withLag(lag: string): ShowSinkTaskDetailRespPartitions {
        this['lag'] = lag;
        return this;
    }
}