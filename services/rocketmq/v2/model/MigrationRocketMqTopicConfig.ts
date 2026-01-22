

export class MigrationRocketMqTopicConfig {
    private 'topic_name'?: string;
    public order?: boolean;
    public perm?: number;
    private 'read_queue_nums'?: number;
    private 'write_queue_nums'?: number;
    private 'topic_filter_type'?: string;
    private 'topic_sys_flag'?: number;
    public constructor() { 
    }
    public withTopicName(topicName: string): MigrationRocketMqTopicConfig {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
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
        this['read_queue_nums'] = readQueueNums;
        return this;
    }
    public set readQueueNums(readQueueNums: number  | undefined) {
        this['read_queue_nums'] = readQueueNums;
    }
    public get readQueueNums(): number | undefined {
        return this['read_queue_nums'];
    }
    public withWriteQueueNums(writeQueueNums: number): MigrationRocketMqTopicConfig {
        this['write_queue_nums'] = writeQueueNums;
        return this;
    }
    public set writeQueueNums(writeQueueNums: number  | undefined) {
        this['write_queue_nums'] = writeQueueNums;
    }
    public get writeQueueNums(): number | undefined {
        return this['write_queue_nums'];
    }
    public withTopicFilterType(topicFilterType: string): MigrationRocketMqTopicConfig {
        this['topic_filter_type'] = topicFilterType;
        return this;
    }
    public set topicFilterType(topicFilterType: string  | undefined) {
        this['topic_filter_type'] = topicFilterType;
    }
    public get topicFilterType(): string | undefined {
        return this['topic_filter_type'];
    }
    public withTopicSysFlag(topicSysFlag: number): MigrationRocketMqTopicConfig {
        this['topic_sys_flag'] = topicSysFlag;
        return this;
    }
    public set topicSysFlag(topicSysFlag: number  | undefined) {
        this['topic_sys_flag'] = topicSysFlag;
    }
    public get topicSysFlag(): number | undefined {
        return this['topic_sys_flag'];
    }
}