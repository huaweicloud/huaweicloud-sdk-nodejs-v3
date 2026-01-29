import { KafkaTopicDetailEntityPartitions } from './KafkaTopicDetailEntityPartitions';


export class KafkaTopicDetailEntity {
    public topic?: string;
    private 'create_time'?: number;
    public partitions?: Array<KafkaTopicDetailEntityPartitions>;
    public constructor() { 
    }
    public withTopic(topic: string): KafkaTopicDetailEntity {
        this['topic'] = topic;
        return this;
    }
    public withCreateTime(createTime: number): KafkaTopicDetailEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withPartitions(partitions: Array<KafkaTopicDetailEntityPartitions>): KafkaTopicDetailEntity {
        this['partitions'] = partitions;
        return this;
    }
}