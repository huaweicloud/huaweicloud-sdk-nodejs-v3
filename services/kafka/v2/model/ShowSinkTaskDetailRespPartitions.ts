

export class ShowSinkTaskDetailRespPartitions {
    private 'partition_id'?: string | undefined;
    public status?: string;
    private 'last_transfer_offset'?: string | undefined;
    private 'log_end_offset'?: string | undefined;
    public lag?: string;
    public constructor() { 
    }
    public withPartitionId(partitionId: string): ShowSinkTaskDetailRespPartitions {
        this['partition_id'] = partitionId;
        return this;
    }
    public set partitionId(partitionId: string | undefined) {
        this['partition_id'] = partitionId;
    }
    public get partitionId() {
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
    public set lastTransferOffset(lastTransferOffset: string | undefined) {
        this['last_transfer_offset'] = lastTransferOffset;
    }
    public get lastTransferOffset() {
        return this['last_transfer_offset'];
    }
    public withLogEndOffset(logEndOffset: string): ShowSinkTaskDetailRespPartitions {
        this['log_end_offset'] = logEndOffset;
        return this;
    }
    public set logEndOffset(logEndOffset: string | undefined) {
        this['log_end_offset'] = logEndOffset;
    }
    public get logEndOffset() {
        return this['log_end_offset'];
    }
    public withLag(lag: string): ShowSinkTaskDetailRespPartitions {
        this['lag'] = lag;
        return this;
    }
}