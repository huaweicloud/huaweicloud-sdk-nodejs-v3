import { CreateInstanceTopicReqTopicOtherConfigs } from './CreateInstanceTopicReqTopicOtherConfigs';


export class CreateInstanceTopicReq {
    public id?: string;
    public replication?: number;
    private 'sync_message_flush'?: boolean;
    public partition?: number;
    private 'sync_replication'?: boolean;
    private 'retention_time'?: number;
    private 'topic_other_configs'?: Array<CreateInstanceTopicReqTopicOtherConfigs>;
    private 'topic_desc'?: string;
    public constructor(id?: string) { 
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
    public set syncMessageFlush(syncMessageFlush: boolean  | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush(): boolean | undefined {
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
    public set syncReplication(syncReplication: boolean  | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication(): boolean | undefined {
        return this['sync_replication'];
    }
    public withRetentionTime(retentionTime: number): CreateInstanceTopicReq {
        this['retention_time'] = retentionTime;
        return this;
    }
    public set retentionTime(retentionTime: number  | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime(): number | undefined {
        return this['retention_time'];
    }
    public withTopicOtherConfigs(topicOtherConfigs: Array<CreateInstanceTopicReqTopicOtherConfigs>): CreateInstanceTopicReq {
        this['topic_other_configs'] = topicOtherConfigs;
        return this;
    }
    public set topicOtherConfigs(topicOtherConfigs: Array<CreateInstanceTopicReqTopicOtherConfigs>  | undefined) {
        this['topic_other_configs'] = topicOtherConfigs;
    }
    public get topicOtherConfigs(): Array<CreateInstanceTopicReqTopicOtherConfigs> | undefined {
        return this['topic_other_configs'];
    }
    public withTopicDesc(topicDesc: string): CreateInstanceTopicReq {
        this['topic_desc'] = topicDesc;
        return this;
    }
    public set topicDesc(topicDesc: string  | undefined) {
        this['topic_desc'] = topicDesc;
    }
    public get topicDesc(): string | undefined {
        return this['topic_desc'];
    }
}