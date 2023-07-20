import { AddSubscriptionRequestBody } from './AddSubscriptionRequestBody';


export class AddSubscriptionRequest {
    private 'topic_urn'?: string;
    public body?: AddSubscriptionRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): AddSubscriptionRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: AddSubscriptionRequestBody): AddSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}