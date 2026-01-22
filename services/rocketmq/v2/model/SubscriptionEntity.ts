import { ConsumersInTagEntity } from './ConsumersInTagEntity';


export class SubscriptionEntity {
    private 'topic_name'?: string;
    private 'consumers_in_tags'?: Array<ConsumersInTagEntity>;
    public constructor() { 
    }
    public withTopicName(topicName: string): SubscriptionEntity {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withConsumersInTags(consumersInTags: Array<ConsumersInTagEntity>): SubscriptionEntity {
        this['consumers_in_tags'] = consumersInTags;
        return this;
    }
    public set consumersInTags(consumersInTags: Array<ConsumersInTagEntity>  | undefined) {
        this['consumers_in_tags'] = consumersInTags;
    }
    public get consumersInTags(): Array<ConsumersInTagEntity> | undefined {
        return this['consumers_in_tags'];
    }
}