import { BatchDeleteSubscriptionsRequestBody } from './BatchDeleteSubscriptionsRequestBody';


export class BatchDeleteSubscriptionsByTopicRequest {
    private 'topic_urn'?: string;
    public body?: BatchDeleteSubscriptionsRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): BatchDeleteSubscriptionsByTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: BatchDeleteSubscriptionsRequestBody): BatchDeleteSubscriptionsByTopicRequest {
        this['body'] = body;
        return this;
    }
}