

export class TopicEntity {
    public policiesOnly?: boolean;
    public name?: string;
    public replication?: number;
    public partition?: number;
    private 'retention_time'?: number | undefined;
    private 'sync_replication'?: boolean | undefined;
    private 'sync_message_flush'?: boolean | undefined;
    private 'external_configs'?: object | undefined;
    private 'topic_type'?: number | undefined;
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
    public set retentionTime(retentionTime: number | undefined) {
        this['retention_time'] = retentionTime;
    }
    public get retentionTime() {
        return this['retention_time'];
    }
    public withSyncReplication(syncReplication: boolean): TopicEntity {
        this['sync_replication'] = syncReplication;
        return this;
    }
    public set syncReplication(syncReplication: boolean | undefined) {
        this['sync_replication'] = syncReplication;
    }
    public get syncReplication() {
        return this['sync_replication'];
    }
    public withSyncMessageFlush(syncMessageFlush: boolean): TopicEntity {
        this['sync_message_flush'] = syncMessageFlush;
        return this;
    }
    public set syncMessageFlush(syncMessageFlush: boolean | undefined) {
        this['sync_message_flush'] = syncMessageFlush;
    }
    public get syncMessageFlush() {
        return this['sync_message_flush'];
    }
    public withExternalConfigs(externalConfigs: object): TopicEntity {
        this['external_configs'] = externalConfigs;
        return this;
    }
    public set externalConfigs(externalConfigs: object | undefined) {
        this['external_configs'] = externalConfigs;
    }
    public get externalConfigs() {
        return this['external_configs'];
    }
    public withTopicType(topicType: number): TopicEntity {
        this['topic_type'] = topicType;
        return this;
    }
    public set topicType(topicType: number | undefined) {
        this['topic_type'] = topicType;
    }
    public get topicType() {
        return this['topic_type'];
    }
}