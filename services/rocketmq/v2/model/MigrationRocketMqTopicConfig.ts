

export class MigrationRocketMqTopicConfig {
    public topicName?: string;
    public order?: boolean;
    public perm?: number;
    public readQueueNums?: number;
    public writeQueueNums?: number;
    public topicFilterType?: string;
    public topicSysFlag?: number;
    public constructor() { 
    }
    public withTopicName(topicName: string): MigrationRocketMqTopicConfig {
        this['topicName'] = topicName;
        return this;
    }
    public withOrder(order: boolean): MigrationRocketMqTopicConfig {
        this['order'] = order;
        return this;
    }
    public withPerm(perm: number): MigrationRocketMqTopicConfig {
        this['perm'] = perm;
        return this;
    }
    public withReadQueueNums(readQueueNums: number): MigrationRocketMqTopicConfig {
        this['readQueueNums'] = readQueueNums;
        return this;
    }
    public withWriteQueueNums(writeQueueNums: number): MigrationRocketMqTopicConfig {
        this['writeQueueNums'] = writeQueueNums;
        return this;
    }
    public withTopicFilterType(topicFilterType: string): MigrationRocketMqTopicConfig {
        this['topicFilterType'] = topicFilterType;
        return this;
    }
    public withTopicSysFlag(topicSysFlag: number): MigrationRocketMqTopicConfig {
        this['topicSysFlag'] = topicSysFlag;
        return this;
    }
}