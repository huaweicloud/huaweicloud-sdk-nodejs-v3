import { AddSubscriptionFromSubscriptionUserRequestBody } from './AddSubscriptionFromSubscriptionUserRequestBody';


export class AddSubscriptionFromSubscriptionUserRequest {
    private 'topic_urn'?: string;
    public body?: AddSubscriptionFromSubscriptionUserRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): AddSubscriptionFromSubscriptionUserRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: AddSubscriptionFromSubscriptionUserRequestBody): AddSubscriptionFromSubscriptionUserRequest {
        this['body'] = body;
        return this;
    }
}