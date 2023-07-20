import { PublishMessageRequestBody } from './PublishMessageRequestBody';


export class PublishMessageRequest {
    private 'topic_urn'?: string;
    public body?: PublishMessageRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): PublishMessageRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: PublishMessageRequestBody): PublishMessageRequest {
        this['body'] = body;
        return this;
    }
}