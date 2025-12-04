import { ShowKafkaTopicDetailResponsePartitions } from './ShowKafkaTopicDetailResponsePartitions';


export class ShowKafkaTopicDetailResponseBody {
    public topic?: string;
    private 'create_time'?: number;
    public partitions?: Array<ShowKafkaTopicDetailResponsePartitions>;
    public constructor() { 
    }
    public withTopic(topic: string): ShowKafkaTopicDetailResponseBody {
        this['topic'] = topic;
        return this;
    }
    public withCreateTime(createTime: number): ShowKafkaTopicDetailResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withPartitions(partitions: Array<ShowKafkaTopicDetailResponsePartitions>): ShowKafkaTopicDetailResponseBody {
        this['partitions'] = partitions;
        return this;
    }
}