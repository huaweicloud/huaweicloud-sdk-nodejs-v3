

export class ConfirmSubscriptionRequest {
    private 'topic_urn'?: string;
    public endpoint?: string;
    public token?: string;
    public constructor(token?: string) { 
        this['token'] = token;
    }
    public withTopicUrn(topicUrn: string): ConfirmSubscriptionRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withEndpoint(endpoint: string): ConfirmSubscriptionRequest {
        this['endpoint'] = endpoint;
        return this;
    }
    public withToken(token: string): ConfirmSubscriptionRequest {
        this['token'] = token;
        return this;
    }
}