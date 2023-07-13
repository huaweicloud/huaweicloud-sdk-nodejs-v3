

export class UpdateInstanceTopicReqTopics {
    public id: string;
    private 'retention_time'?: number | undefined;
    private 'sync_replication'?: boolean | undefined;
    private 'sync_message_flush'?: boolean | undefined;
    private 'new_partition_numbers'?: number | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateInstanceTopicReqTopics {
        this['id'] = id;
        return this;
    }
    public withRetentionTime(retentionTime: number): UpdateInstanceTopicReqTopics {
        this['retention_time'] = retentionTime;
        return this;
    }
    public set retentionTime(retentionTime: number | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime() {
        return this['retention_time'];
    }
    public withSyncReplication(syncReplication: boolean): UpdateInstanceTopicReqTopics {
        this['sync_replication'] = syncReplication;
        return this;
    }
    public set syncReplication(syncReplication: boolean | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication() {
        return this['sync_replication'];
    }
    public withSyncMessageFlush(syncMessageFlush: boolean): UpdateInstanceTopicReqTopics {
        this['sync_message_flush'] = syncMessageFlush;
        return this;
    }
    public set syncMessageFlush(syncMessageFlush: boolean | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush() {
        return this['sync_message_flush'];
    }
    public withNewPartitionNumbers(newPartitionNumbers: number): UpdateInstanceTopicReqTopics {
        this['new_partition_numbers'] = newPartitionNumbers;
        return this;
    }
    public set newPartitionNumbers(newPartitionNumbers: number | undefined) {
        this['new_partition_numbers'] = newPartitionNumbers;
    }
    public get newPartitionNumbers() {
        return this['new_partition_numbers'];
    }
}