import { CreateInstanceTopicReqTopicOtherConfigs } from './CreateInstanceTopicReqTopicOtherConfigs';


export class UpdateInstanceTopicReqTopics {
    public id?: string;
    private 'retention_time'?: number;
    private 'sync_replication'?: boolean;
    private 'sync_message_flush'?: boolean;
    private 'new_partition_numbers'?: number;
    private 'new_partition_brokers'?: Array<number>;
    private 'topic_other_configs'?: Array<CreateInstanceTopicReqTopicOtherConfigs>;
    private 'topic_desc'?: string;
    public constructor(id?: string) { 
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
    public set retentionTime(retentionTime: number  | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime(): number | undefined {
        return this['retention_time'];
    }
    public withSyncReplication(syncReplication: boolean): UpdateInstanceTopicReqTopics {
        this['sync_replication'] = syncReplication;
        return this;
    }
    public set syncReplication(syncReplication: boolean  | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication(): boolean | undefined {
        return this['sync_replication'];
    }
    public withSyncMessageFlush(syncMessageFlush: boolean): UpdateInstanceTopicReqTopics {
        this['sync_message_flush'] = syncMessageFlush;
        return this;
    }
    public set syncMessageFlush(syncMessageFlush: boolean  | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush(): boolean | undefined {
        return this['sync_message_flush'];
    }
    public withNewPartitionNumbers(newPartitionNumbers: number): UpdateInstanceTopicReqTopics {
        this['new_partition_numbers'] = newPartitionNumbers;
        return this;
    }
    public set newPartitionNumbers(newPartitionNumbers: number  | undefined) {
        this['new_partition_numbers'] = newPartitionNumbers;
    }
    public get newPartitionNumbers(): number | undefined {
        return this['new_partition_numbers'];
    }
    public withNewPartitionBrokers(newPartitionBrokers: Array<number>): UpdateInstanceTopicReqTopics {
        this['new_partition_brokers'] = newPartitionBrokers;
        return this;
    }
    public set newPartitionBrokers(newPartitionBrokers: Array<number>  | undefined) {
        this['new_partition_brokers'] = newPartitionBrokers;
    }
    public get newPartitionBrokers(): Array<number> | undefined {
        return this['new_partition_brokers'];
    }
    public withTopicOtherConfigs(topicOtherConfigs: Array<CreateInstanceTopicReqTopicOtherConfigs>): UpdateInstanceTopicReqTopics {
        this['topic_other_configs'] = topicOtherConfigs;
        return this;
    }
    public set topicOtherConfigs(topicOtherConfigs: Array<CreateInstanceTopicReqTopicOtherConfigs>  | undefined) {
        this['topic_other_configs'] = topicOtherConfigs;
    }
    public get topicOtherConfigs(): Array<CreateInstanceTopicReqTopicOtherConfigs> | undefined {
        return this['topic_other_configs'];
    }
    public withTopicDesc(topicDesc: string): UpdateInstanceTopicReqTopics {
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