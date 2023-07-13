

export class CreateInstanceTopicReq {
    public id: string;
    public replication?: number;
    private 'sync_message_flush'?: boolean | undefined;
    public partition?: number;
    private 'sync_replication'?: boolean | undefined;
    private 'retention_time'?: number | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): CreateInstanceTopicReq {
        this['id'] = id;
        return this;
    }
    public withReplication(replication: number): CreateInstanceTopicReq {
        this['replication'] = replication;
        return this;
    }
    public withSyncMessageFlush(syncMessageFlush: boolean): CreateInstanceTopicReq {
        this['sync_message_flush'] = syncMessageFlush;
        return this;
    }
    public set syncMessageFlush(syncMessageFlush: boolean | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush() {
        return this['sync_message_flush'];
    }
    public withPartition(partition: number): CreateInstanceTopicReq {
        this['partition'] = partition;
        return this;
    }
    public withSyncReplication(syncReplication: boolean): CreateInstanceTopicReq {
        this['sync_replication'] = syncReplication;
        return this;
    }
    public set syncReplication(syncReplication: boolean | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication() {
        return this['sync_replication'];
    }
    public withRetentionTime(retentionTime: number): CreateInstanceTopicReq {
        this['retention_time'] = retentionTime;
        return this;
    }
    public set retentionTime(retentionTime: number | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime() {
        return this['retention_time'];
    }
}