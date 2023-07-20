import { TopicEntityTopicOtherConfigs } from './TopicEntityTopicOtherConfigs';


export class TopicEntity {
    public policiesOnly?: boolean;
    public name?: string;
    public replication?: number;
    public partition?: number;
    private 'retention_time'?: number;
    private 'sync_replication'?: boolean;
    private 'sync_message_flush'?: boolean;
    private 'external_configs'?: object;
    private 'topic_type'?: number;
    private 'topic_other_configs'?: Array<TopicEntityTopicOtherConfigs>;
    private 'topic_desc'?: string;
    private 'created_at'?: number;
    public constructor() { 
    }
    public withPoliciesOnly(policiesOnly: boolean): TopicEntity {
        this['policiesOnly'] = policiesOnly;
        return this;
    }
    public withName(name: string): TopicEntity {
        this['name'] = name;
        return this;
    }
    public withReplication(replication: number): TopicEntity {
        this['replication'] = replication;
        return this;
    }
    public withPartition(partition: number): TopicEntity {
        this['partition'] = partition;
        return this;
    }
    public withRetentionTime(retentionTime: number): TopicEntity {
        this['retention_time'] = retentionTime;
        return this;
    }
    public set retentionTime(retentionTime: number  | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime(): number | undefined {
        return this['retention_time'];
    }
    public withSyncReplication(syncReplication: boolean): TopicEntity {
        this['sync_replication'] = syncReplication;
        return this;
    }
    public set syncReplication(syncReplication: boolean  | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication(): boolean | undefined {
        return this['sync_replication'];
    }
    public withSyncMessageFlush(syncMessageFlush: boolean): TopicEntity {
        this['sync_message_flush'] = syncMessageFlush;
        return this;
    }
    public set syncMessageFlush(syncMessageFlush: boolean  | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush(): boolean | undefined {
        return this['sync_message_flush'];
    }
    public withExternalConfigs(externalConfigs: object): TopicEntity {
        this['external_configs'] = externalConfigs;
        return this;
    }
    public set externalConfigs(externalConfigs: object  | undefined) {
        this['external_configs'] = externalConfigs;
    }
    public get externalConfigs(): object | undefined {
        return this['external_configs'];
    }
    public withTopicType(topicType: number): TopicEntity {
        this['topic_type'] = topicType;
        return this;
    }
    public set topicType(topicType: number  | undefined) {
        this['topic_type'] = topicType;
    }
    public get topicType(): number | undefined {
        return this['topic_type'];
    }
    public withTopicOtherConfigs(topicOtherConfigs: Array<TopicEntityTopicOtherConfigs>): TopicEntity {
        this['topic_other_configs'] = topicOtherConfigs;
        return this;
    }
    public set topicOtherConfigs(topicOtherConfigs: Array<TopicEntityTopicOtherConfigs>  | undefined) {
        this['topic_other_configs'] = topicOtherConfigs;
    }
    public get topicOtherConfigs(): Array<TopicEntityTopicOtherConfigs> | undefined {
        return this['topic_other_configs'];
    }
    public withTopicDesc(topicDesc: string): TopicEntity {
        this['topic_desc'] = topicDesc;
        return this;
    }
    public set topicDesc(topicDesc: string  | undefined) {
        this['topic_desc'] = topicDesc;
    }
    public get topicDesc(): string | undefined {
        return this['topic_desc'];
    }
    public withCreatedAt(createdAt: number): TopicEntity {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
}