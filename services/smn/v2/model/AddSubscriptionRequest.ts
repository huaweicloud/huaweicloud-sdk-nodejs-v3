import { AddSubscriptionRequestBody } from './AddSubscriptionRequestBody';


export class AddSubscriptionRequest {
    private 'topic_urn': string | undefined;
    public body?: AddSubscriptionRequestBody;
    public constructor(topicUrn?: any) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): AddSubscriptionRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withBody(body: AddSubscriptionRequestBody): AddSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}