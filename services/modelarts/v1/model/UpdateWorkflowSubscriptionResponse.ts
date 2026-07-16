
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkflowSubscriptionResponse extends SdkResponse {
    private 'created_at'?: string;
    private 'subscription_id'?: string;
    private 'topic_urns'?: Array<string>;
    public entity?: string;
    public events?: Array<string>;
    public constructor() { 
        super();
    }
    public withCreatedAt(createdAt: string): UpdateWorkflowSubscriptionResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSubscriptionId(subscriptionId: string): UpdateWorkflowSubscriptionResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withTopicUrns(topicUrns: Array<string>): UpdateWorkflowSubscriptionResponse {
        this['topic_urns'] = topicUrns;
        return this;
    }
    public set topicUrns(topicUrns: Array<string>  | undefined) {
        this['topic_urns'] = topicUrns;
    }
    public get topicUrns(): Array<string> | undefined {
        return this['topic_urns'];
    }
    public withEntity(entity: string): UpdateWorkflowSubscriptionResponse {
        this['entity'] = entity;
        return this;
    }
    public withEvents(events: Array<string>): UpdateWorkflowSubscriptionResponse {
        this['events'] = events;
        return this;
    }
}